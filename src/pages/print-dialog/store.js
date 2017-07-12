(function() {
  const { createStore, applyMiddleware, compose } = Redux;

  const { createLogger } = window.reduxLogger;

  const initialState = {
    printSettings: {
      title: "Some title",
      layout: "LIST"
    },
    whatToPrint: {
      printEvents: true,
      printTasks: true,
      view: "CURRENT_VIEW",
      fromDate: "",
      toDate: ""
    },
    options: {
      showTasksWithNoDueDate: true,
      showCompletedTasks: true
    },
    iframe: ""
  };

  const middlewares = [createLogger()];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const store = createStore(
    window.redux_reducer,
    initialState,
    // remove this while integrating this dialog in Thunderbird
    composeEnhancers(applyMiddleware(...middlewares))
  );

  window.redux_store = store;
})();
