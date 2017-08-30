/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeButton extends React.Component {
    render() {
      return React.createElement("button", { className: "alarm-snooze-button" }, "Snooze for");
    }
  }

  SnoozeButton.propTypes = {
    // add isRequired
    onClick: PropTypes.func
  };

  window.SnoozeButton = SnoozeButton;
})();
