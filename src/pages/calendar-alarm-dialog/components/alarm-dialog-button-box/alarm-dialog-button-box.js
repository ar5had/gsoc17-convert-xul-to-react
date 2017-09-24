/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const AlarmDialogButtonBox = () => {
    return (
      <div id="alarm-action-box" className="alarm-dialog-buttonbox">
        <SnoozeButton onClick={() => {}} type="all" />
        <button id="dismiss-all" onClick={() => {}}>Dismiss All</button>
      </div>
    );
  };

  AlarmDialogButtonBox.propTypes = {};

  window.AlarmDialogButtonBox = AlarmDialogButtonBox;
})();
