class PrintDialogGroupBox extends React.Component {
  render() {
    return (
      <div id="groupboxVbox">
        <Fieldset title="Settings" id="settingsGroup">
          <div className="fieldset-content-wrapper">
            <div className="row">
              <label htmlFor="title-field" className="row-label">Title:</label>
              <input className="row-input" type="text" id="title-field" />
            </div>
            <div className="row">
              <label htmlFor="layout-field" className="row-label">Layout:</label>
              <select className="row-input" id="layout-field">
                <option value="list">List</option>
                <option value="monthly-grid">Monthly Grid</option>
                <option value="weekly-planner">Weekly Planner</option>
              </select>
            </div>
          </div>
        </Fieldset>
        <Fieldset title="What to Print" id="what-to-print-group" />
        <Fieldset title="Options" id="optionsGroup" />
      </div>
    );
  }
}

window.PrintDialogGroupBox = PrintDialogGroupBox;
