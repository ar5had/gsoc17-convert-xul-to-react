(function() {
  const {
    SNOOZE_ALARM,
    DISMISS_ALARM,
    SNOOZE_ALL_ALARM,
    DISMISS_ALL_ALARM
  } = window.__action_constants__;

  const snoozeAlarm = time => ({
    type: SNOOZE_ALARM,
    payload: time
  });

  const snoozeAllAlarm = time => ({
    type: SNOOZE_ALL_ALARM,
    payload: time
  });

  const dismissAlarm = () => ({
    type: DISMISS_ALARM
  });

  const dismissAllAlarm = () => ({
    type: DISMISS_ALL_ALARM
  });

  window.__single_alarm_actions__ = {
    snoozeAlarm,
    dismissAlarm
  };

  window.__all_alarms_actions__ = {
    snoozeAllAlarm,
    dismissAllAlarm
  };
})();
