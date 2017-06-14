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
    const options = arr.map((e, i) => React.createElement("option", { value: i, key: i }, e));
    return options;
  };

  const { disabled, name, color, uri, readOnly, supressAlarms, emails, selectedEmailIndex } = data;

  const emailOptions = getSelectOptions(emails);

  return React.createElement(
    "div",
    { className: "tabContentWrapper" },
    React.createElement(
      "div",
      { id: "calendar-enabler-container", className: "row" },
      React.createElement("input", {
        type: "checkbox",
        className: "checkbox",
        id: "calendar-enabled-checkbox",
        value: "disabled",
        checked: !disabled,
        onChange: calendarToggleChange
      }),
      React.createElement(
        "label",
        { htmlFor: "calendar-enabled-checkbox" },
        "Switch this calendar on"
      )
    ),
    React.createElement(
      "div",
      { id: "calendar-properties-grid", className: disabled ? "grid disabled" : "grid" },
      React.createElement(
        "div",
        { id: "calendar-name-row", className: "row" },
        React.createElement(
          "label",
          { htmlFor: "calendar-name", className: "row-label" },
          "Calendar Name:"
        ),
        React.createElement("input", {
          type: "text",
          id: "calendar-name",
          className: "row-input",
          value: name,
          onChange: calendarNameChange,
          disabled: disabled
        })
      ),
      React.createElement(
        "div",
        { id: "calendar-color-row", className: "row" },
        React.createElement(
          "label",
          { htmlFor: "calendar-color", className: "row-label" },
          "Color:"
        ),
        React.createElement("input", {
          type: "color",
          id: "calendar-color",
          className: "row-input",
          value: color,
          onChange: calendarColorChange,
          disabled: disabled
        })
      ),
      React.createElement(
        "div",
        { id: "calendar-uri-row", className: "row" },
        React.createElement(
          "label",
          { htmlFor: "calendar-uri", className: "row-label" },
          "Location:"
        ),
        React.createElement("input", {
          type: "text",
          id: "calendar-uri",
          className: "row-input",
          value: uri,
          onChange: calendarUriChange,
          disabled: disabled
        })
      ),
      React.createElement(
        "div",
        { id: "calendar-email-identity-row", className: "row" },
        React.createElement(
          "label",
          { htmlFor: "email-identity-menulist", className: "row-label" },
          "E-Mail:"
        ),
        React.createElement(
          "select",
          {
            type: "text",
            id: "email-identity-menulist",
            className: "row-input hidden",
            disabled: disabled,
            onChange: calendarEmailChange,
            value: selectedEmailIndex
          },
          emailOptions
        )
      ),
      React.createElement(
        "div",
        { id: "calendar-readOnly-row", className: "row" },
        React.createElement(
          "div",
          null,
          React.createElement("input", {
            type: "checkbox",
            className: "checkbox",
            id: "readOnly",
            checked: readOnly,
            onChange: readOnlyChange,
            disabled: disabled
          }),
          React.createElement("label", { htmlFor: "readOnly" }, "Read Only")
        )
      ),
      React.createElement(
        "div",
        { id: "calendar-suppressAlarms-row", className: "row" },
        React.createElement(
          "div",
          null,
          React.createElement("input", {
            type: "checkbox",
            className: "checkbox",
            id: "fire-alarms",
            checked: supressAlarms,
            onChange: suppressAlarmsChange,
            disabled: disabled
          }),
          React.createElement("label", { htmlFor: "fire-alarms" }, "Show Reminders")
        )
      )
    )
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
