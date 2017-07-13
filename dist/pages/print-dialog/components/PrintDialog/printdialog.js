(function() {
  const PrintDialog = () => {
    return React.createElement(
      Dialog,
      {
        ondialogaccept: window.acceptDialog,
        ondialogcancel: window.cancelDialog,
        buttonlabelaccept: "Print",
        buttonaccesskeyaccept: "P"
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

  window.PrintDialog = PrintDialog;
})();
