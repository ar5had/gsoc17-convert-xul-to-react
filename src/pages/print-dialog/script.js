const { Provider } = ReactRedux;

ReactDOM.render(
  <Provider store={window.redux_store}>
    <PrintDialog />
  </Provider>,
  document.getElementById("root")
);
