/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeTimerPopup extends React.Component {
    render() {
      return (
        <div class="snooze-timer-popup">
          <input type="number" />
          <select name="time-unit">
            <option value="MINUTES">minutes</option>
            <option value="HOURS">hours</option>
            <option value="DAYS">days</option>
          </select>
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      );
    }
  }

  SnoozeTimerPopup.propTypes = {};

  window.SnoozeTimerPopup = SnoozeTimerPopup;
})();
