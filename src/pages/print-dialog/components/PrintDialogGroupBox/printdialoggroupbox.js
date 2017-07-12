(function() {
  const PrintDialogGroupBox = () =>
    <div id="groupboxVbox">
      <PrintSettings />
      <WhatToPrint />
      <Options />
    </div>;

  window.PrintDialogGroupBox = PrintDialogGroupBox;
})();
