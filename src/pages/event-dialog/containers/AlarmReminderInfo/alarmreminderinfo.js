(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const AlarmReminderInfo = ({ state, actions }) => {
    const {} = state;
    const {} = actions;

    return (
      <div id="alarm-reminder-info-wrapper">
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
