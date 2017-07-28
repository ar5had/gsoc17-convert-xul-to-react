(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const PrintDialog = ({ actions }) => {
    return React.createElement(
      Dialog,
      {
        buttonlabelaccept: "Print",
        buttonaccesskeyaccept: "P",
        ondialogaccept: actions.acceptDialog,
        ondialogcancel: actions.cancelDialog
      },
      React.createElement(
        "div",
        { className: "vgrid" },
        React.createElement(PrintDialogGroupBox, null),
        React.createElement(HSplitter, {
          boxId: "groupboxVbox",
          boxWindowId: "dialog-content-box"
        }),
        React.createElement("iframe", { src: "about:blank", frameBorder: "0", id: "content" })
      )
    );
  };

  PrintDialog.propTypes = {
    actions: PropTypes.object.isRequired
  };

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__dialog_actions__, dispatch)
  });

  window.PrintDialog = connect(undefined, mapDispatchToProps)(PrintDialog);
})();
