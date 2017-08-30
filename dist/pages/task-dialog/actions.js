/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const {
    LOAD_INITIAL_STATE,
    CHANGE_TITLE,
    CHANGE_LOCATION,
    CHANGE_ITEM_CATEGORY,
    CHANGE_ITEM_CALENDAR,
    TOGGLE_DUE_TIME,
    TOGGLE_START_TIME,
    CHANGE_START_TIME,
    CHANGE_DUE_TIME,
    CHANGE_TODO_STATUS,
    CHANGE_COMPLETION_DATE,
    CHANGE_COMPLETION_STATUS,
    CHANGE_REPEAT_SETTING,
    CHANGE_REMINDER_SETTING,
    CHANGE_DESCRIPTION
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

  const toggleStartTime = ({ currentTarget }) => ({
    type: TOGGLE_START_TIME,
    payload: currentTarget.checked
  });

  const toggleDueTime = ({ currentTarget }) => ({
    type: TOGGLE_DUE_TIME,
    payload: currentTarget.checked
  });

  const changeStartTime = ({ currentTarget }) => ({
    type: CHANGE_START_TIME,
    payload: currentTarget.value
  });

  const changeDueTime = ({ currentTarget }) => ({
    type: CHANGE_DUE_TIME,
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

  const changeTodoStatus = ({ currentTarget }) => ({
    type: CHANGE_TODO_STATUS,
    payload: currentTarget.value
  });

  const changeCompletionDate = ({ currentTarget }) => ({
    type: CHANGE_COMPLETION_DATE,
    payload: currentTarget.value
  });

  const changeCompletionStatus = payload => ({
    type: CHANGE_COMPLETION_STATUS,
    payload
  });

  window.__basic_info_actions__ = {
    changeTitle,
    changeLocation,
    changeItemCalendar,
    changeItemCategory
  };

  window.__time_info_actions__ = {
    toggleStartTime,
    toggleDueTime,
    changeDueTime,
    changeStartTime,
    changeCompletionDate,
    changeCompletionStatus,
    changeTodoStatus
  };

  window.__alarm_reminder_info_actions__ = {
    changeReminderSetting,
    changeRepeatSetting
  };

  window.__other_info_actions__ = {
    changeDescription
  };

  window.__dialog_actions__ = {
    acceptDialog,
    cancelDialog
  };

  window.__global_actions__ = {
    loadInitialState
  };
})();
