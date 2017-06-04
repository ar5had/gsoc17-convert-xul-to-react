class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper dialog-content-box">
        <div className="calendar-enabler-container row">
          <input type="checkbox" id="calendar-enabled-checkbox"/>
          <label htmlFor="calendar-enabled-checkbox">
            Switch this calendar on
          </label>
        </div>
        <div id="calendar-properties-grid">
          <div className="calendar-name-row row">

          </div>
          <div id="calendar-color-row row"></div>
          <div id="calendar-uri-row row"></div>
          <div id="calendar-email-identity-row row"></div>
          <div id="calendar-readOnly-row row"></div>
          <div id="calendar-suppressAlarms-row row"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);
