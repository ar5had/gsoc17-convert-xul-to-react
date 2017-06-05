class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper dialog-content-box">
        <div className="calendar-enabler-container" 
          className="row">
          <input type="checkbox" className="checkbox"
            id="calendar-enabled-checkbox"
          />
          <label htmlFor="calendar-enabled-checkbox">
            Switch this calendar on
          </label>
        </div>
        <div id="calendar-properties-grid">
          <div id="calendar-name-row" 
            className="row">
            <label htmlFor="calendar-name" className="row-label">
              Calendar Name:
            </label>
            <input type="text" id="calendar-name" className="row-input"/>
          </div>
          <div id="calendar-color-row" 
            className="row">
            <label htmlFor="calendar-color" className="row-label">
              Color:
            </label>
            <input type="color" id="calendar-color"  className="row-input"/>
          </div>
          <div id="calendar-uri-row" 
            className="row">
            <label htmlFor="calendar-uri" className="row-label">
              Location:
            </label>
            <input type="text" id="calendar-uri"  className="row-input"/>
          </div>
          <div id="calendar-email-identity-row" className="row">
            <label htmlFor="email-identity-menulist" className="row-label">
              E-Mail:
            </label>
            <select type="text" id="email-identity-menulist" className="row-input">
              <option value="none">None</option>
            </select>
          </div>
          <div id="calendar-readOnly-row" className="row">
            <div>
              <input type="checkbox"  className="checkbox" id="readOnly"/>
              <label htmlFor="readOnly">
                Read Only
              </label>
            </div>
          </div>
          <div id="calendar-suppressAlarms-row" className="row">
            <div>
              <input type="checkbox"  className="checkbox" id="fire-alarms"/>
              <label htmlFor="fire-alarms">
                Show Reminders
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);
