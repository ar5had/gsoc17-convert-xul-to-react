(function() {
  const { LOAD_INITIAL_STATE, CHANGE_TITLE, CHANGE_LOCATION } = window.__action_constants__;

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

  window.__basic_info_actions__ = {
    changeTitle
  };

  window.__dialog_actions__ = {
    acceptDialog,
    cancelDialog
  };

  window.__global_actions__ = {
    loadInitialState
  };
})();
