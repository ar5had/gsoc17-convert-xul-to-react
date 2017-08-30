/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  // exposing __configure_redux_store__ to window
  // instead of redux_store to avoid mutation of redux_store
  // using window object
  window.__configure_redux_store__ = () => {
    const { createStore, applyMiddleware, compose } = Redux;

    const initialState = {
      basicInfo: {
        title: "New Event",
        location: "",
        itemCategory: "",
        itemCalendar: "HOME"
      },
      timeInfo: {
        allDayEvent: false,
        startTime: "",
        endTime: ""
      },
      alarmReminderInfo: {
        repeatSetting: "NOT_REPEAT",
        reminderSetting: "NO_REMINDER"
      },
      otherInfo: {
        description: "",
        attachment: [],
        attendees: [],
        notifyAttendees: false,
        separateInvitationPerAttendee: false,
        disallowCounter: false
      }
    };

    const middlewares = [];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    return createStore(
      window.__redux_reducer__,
      initialState,
      // remove this while integrating this dialog in Thunderbird
      composeEnhancers(applyMiddleware(...middlewares))
    );
  };
})();
