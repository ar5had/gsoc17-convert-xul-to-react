(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const PrintDialog = ({ actions }) => {
    return (
      <Dialog
        buttonlabelaccept="Print"
        buttonaccesskeyaccept="P"
        ondialogaccept={actions.acceptDialog}
        ondialogcancel={actions.cancelDialog}
      >
        <div className="vgrid">
          <PrintDialogGroupBox />
          <HSplitter boxId="groupboxVbox" boxWindowId="dialog-content-box" />
          <iframe src="about:blank" frameBorder="0" id="content" />
        </div>
      </Dialog>
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
