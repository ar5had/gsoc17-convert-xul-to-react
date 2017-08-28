(function() {
  const {
    LOAD_INITIAL_STATE,
    CHANGE_TITLE,
    CHANGE_LOCATION,
    CHANGE_ITEM_CATEGORY,
    CHANGE_ITEM_CALENDAR,
    TOGGLE_ALL_DAY_EVENT,
    CHANGE_START_TIME,
    CHANGE_END_TIME,
    CHANGE_REPEAT_SETTING,
    CHANGE_REMINDER_SETTING,
    CHANGE_DESCRIPTION,
    TOGGLE_NOTIFY_ATTENDEES,
    TOGGLE_SEPARATE_INVITATION,
    TOGGLE_DISALLOW_COUNTER
  } = window.__action_constants__;

  const loadInitialState = data => ({
    type: LOAD_INITIAL_STATE,
    payload: data
  });

  const acceptDialog = () => {
    window.acceptDialog();
  };

  const cancelDialog = () => {
    window.cancelDialog();
  };

  const changeTitle = ({ currentTarget }) => ({
    type: CHANGE_TITLE,
    payload: currentTarget.value
  });

  const changeLocation = ({ currentTarget }) => ({
    type: CHANGE_LOCATION,
    payload: currentTarget.value
  });

  const changeItemCategory = ({ currentTarget }) => ({
    type: CHANGE_ITEM_CATEGORY,
    payload: currentTarget.value
  });

  const changeItemCalendar = ({ currentTarget }) => ({
    type: CHANGE_ITEM_CALENDAR,
    payload: currentTarget.value
  });

  const toggleAllDayEvent = ({ currentTarget }) => ({
    type: TOGGLE_ALL_DAY_EVENT,
    payload: currentTarget.checked
  });

  const changeStartTime = ({ currentTarget }) => ({
    type: CHANGE_START_TIME,
    payload: currentTarget.value
  });

  const changeEndTime = ({ currentTarget }) => ({
    type: CHANGE_END_TIME,
    payload: currentTarget.value
  });

  const changeRepeatSetting = ({ currentTarget }) => ({
    type: CHANGE_REPEAT_SETTING,
    payload: currentTarget.value
  });

  const changeReminderSetting = ({ currentTarget }) => ({
    type: CHANGE_REMINDER_SETTING,
    payload: currentTarget.value
  });

  const changeDescription = ({ currentTarget }) => ({
    type: CHANGE_DESCRIPTION,
    payload: currentTarget.value
  });

  const toggleNotifyAttendees = ({ currentTarget }) => ({
    type: TOGGLE_NOTIFY_ATTENDEES,
    payload: currentTarget.checked
  });

  const toggleSeparateInvitation = ({ currentTarget }) => ({
    type: TOGGLE_SEPARATE_INVITATION,
    payload: currentTarget.checked
  });

  const toggleDisallowCounter = ({ currentTarget }) => ({
    type: TOGGLE_DISALLOW_COUNTER,
    payload: currentTarget.checked
  });

  window.__basic_info_actions__ = {
    changeTitle,
    changeLocation,
    changeItemCalendar,
    changeItemCategory
  };

  window.__time_info_actions__ = {
    toggleAllDayEvent,
    changeEndTime,
    changeStartTime
  };

  window.__alarm_reminder_info_actions__ = {
    changeReminderSetting,
    changeRepeatSetting
  };

  window.__other_info_actions__ = {
    changeDescription,
    toggleNotifyAttendees,
    toggleSeparateInvitation,
    toggleDisallowCounter
  };

  window.__dialog_actions__ = {
    acceptDialog,
    cancelDialog
  };

  window.__global_actions__ = {
    loadInitialState
  };
})();
