(function() {
  const { createStore, applyMiddleware } = Redux;

  const { createLogger } = window.reduxLogger;

  const initialState = {
    title: "Some title",
    layout: "LIST",
    printEvents: true,
    printTasks: true,
    view: "CURRENT_VIEW",
    dateRange: [],
    showTasksWithNoDueDate: true,
    showCompletedTasks: true,
    iframe: ""
  };

  const store = createStore(
    window.redux_reducer,
    initialState,
    // remove this while integrating this dialog in Thunderbird
    applyMiddleware(createLogger())
  );

  window.redux_store = store;
})();
