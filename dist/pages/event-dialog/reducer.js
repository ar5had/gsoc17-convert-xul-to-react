(function() {
  const {
    CHANGE_TITLE,
    CHANGE_LOCATION,
    CHANGE_ITEM_CATEGORY,
    CHANGE_ITEM_CALENDAR,
    TOGGLE_ALL_DAY_EVENT,
    LOAD_INITIAL_STATE,
    CHANGE_END_TIME,
    CHANGE_START_TIME,
    CHANGE_REPEAT_SETTING,
    CHANGE_REMINDER_SETTING
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

      case TOGGLE_ALL_DAY_EVENT: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          allDayEvent: action.payload
        });
        return Object.assign({}, state, { timeInfo });
      }

      case CHANGE_START_TIME: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          startTime: action.payload
        });
        return Object.assign({}, state, { timeInfo });
      }

      case CHANGE_END_TIME: {
        const timeInfo = Object.assign({}, state.timeInfo, {
          endTime: action.payload
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

      default:
        return state;
    }
  };
})();
