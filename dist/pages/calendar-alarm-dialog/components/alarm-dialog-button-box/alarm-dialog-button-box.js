/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const AlarmDialogButtonBox = () => {
    return React.createElement(
      "div",
      { id: "alarm-action-box", className: "alarm-dialog-buttonbox" },
      React.createElement(SnoozeButton, { onClick: () => {}, type: "all" }),
      React.createElement("button", { id: "dismiss-all", onClick: () => {} }, "Dismiss All")
    );
  };

  AlarmDialogButtonBox.propTypes = {};

  window.AlarmDialogButtonBox = AlarmDialogButtonBox;
})();
