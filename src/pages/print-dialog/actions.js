// Using IIFE to use private scope
(function() {
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

  const changeTitle = ({ currentTarget }) => ({
    type: CHANGE_TITLE,
    payload: currentTarget.value
  });

  const changeLayout = ({ currentTarget }) => ({
    type: CHANGE_LAYOUT,
    payload: currentTarget.value
  });

  const changeView = ({ currentTarget }) => ({
    type: CHANGE_VIEW,
    payload: currentTarget.value
  });

  const changeFromDate = ({ currentTarget }) => ({
    type: CHANGE_FROM_DATE,
    payload: currentTarget.value
  });

  const changeToDate = ({ currentTarget }) => ({
    type: CHANGE_TO_DATE,
    payload: currentTarget.value
  });

  const toggleEventsShow = () => ({
    type: TOGGLE_EVENTS_SHOW
  });

  const toggleTasksShow = () => ({
    type: TOGGLE_TASKS_SHOW
  });

  const toggleTasksWithNoDueDate = () => ({
    type: TOGGLE_TASKS_WITH_NO_DUE_DATE
  });

  const toggleCompletedTasks = () => ({
    type: TOGGLE_COMPLETED_TASKS
  });

  window.redux_actions = {
    changeTitle,
    changeLayout,
    toggleEventsShow,
    toggleTasksShow,
    changeView,
    changeFromDate,
    changeToDate,
    toggleCompletedTasks,
    toggleTasksWithNoDueDate
  };
})();
