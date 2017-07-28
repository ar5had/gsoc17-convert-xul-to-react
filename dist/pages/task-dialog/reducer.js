(function () {
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
    CHANGE_DESCRIPTION,
    CHANGE_TODO_STATUS,
    CHANGE_COMPLETION_DATE,
    CHANGE_COMPLETION_STATUS
  } = window.__action_constants__;

  window.__redux_reducer__ = (state = {}, action) => {
    switch (action.type) {
      case LOAD_INITIAL_STATE:
        {
          return Object.assign({}, state, action.payload);
        }

      case CHANGE_TITLE:
        {
          const basicInfo = Object.assign({}, state.basicInfo, {
            title: action.payload
          });
          return Object.assign({}, state, { basicInfo });
        }

      case CHANGE_LOCATION:
        {
          const basicInfo = Object.assign({}, state.basicInfo, {
            location: action.payload
          });
          return Object.assign({}, state, { basicInfo });
        }

      case CHANGE_ITEM_CALENDAR:
        {
          const basicInfo = Object.assign({}, state.basicInfo, {
            itemCalendar: action.payload
          });
          return Object.assign({}, state, { basicInfo });
        }

      case CHANGE_ITEM_CATEGORY:
        {
          const basicInfo = Object.assign({}, state.basicInfo, {
            itemCategory: action.payload
          });
          return Object.assign({}, state, { basicInfo });
        }

      case TOGGLE_START_TIME:
        {
          const timeInfo = Object.assign({}, state.timeInfo, {
            isStartTimeActive: action.payload
          });
          return Object.assign({}, state, { timeInfo });
        }

      case TOGGLE_DUE_TIME:
        {
          const timeInfo = Object.assign({}, state.timeInfo, {
            isDueTimeActive: action.payload
          });
          return Object.assign({}, state, { timeInfo });
        }

      case CHANGE_START_TIME:
        {
          const timeInfo = Object.assign({}, state.timeInfo, {
            startTime: action.payload
          });
          return Object.assign({}, state, { timeInfo });
        }

      case CHANGE_DUE_TIME:
        {
          const timeInfo = Object.assign({}, state.timeInfo, {
            dueTime: action.payload
          });
          return Object.assign({}, state, { timeInfo });
        }

      case CHANGE_REPEAT_SETTING:
        {
          const alarmReminderInfo = Object.assign({}, state.alarmReminderInfo, {
            repeatOption: action.payload
          });
          return Object.assign({}, state, { alarmReminderInfo });
        }

      case CHANGE_REMINDER_SETTING:
        {
          const alarmReminderInfo = Object.assign({}, state.alarmReminderInfo, {
            reminderOption: action.payload
          });
          return Object.assign({}, state, { alarmReminderInfo });
        }

      case CHANGE_DESCRIPTION:
        {
          const otherInfo = Object.assign({}, state.otherInfo, {
            description: action.payload
          });
          return Object.assign({}, state, { otherInfo });
        }

      case CHANGE_COMPLETION_DATE:
        {
          const timeInfo = Object.assign({}, state.timeInfo, {
            completionDate: action.payload
          });
          return Object.assign({}, state, { timeInfo });
        }

      case CHANGE_TODO_STATUS:
        {
          let otherChanges = {};

          if (action.payload === "NOT_SPECIFIED") {
            otherChanges.completionStatus = 0;
          } else if (action.payload === "COMPLETED") {
            otherChanges.completionStatus = 100;
          }

          const timeInfo = Object.assign({}, state.timeInfo, {
            todoStatus: action.payload
          }, otherChanges);
          return Object.assign({}, state, { timeInfo });
        }

      case CHANGE_COMPLETION_STATUS:
        {
          let completionStatus;

          if (action.payload === null) {
            completionStatus = 0;
          } else {
            completionStatus = action.payload;
          }
          console.log(completionStatus);

          const otherChanges = {};
          const oldTodoStatus = state.timeInfo.todoStatus;
          if (isNaN(completionStatus)) {
            return state;
          } else if (completionStatus >= 100) {
            completionStatus = 100;
            otherChanges.todoStatus = "COMPLETED";
          } else if (completionStatus <= 0 && oldTodoStatus !== "NEED_ACTION") {
            completionStatus = 0;
            otherChanges.todoStatus = "IN_PROCESS";
          } else if (oldTodoStatus !== "NEED_ACTION") {
            otherChanges.todoStatus = "IN_PROCESS";
          }

          const timeInfo = Object.assign({}, state.timeInfo, {
            completionStatus
          }, otherChanges);

          return Object.assign({}, state, { timeInfo });
        }

      default:
        return state;
    }
  };
})();