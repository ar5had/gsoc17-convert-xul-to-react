// using var instead of const so that
// there is no redeclaration error in any other file

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

window.redux_actions = {};

const changeTitle = event => ({
  type: CHANGE_TITLE,
  payload: event.currentTarget.value
});

const changeView = text => ({
  type: CHANGE_VIEW,
  payload: text
});

const changeLayout = text => ({
  type: CHANGE_LAYOUT,
  payload: text
});

const changeFromDate = fromDate => ({
  type: CHANGE_FROM_DATE,
  payload: fromDate
});

const changeToDate = toDate => ({
  type: CHANGE_TO_DATE,
  payload: toDate
});

const toggleEventsShow = flag => ({
  type: TOGGLE_EVENTS_SHOW,
  payload: flag
});

const toggleTasksShow = flag => ({
  type: TOGGLE_TASKS_SHOW,
  payload: flag
});

const toggleTasksWithNoDueDate = flag => ({
  type: TOGGLE_TASKS_WITH_NO_DUE_DATE,
  payload: flag
});

const toggleCompletedTasks = flag => ({
  type: TOGGLE_COMPLETED_TASKS,
  payload: flag
});

window.redux_actions = {
  changeTitle,
  changeView,
  changeLayout,
  changeFromDate,
  changeToDate,
  toggleCompletedTasks,
  toggleEventsShow,
  toggleTasksShow,
  toggleTasksWithNoDueDate
};
