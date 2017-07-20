(function() {
  const { LOAD_INITIAL_STATE } = window.__action_constants__;

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

  window.__title_row_actions__ = {};

  window.__dialog_actions__ = {
    acceptDialog,
    cancelDialog
  };

  window.__global_actions__ = {
    loadInitialState
  };
})();
