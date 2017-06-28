class PrintDialogGroupBox extends React.Component {
  render() {
    return (
      <div id="groupboxVbox">
        <FieldSet title="Settings" id="settingsGroup" />
        <FieldSet title="What to Print" id="what-to-print-group" />
        <FieldSet title="Options" id="optionsGroup" />
      </div>
    );
  }
}

window.PrintDialogGroupBox = PrintDialogGroupBox;
