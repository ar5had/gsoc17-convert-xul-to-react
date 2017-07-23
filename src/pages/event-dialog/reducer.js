(function() {
  const {
    CHANGE_TITLE,
    CHANGE_LOCATION,
    CHANGE_ITEM_CATEGORY,
    CHANGE_ITEM_CALENDAR,
    LOAD_INITIAL_STATE
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

      default:
        return state;
    }
  };
})();
