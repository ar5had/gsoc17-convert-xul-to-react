(function() {
  const PrintDialogGroupBox = () =>
    React.createElement(
      "div",
      { id: "groupboxVbox" },
      React.createElement(PrintSettings, null),
      React.createElement(WhatToPrint, null),
      React.createElement(Options, null)
    );

  window.PrintDialogGroupBox = PrintDialogGroupBox;
})();
