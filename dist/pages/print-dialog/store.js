(function() {
  // exposing __configure_redux_store__ to window
  // instead of redux_store to avoid mutation of redux_store
  // using window object
  window.__configure_redux_store__ = () => {
    const { createStore, applyMiddleware, compose } = Redux;

    const initialState = {
      printSettings: {
        title: "",
        layout: ""
      },
      whatToPrint: {
        printEvents: false,
        printTasks: false,
        view: "",
        fromDate: "",
        toDate: ""
      },
      options: {
        showTasksWithNoDueDate: false,
        showCompletedTasks: false
      },
      iframe: ""
    };

    const middlewares = [];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    return createStore(
      window.__redux_reducer__,
      initialState,
      // remove this while integrating this dialog in Thunderbird
      composeEnhancers(applyMiddleware(...middlewares))
    );
  };
})();
