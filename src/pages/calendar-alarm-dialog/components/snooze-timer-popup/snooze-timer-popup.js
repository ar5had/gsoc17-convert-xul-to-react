/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeTimerPopup extends React.Component {
    render() {
      const hidePopup = this.props.hidePopup.bind(this);
      return (
        <div className="snooze-timer-popup">
          {/* add validation for no < 0  */}
          <input type="number" min="0" />
          <select name="time-unit">
            <option value="MINUTES">minutes</option>
            <option value="HOURS">hours</option>
            <option value="DAYS">days</option>
          </select>
          <span className="snooze-ok-btn" />
          <span className="snooze-cancel-btn" onClick={hidePopup}/>
        </div>
      );
    }
  }

  SnoozeTimerPopup.propTypes = {
    hidePopup: PropTypes.func.isRequired
  };

  window.SnoozeTimerPopup = SnoozeTimerPopup;
})();
