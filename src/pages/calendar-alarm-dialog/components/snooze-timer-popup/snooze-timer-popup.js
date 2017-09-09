/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeTimerPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        unit: "M"
      };
    }

    changeInputValue(event) {
      const inputValue = parseInt(event.currentTarget.value, 10) || 0;
      this.setState({
        value: inputValue
      });
    }

    changeTimeUnit(event) {
      const timeUnit = event.currentTarget.value;
      this.setState({
        unit: timeUnit
      });
    }

    acceptPopup() {
      const { value, unit } = this.state;
      this.props.acceptPopup(value, unit);
    }

    render() {
      const closePopup = this.props.closePopup.bind(this);
      const acceptPopup = this.acceptPopup.bind(this);
      const changeTimeUnit = this.changeTimeUnit.bind(this);
      const changeInputValue = this.changeInputValue.bind(this);
      const inputValue = this.state.value;
      const timeUnit = this.state.unit;

      return (
        <div className="snooze-timer-popup">
          {/* add validation for no < 0  */}
          <input type="number" min="0" value={inputValue} onChange={changeInputValue} />
          <select name="time-unit" value={timeUnit} onChange={changeTimeUnit}>
            <option value="M">minutes</option>
            <option value="H">hours</option>
            <option value="D">days</option>
          </select>
          <span className="snooze-ok-btn" onClick={acceptPopup} />
          <span className="snooze-cancel-btn" onClick={closePopup} />
        </div>
      );
    }
  }

  SnoozeTimerPopup.propTypes = {
    closePopup: PropTypes.func.isRequired,
    acceptPopup: PropTypes.func.isRequired
  };

  window.SnoozeTimerPopup = SnoozeTimerPopup;
})();