/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const { Provider } = ReactRedux;
  // redux_store will be available to acceptDialog
  // and message event listener by closure
  const redux_store = window.__configure_redux_store__();

  ReactDOM.render(
    React.createElement(
      Provider,
      { store: redux_store },
      React.createElement(CalendarAlarmDialog, null)
    ),
    document.getElementById("root")
  );
})();
