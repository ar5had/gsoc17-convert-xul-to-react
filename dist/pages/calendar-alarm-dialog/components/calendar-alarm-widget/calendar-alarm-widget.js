/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
(function() {
  /* global React*/

  class CalendarAlarmWidget extends React.Component {
    componentDidMount() {
      this.addAttributes(this.props.isSelected);
    }

    componentWillReceiveProps(nextProps) {
      // need to call removeAttributes first so that previous render attributes are removed
      this.removeAttributes();
      this.addAttributes(nextProps.isSelected);
    }

    addAttributes(isWidgetSelected) {
      if (isWidgetSelected) {
        this.widget.setAttribute("selected", "true");
      }
    }

    removeAttributes() {
      this.widget.removeAttribute("selected");
    }

    render() {
      const { time, name, snoozeAlarm, dismissAlarm } = this.props;
      // replace this function while integrating
      const showDetails = () => {};

      return React.createElement(
        "div",
        {
          className: "calendar-alarm-widget",
          ref: node => (this.widget = node),
          onClick: this.props.onClick
        },
        React.createElement(
          "div",
          { className: "alarm-calendar-image-wrapper" },
          React.createElement("div", { className: "alarm-calendar-image" })
        ),
        React.createElement(
          "div",
          { className: "alarm-description" },
          React.createElement("p", { className: "alarm-title-label" }, name),
          React.createElement(
            "div",
            { className: "additional-information-box" },
            React.createElement("p", { className: "alarm-date-label" }, time)
          ),
          React.createElement("p", { className: "location-label" }),
          React.createElement("p", { className: "alarm-location-description" }),
          React.createElement(
            "p",
            { className: "text-link alarm-details-label", onClick: showDetails },
            "Details..."
          )
        ),
        React.createElement("p", { className: "alarm-relative-date-label" }, time),
        React.createElement(
          "div",
          { className: "alarm-action-buttons" },
          React.createElement(SnoozeButton, { onClick: snoozeAlarm, type: "single" }),
          React.createElement(
            "button",
            { className: "alarm-dismiss-button", onClick: dismissAlarm },
            "Dismiss"
          )
        )
      );
    }
  }

  CalendarAlarmWidget.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    snoozeAlarm: PropTypes.func.isRequired,
    dismissAlarm: PropTypes.func.isRequired
  };

  window.CalendarAlarmWidget = CalendarAlarmWidget;
})();
