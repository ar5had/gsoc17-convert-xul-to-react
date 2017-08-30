/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const TaskDialog = () =>
    React.createElement(
      "div",
      { id: "event-grid", className: "wrapper window" },
      React.createElement(
        "div",
        { className: "grid-rows" },
        React.createElement(
          "div",
          { className: "vblock" },
          React.createElement(BasicInfo, null),
          React.createElement(TimeInfo, null),
          React.createElement(AlarmReminderInfo, null)
        ),
        React.createElement(
          "div",
          { className: "vblock flex1" },
          React.createElement(OtherInfo, null)
        )
      )
    );
  window.TaskDialog = TaskDialog;
})();
