(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const AlarmReminderInfo = ({ state, actions }) => {
    const { repeatOption, reminderOption } = state;
    const { changeReminderSetting, changeRepeatSetting } = actions;

    return React.createElement(
      "div",
      { id: "alarm-reminder-info-wrapper" },
      React.createElement(
        "div",
        { className: "row event-grid-recurrence-row" },
        React.createElement("label", {
          htmlFor: "item-repeat",
          className: "row-label",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("Repeat:", "R") }
        }),
        React.createElement(
          "select",
          {
            name: "item-repeat",
            id: "item-repeat",
            className: "row-input no-flex",
            accessKey: "R",
            onChange: changeRepeatSetting,
            value: repeatOption
          },
          React.createElement("option", { value: "NOT_REPEAT" }, "Does not repeat"),
          React.createElement("option", { value: "DAILY" }, "Daily"),
          React.createElement("option", { value: "WEEKLY" }, "Weekly"),
          React.createElement("option", { value: "EVERY_WEEKDAY" }, "Every Weekday"),
          React.createElement("option", { value: "BIWEEKLY" }, "Bi-weekly"),
          React.createElement("option", { value: "MONTHLY" }, "Monthly"),
          React.createElement("option", { value: "YEARLY" }, "Yearly"),
          React.createElement("option", { value: "CUSTOM" }, "Custom")
        )
      ),
      React.createElement("div", { className: "separator groove" }),
      React.createElement(
        "div",
        { className: "row event-grid-alarm-row" },
        React.createElement("label", {
          htmlFor: "item-alarm",
          className: "row-label",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("Reminder:", "m") }
        }),
        React.createElement(
          "select",
          {
            name: "item-alarm",
            id: "item-alarm",
            className: "row-input no-flex",
            accessKey: "m",
            onChange: changeReminderSetting,
            value: reminderOption
          },
          React.createElement("option", { value: "NO_REMINDER" }, "No reminder"),
          React.createElement("option", { value: "0_MINUTES" }, "0 minutes before"),
          React.createElement("option", { value: "5_MINUTES" }, "5 minutes before"),
          React.createElement("option", { value: "15_MINUTES" }, "15 minutes before"),
          React.createElement("option", { value: "30_MINUTES" }, "30 minutes before"),
          React.createElement("option", { value: "1_HOUR" }, "1 hour before"),
          React.createElement("option", { value: "2_HOURS" }, "2 hours before"),
          React.createElement("option", { value: "12_HOURS" }, "12 hours before"),
          React.createElement("option", { value: "1_DAY" }, "1 day before"),
          React.createElement("option", { value: "2_DAYS" }, "2 days before"),
          React.createElement("option", { value: "1_WEEK" }, "1 week before"),
          React.createElement("option", { value: "CUSTOM" }, "Custom")
        )
      ),
      React.createElement("div", { className: "separator groove" })
    );
  };

  AlarmReminderInfo.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ alarmReminderInfo }) => ({ state: alarmReminderInfo });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__alarm_reminder_info_actions__, dispatch)
  });

  window.AlarmReminderInfo = connect(mapStateToProps, mapDispatchToProps)(AlarmReminderInfo);
})();
