class PrintDialogGroupBox extends React.Component {
  render() {
    return (
      <div id="groupboxVbox">
        <Fieldset title="Print Settings" id="settingsGroup">
          <div className="fieldset-content-wrapper">
            <div className="row">
              <label htmlFor="title-field" className="row-label">Title:</label>
              <input className="row-input" type="text" id="title-field" />
            </div>
            <div className="row">
              <label htmlFor="layout-field" className="row-label">
                Layout:
              </label>
              <select className="row-input" id="layout-field">
                <option value="list">List</option>
                <option value="monthly-grid">Monthly Grid</option>
                <option value="weekly-planner">Weekly Planner</option>
              </select>
            </div>
          </div>
        </Fieldset>
        <Fieldset title="What to Print" id="what-to-print-group">
          <div className="fieldset-content-wrapper">
            <div className="row row-align-content">
              <input
                className="row-input checkbox"
                type="checkbox"
                id="events"
              />
              <label htmlFor="events" className="row-label mar-right-15">
                Events
              </label>
              <input
                className="row-input checkbox"
                type="checkbox"
                id="tasks"
              />
              <label htmlFor="tasks" className="row-label">
                Tasks
              </label>
            </div>
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                name="to-print"
                type="radio"
                id="printCurrentView"
              />
              <label htmlFor="printCurrentView" className="row-label">
                Current view
              </label>
            </div>
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                type="radio"
                name="to-print"
                id="selected"
              />
              <label htmlFor="selected" className="row-label">
                Selected events/tasks
              </label>
            </div>
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                type="radio"
                name="to-print"
                id="custom-range"
              />
              <label htmlFor="custom-range" className="row-label">
                Custom date range
              </label>
            </div>
            <div className="row">
              <label htmlFor="start-date-picker" className="row-label">From:</label>
              <input type="date" id="start-date-picker" className="row-input" />
            </div>
            <div className="row">
              <label htmlFor="end-date-picker" className="row-label">To:</label>
              <input type="date" id="end-date-picker" className="row-input" />
            </div>
          </div>
        </Fieldset>
        <Fieldset title="Options" id="optionsGroup">
          <div className="fieldset-content-wrapper">
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                type="checkbox"
                id="task-with-no-due-date"
              />
              <label htmlFor="task-with-no-due-date" className="row-label">
                Task with no due date
              </label>
            </div>
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                type="checkbox"
                id="completed-tasks"
              />
              <label htmlFor="completed-tasks" className="row-label">
                Completed tasks
              </label>
            </div>
          </div>
        </Fieldset>
      </div>
    );
  }
}

window.PrintDialogGroupBox = PrintDialogGroupBox;
