const TabPanel = ({
  data,
  calendarColorChange,
  calendarEmailChange,
  calendarNameChange,
  calendarToggleChange,
  calendarUriChange,
  readOnlyChange,
  suppressAlarmsChange
}) => {
  const getSelectOptions = arr => {
    arr = arr ? arr : ["NONE"];
    const options = arr.map((e, i) =>
      <option value={i} key={i}>
        {e}
      </option>
    );
    return options;
  };

  const { disabled, name, color, uri, readOnly, supressAlarms, emails, selectedEmailIndex } = data;

  const emailOptions = getSelectOptions(emails);

  return (
    <div className="tabContentWrapper">
      <div id="calendar-enabler-container" className="row">
        <input
          type="checkbox"
          className="checkbox"
          id="calendar-enabled-checkbox"
          value="disabled"
          checked={!disabled}
          onChange={calendarToggleChange}
        />
        <label htmlFor="calendar-enabled-checkbox">
          Switch this calendar on
        </label>
      </div>
      <div id="calendar-properties-grid" className={disabled ? "grid disabled" : "grid"}>
        <div id="calendar-name-row" className="row">
          <label htmlFor="calendar-name" className="row-label">
            Calendar Name:
          </label>
          <input
            type="text"
            id="calendar-name"
            className="row-input"
            value={name}
            onChange={calendarNameChange}
            disabled={disabled}
          />
        </div>
        <div id="calendar-color-row" className="row">
          <label htmlFor="calendar-color" className="row-label">
            Color:
          </label>
          <input
            type="color"
            id="calendar-color"
            className="row-input"
            value={color}
            onChange={calendarColorChange}
            disabled={disabled}
          />
        </div>
        <div id="calendar-uri-row" className="row">
          <label htmlFor="calendar-uri" className="row-label">
            Location:
          </label>
          <input
            type="text"
            id="calendar-uri"
            className="row-input"
            value={uri}
            onChange={calendarUriChange}
            disabled={disabled}
          />
        </div>
        <div id="calendar-email-identity-row" className="row">
          <label htmlFor="email-identity-menulist" className="row-label">
            E-Mail:
          </label>
          <select
            type="text"
            id="email-identity-menulist"
            className="row-input hidden"
            disabled={disabled}
            onChange={calendarEmailChange}
            value={selectedEmailIndex}
          >
            {emailOptions}
          </select>
        </div>
        <div id="calendar-readOnly-row" className="row">
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="readOnly"
              checked={readOnly}
              onChange={readOnlyChange}
              disabled={disabled}
            />
            <label htmlFor="readOnly">
              Read Only
            </label>
          </div>
        </div>
        <div id="calendar-suppressAlarms-row" className="row">
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="fire-alarms"
              checked={supressAlarms}
              onChange={suppressAlarmsChange}
              disabled={disabled}
            />
            <label htmlFor="fire-alarms">
              Show Reminders
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

TabPanel.propTypes = {
  data: PropTypes.object,
  calendarColorChange: PropTypes.func,
  calendarEmailChange: PropTypes.func,
  calendarNameChange: PropTypes.func,
  calendarToggleChange: PropTypes.func,
  calendarUriChange: PropTypes.func,
  readOnlyChange: PropTypes.func,
  suppressAlarmsChange: PropTypes.func
};

window.TabPanel = TabPanel;
