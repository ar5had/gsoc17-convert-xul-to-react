(function() {
  const {
    CHANGE_TITLE,
    CHANGE_TO_DATE,
    CHANGE_FROM_DATE,
    CHANGE_VIEW,
    CHANGE_LAYOUT,
    TOGGLE_COMPLETED_TASKS,
    TOGGLE_EVENTS_SHOW,
    TOGGLE_TASKS_SHOW,
    TOGGLE_TASKS_WITH_NO_DUE_DATE
  } = window.action_constants;

  const reducer = (state = {}, action) => {
    switch (action.type) {
      case CHANGE_TITLE: {
        const printSettings = Object.assign({}, state.printSettings, {
          title: action.payload
        });
        return Object.assign({}, state, { printSettings });
      }

      case CHANGE_LAYOUT: {
        const printSettings = Object.assign({}, state.printSettings, {
          layout: action.payload
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

  window.redux_reducer = reducer;
})();
