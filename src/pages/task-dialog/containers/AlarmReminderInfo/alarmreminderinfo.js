(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const AlarmReminderInfo = ({ state, actions }) => {
    const { repeatOption, reminderOption } = state;
    const { changeReminderSetting, changeRepeatSetting } = actions;

    return (
      <div id="alarm-reminder-info-wrapper">
        <div className="row event-grid-recurrence-row">
          <label
            htmlFor="item-repeat"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Repeat:", "R") }}
          />
          <select
            name="item-repeat"
            id="item-repeat"
            className="row-input no-flex"
            accessKey="R"
            onChange={changeRepeatSetting}
            value={repeatOption}
          >
            <option value="NOT_REPEAT">Does not repeat</option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="EVERY_WEEKDAY">Every Weekday</option>
            <option value="BIWEEKLY">Bi-weekly</option>
            <option value="MONTHLY">Monthly</option>
            <option value="YEARLY">Yearly</option>
            <option value="CUSTOM">Custom</option>
          </select>
        </div>
        <div className="separator groove" />
        <div className="row event-grid-alarm-row">
          <label
            htmlFor="item-alarm"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Reminder:", "m") }}
          />
          <select
            name="item-alarm"
            id="item-alarm"
            className="row-input no-flex"
            accessKey="m"
            onChange={changeReminderSetting}
            value={reminderOption}
          >
            <option value="NO_REMINDER">No reminder</option>
            <option value="0_MINUTES">0 minutes before</option>
            <option value="5_MINUTES">5 minutes before</option>
            <option value="15_MINUTES">15 minutes before</option>
            <option value="30_MINUTES">30 minutes before</option>
            <option value="1_HOUR">1 hour before</option>
            <option value="2_HOURS">2 hours before</option>
            <option value="12_HOURS">12 hours before</option>
            <option value="1_DAY">1 day before</option>
            <option value="2_DAYS">2 days before</option>
            <option value="1_WEEK">1 week before</option>
            <option value="CUSTOM">Custom</option>
          </select>
        </div>
        <div className="separator groove" />
      </div>
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
