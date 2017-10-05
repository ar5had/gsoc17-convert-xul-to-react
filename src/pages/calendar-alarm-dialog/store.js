(function() {
  // exposing __configure_redux_store__ to window
  // instead of redux_store to avoid mutation of redux_store
  // using window object
  window.__configure_redux_store__ = () => {
    const { createStore, applyMiddleware, compose } = Redux;

    const initialState = {
      items: [{ name: "one", time: "23, apr, 2017" }, { name: "two", time: "23, apr, 2017" }, { name: "three", time: "23, apr, 2017" }]
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
