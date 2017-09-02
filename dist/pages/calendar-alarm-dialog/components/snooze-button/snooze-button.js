/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeButton extends React.Component {
    render() {
      const text = this.props.type === "all" ? "Snooze All for" : "Snooze for";
      return React.createElement(
        "div",
        { className: "snooze-button-wrapper" },
        React.createElement(
          "select",
          { className: "alarm-snooze-button", value: "0" },
          React.createElement("option", { value: "0", disabled: "disabled" }, text),
          React.createElement("option", { "value": "5", "data-unit": "M" }, "5 Minutes"),
          React.createElement("option", { "value": "10", "data-unit": "M" }, "10 Minutes"),
          React.createElement("option", { "value": "15", "data-unit": "M" }, "15 Minutes"),
          React.createElement("option", { "value": "30", "data-unit": "M" }, "20 Minutes"),
          React.createElement("option", { "value": "45", "data-unit": "M" }, "45 Minutes"),
          React.createElement("option", { "value": "1", "data-unit": "H" }, "1 Hour"),
          React.createElement("option", { "value": "2", "data-unit": "H" }, "2 Hours"),
          React.createElement("option", { "value": "2", "data-unit": "H" }, "1 Day")
        )
      );
    }
  }

  SnoozeButton.propTypes = {
    // add isRequired
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  };

  SnoozeButton.defaultProps = {
    type: "single"
  };

  window.SnoozeButton = SnoozeButton;
})();
