/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeTimerPopup extends React.Component {
    render() {
      return React.createElement(
        "div",
        { className: "snooze-timer-popup" },
        React.createElement("input", { type: "number" }),
        React.createElement(
          "select",
          { name: "time-unit" },
          React.createElement("option", { value: "MINUTES" }, "minutes"),
          React.createElement("option", { value: "HOURS" }, "hours"),
          React.createElement("option", { value: "DAYS" }, "days")
        ),
        React.createElement("button", null, "Ok"),
        React.createElement("button", null, "Cancel")
      );
    }
  }

  SnoozeTimerPopup.propTypes = {};

  window.SnoozeTimerPopup = SnoozeTimerPopup;
})();
