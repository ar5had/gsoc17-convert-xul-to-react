(function() {
  const PrintDialog = () => {
    return (
      <Dialog
        ondialogaccept={window.acceptDialog}
        ondialogcancel={window.cancelDialog}
        buttonlabelaccept="Print"
        buttonaccesskeyaccept="P"
      >
        <div className="vgrid">
          <PrintDialogGroupBox />
          <HSplitter boxId="groupboxVbox" boxWindowId="dialog-content-box" />
          <iframe src="about:blank" frameBorder="0" id="content" />
        </div>
      </Dialog>
    );
  };

  window.PrintDialog = PrintDialog;
})();
