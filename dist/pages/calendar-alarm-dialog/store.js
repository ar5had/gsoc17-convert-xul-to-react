(function() {
  // exposing __configure_redux_store__ to window
  // instead of redux_store to avoid mutation of redux_store
  // using window object
  window.__configure_redux_store__ = () => {
    const { createStore, applyMiddleware, compose } = Redux;

    const initialState = {
      printSettings: {
        title: "",
        selectedLayoutIndex: 0,
        layoutList: [{ value: "List" }, { value: "Monthly Grid" }, { value: "Weekly Planner" }]
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
      iframe: {
        title: "demo",
        html:
          "<!DOCTYPE html><html><body><h1>MyFirstHeading</h1><p>Myfirstparagraph.</p></body></html>"
      }
    };

    const middlewares = [];

    // add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
      window.__redux_reducer__,
      initialState,
      composeEnhancers(applyMiddleware(...middlewares))
    );
  };
})();
