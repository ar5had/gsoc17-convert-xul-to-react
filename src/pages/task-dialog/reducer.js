(function() {
  const {
    CHANGE_TITLE,
    CHANGE_LOCATION,
    CHANGE_ITEM_CATEGORY,
    CHANGE_ITEM_CALENDAR,
    TOGGLE_START_TIME,
    TOGGLE_DUE_TIME,
    LOAD_INITIAL_STATE,
    CHANGE_DUE_TIME,
    CHANGE_START_TIME,
    CHANGE_REPEAT_SETTING,
    CHANGE_REMINDER_SETTING,
    CHANGE_DESCRIPTION
  } = window.__action_constants__;

  window.__redux_reducer__ = (state = {}, action) => {
    switch (action.type) {
      case LOAD_INITIAL_STATE: {
        return Object.assign({}, state, action.payload);
      }

      case CHANGE_TITLE: {
        const basicInfo = Object.assign({}, state.basicInfo, {
          title: action.payload
        });
        return Object.assign({}, state, { basicInfo });
      }

      case CHANGE_LOCATION: {
        const basicInfo = Object.assign({}, state.basicInfo, {
          location: action.payload
        });
        return Object.assign({}, state, { basicInfo });
      }

      case CHANGE_ITEM_CALENDAR: {
        const basicInfo = Object.assign({}, state.basicInfo, {
          itemCalendar: action.payload
        });
        return Object.assign({}, state, { basicInfo });
      }

      case CHANGE_ITEM_CATEGORY: {
        const basicInfo = Object.assign({}, state.basicInfo, {
          itemCategory: action.payload
        });
        return Object.assign({}, state, { basicInfo });
      }

      case TOGGLE_START_TIME: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          isStartTimeActive: action.payload
        });
        return Object.assign({}, state, { timeInfo });
      }

      case TOGGLE_DUE_TIME: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          isDueTimeActive: action.payload
        });
        return Object.assign({}, state, { timeInfo });
      }

      case CHANGE_START_TIME: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          startTime: action.payload
        });
        return Object.assign({}, state, { timeInfo });
      }

      case CHANGE_DUE_TIME: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          dueTime: action.payload
        });
        return Object.assign({}, state, { timeInfo });
      }

      case CHANGE_REPEAT_SETTING: {
        const alarmReminderInfo = Object.assign({}, state.alarmReminderInfo, {
          repeatOption: action.payload
        });
        return Object.assign({}, state, { alarmReminderInfo });
      }

      case CHANGE_REMINDER_SETTING: {
        const alarmReminderInfo = Object.assign({}, state.alarmReminderInfo, {
          reminderOption: action.payload
        });
        return Object.assign({}, state, { alarmReminderInfo });
      }

      case CHANGE_DESCRIPTION: {
        const otherInfo = Object.assign({}, state.otherInfo, {
          description: action.payload
        });
        return Object.assign({}, state, { otherInfo });
      }

      default:
        return state;
    }
  };
})();
