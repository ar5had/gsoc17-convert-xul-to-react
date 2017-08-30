/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const AlarmDialogButtonBox = ({ snoozeAll, dismissAll, cssClasses }) => {
    return (
      <div id="alarm-action-box" className={cssClasses}>
        <SnoozeButton onClick={snoozeAll} />
        <button id="dismiss-all" onClick={dismissAll}>Dismiss All</button>
      </div>
    );
  };

  AlarmDialogButtonBox.propTypes = {
    snoozeAll: PropTypes.func.isRequired,
    dismissAll: PropTypes.func.isRequired,
    cssClasses: PropTypes.string
  };

  window.AlarmDialogButtonBox = AlarmDialogButtonBox;
})();
