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
          "button",
          { className: "alarm-snooze-button", onClick: this.props.onClick.bind(this) },
          text
        ),
        React.createElement(
          "div",
          { className: "snooze-button-dropdown" },
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "5", "data-unit": "M" },
            "5 Minutes"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "10", "data-unit": "M" },
            "10 Minutes"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "15", "data-unit": "M" },
            "15 Minutes"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "30", "data-unit": "M" },
            "20 Minutes"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "45", "data-unit": "M" },
            "45 Minutes"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "1", "data-unit": "H" },
            "1 Hour"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "2", "data-unit": "H" },
            "2 Hours"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item", "data-value": "2", "data-unit": "H" },
            "1 Day"
          ),
          React.createElement(
            "div",
            { "className": "dropdown-item manual-time-setter", "data-value": "2", "data-unit": "H" },
            React.createElement("input", { type: "number", min: "0" }),
            React.createElement(
              "select",
              { id: "manual-time-unit" },
              React.createElement("option", { value: "M" }, "minutes"),
              React.createElement("option", { value: "H" }, "hours"),
              React.createElement("option", { value: "D" }, "days")
            ),
            React.createElement("button", null, "Ok"),
            React.createElement("button", null, "Cancel")
          )
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
