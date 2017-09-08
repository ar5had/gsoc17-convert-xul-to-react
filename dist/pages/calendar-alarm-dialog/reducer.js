(function() {
  const {
    SNOOZE_ALARM,
    DISMISS_ALARM,
    SNOOZE_ALL_ALARM,
    DISMISS_ALL_ALARM
  } = window.__action_constants__;

  window.__redux_reducer__ = (state = {}, action) => {
    switch (action.type) {
      case LOAD_INITIAL_STATE: {
        return Object.assign({}, state, action.payload);
      }

      case CHANGE_TITLE: {
        const printSettings = Object.assign({}, state.printSettings, {
          title: action.payload
        });
        return Object.assign({}, state, { printSettings });
      }

      case CHANGE_LAYOUT: {
        const printSettings = Object.assign({}, state.printSettings, {
          selectedLayoutIndex: action.payload
        });
        return Object.assign({}, state, { printSettings });
      }

      case CHANGE_VIEW: {
        const whatToPrint = Object.assign({}, state.whatToPrint, {
          view: action.payload
        });
        return Object.assign({}, state, { whatToPrint });
      }

      case CHANGE_FROM_DATE: {
        const whatToPrint = Object.assign({}, state.whatToPrint, {
          fromDate: action.payload
        });
        return Object.assign({}, state, { whatToPrint });
      }

      case CHANGE_TO_DATE: {
        const whatToPrint = Object.assign({}, state.whatToPrint, {
          toDate: action.payload
        });
        return Object.assign({}, state, { whatToPrint });
      }

      case TOGGLE_EVENTS_SHOW: {
        const whatToPrint = Object.assign({}, state.whatToPrint, {
          printEvents: !state.whatToPrint.printEvents
        });
        return Object.assign({}, state, { whatToPrint });
      }

      case TOGGLE_TASKS_SHOW: {
        const whatToPrint = Object.assign({}, state.whatToPrint, {
          printTasks: !state.whatToPrint.printTasks
        });
        return Object.assign({}, state, { whatToPrint });
      }

      case TOGGLE_COMPLETED_TASKS: {
        const options = Object.assign({}, state.options, {
          showCompletedTasks: !state.options.showCompletedTasks
        });
        return Object.assign({}, state, { options });
      }

      case TOGGLE_TASKS_WITH_NO_DUE_DATE: {
        const options = Object.assign({}, state.options, {
          showTasksWithNoDueDate: !state.options.showTasksWithNoDueDate
        });
        return Object.assign({}, state, { options });
      }

      default:
        return state;
    }
  };
})();
