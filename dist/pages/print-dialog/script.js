(function() {
  const { Provider } = ReactRedux;
  // redux_store will be available to acceptDialog
  // and message event listener by closure
  const redux_store = window.__configure_redux_store__();

  const sendMessageToParentFrame = (msg, origin) => {
    // parent and window are same thing if the current page is not in any frame
    if (window !== parent) {
      parent.postMessage(msg, origin);
    }
  };

  window.addEventListener("message", e => {
    // extentions and other 3rd party scripts talk via postMeessage api(same orgin)
    // so it is very important to filter those events
    if (e.origin !== window.location.origin || !e.data || e.data.source !== "dialog-message") {
      return;
    }
    sendMessageToParentFrame(
      { messageRecieved: true, source: "dialog-message" },
      `${window.location.origin}/iframe-testing-ground`
    );
    const state = Object.assign({}, e.data);
    // updating state with data sent via message event
    redux_store.dispatch(window.__global_actions__.loadInitialState(state));
  });

  window.acceptDialog = () => {
    const stateData = JSON.parse(JSON.stringify(redux_store.getState()));
    stateData.source = "dialog-message";
    stateData.action = "ACCEPT";
    sendMessageToParentFrame(stateData, `${window.location.origin}/iframe-testing-ground`);
  };

  window.cancelDialog = () => {
    const message = { source: "dialog-message", action: "CANCEL" };
    sendMessageToParentFrame(message, `${window.location.origin}/iframe-testing-ground`);
  };

  ReactDOM.render(
    React.createElement(Provider, { store: redux_store }, React.createElement(PrintDialog, null)),
    document.getElementById("root")
  );
})();
