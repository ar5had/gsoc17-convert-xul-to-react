(function() {
  const {
    LOAD_INITIAL_STATE,
    CHANGE_TITLE,
    CHANGE_LOCATION,
    CHANGE_ITEM_CATEGORY,
    CHANGE_ITEM_CALENDAR
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

  window.__basic_info_actions__ = {
    changeTitle,
    changeLocation,
    changeItemCalendar,
    changeItemCategory
  };

  window.__time_info_actions__ = {};

  window.__alarm_reminder_info_actions__ = {};

  window.__other_info_actions__ = {};

  window.__dialog_actions__ = {
    acceptDialog,
    cancelDialog
  };

  window.__global_actions__ = {
    loadInitialState
  };
})();
