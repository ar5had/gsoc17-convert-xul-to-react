/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React */
  class SnoozeTimerPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        unit: "M"
      };
    }

    changeInputValue(event) {
      let inputValue = parseInt(event.currentTarget.value, 10) || 0;
      // making sure negative values are not used for inputValue
      inputValue = inputValue < 0 ? 0 : inputValue;
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
      const popupClass = `snooze-timer-popup ${this.props.showPopup ? " visible" : ""}`;

      return React.createElement(
        "div",
        { className: popupClass },
        React.createElement("input", {
          type: "number",
          min: "0",
          value: inputValue,
          onChange: changeInputValue
        }),
        React.createElement(
          "select",
          { name: "time-unit", value: timeUnit, onChange: changeTimeUnit },
          React.createElement("option", { value: "M" }, "minutes"),
          React.createElement("option", { value: "H" }, "hours"),
          React.createElement("option", { value: "D" }, "days")
        ),
        React.createElement("span", { className: "snooze-ok-btn", onClick: acceptPopup }),
        React.createElement("span", { className: "snooze-cancel-btn", onClick: closePopup })
      );
    }
  }

  SnoozeTimerPopup.propTypes = {
    closePopup: PropTypes.func.isRequired,
    acceptPopup: PropTypes.func.isRequired,
    showPopup: PropTypes.func.isRequired
  };

  window.SnoozeTimerPopup = SnoozeTimerPopup;
})();
