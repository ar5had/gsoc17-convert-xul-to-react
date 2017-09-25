(function() {
  const {
    SNOOZE_ALARM,
    DISMISS_ALARM,
    SNOOZE_ALL_ALARM,
    DISMISS_ALL_ALARM,
    UPDATE_ITEMS
  } = window.__action_constants__;

  window.__redux_reducer__ = (state = {}, action) => {
    switch (action.type) {
      case SNOOZE_ALARM: {
        return state;
      }

      case DISMISS_ALARM: {
        return state;
      }

      case SNOOZE_ALL_ALARM: {
        return state;
      }

      case DISMISS_ALL_ALARM: {
        return state;
      }

      case UPDATE_ITEMS: {
        // action.payload is new item state
        return { items: action.payload.items };
      }

      default:
        return state;
    }
  };
})();
