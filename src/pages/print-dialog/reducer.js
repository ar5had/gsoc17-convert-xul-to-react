// using var instead of const so that
// there is no redeclaration error in actions.js

var {
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
    case CHANGE_TITLE:
      return Object.assign({}, state, { title: action.payload });
    case CHANGE_LAYOUT:
    case CHANGE_VIEW:
    case CHANGE_TO_DATE:
    case CHANGE_FROM_DATE:
    case TOGGLE_COMPLETED_TASKS:
    case TOGGLE_TASKS_WITH_NO_DUE_DATE:
    case TOGGLE_EVENTS_SHOW:
    case TOGGLE_TASKS_SHOW:
    default:
      return state;
  }
};

window.redux_reducer = reducer;
