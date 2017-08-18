(function() {
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
          React.createElement("img", { src: "", alt: "", className: "alarm-calendar-image" })
        ),
        React.createElement(
          "div",
          { className: "alarm-description" },
          React.createElement("p", { className: "alarm-title-label" }, "new alarm"),
          React.createElement(
            "div",
            { className: "additional-information-box" },
            React.createElement("p", { className: "alarm-date-label" }, "23 apr,2017")
          ),
          React.createElement("p", { className: "location-label" }),
          React.createElement("p", { className: "alarm-location-description" }),
          React.createElement("p", { className: "text-link alarm-details-label" }, "Details...")
        ),
        React.createElement("p", { className: "alarm-relative-date-label" }, "22 Jun, 2am , 2015"),
        React.createElement(
          "div",
          { className: "alarm-action-buttons" },
          React.createElement("button", { className: "alarm-snooze-button" }, "Snooze for"),
          React.createElement("button", { className: "alarm-dismiss-button" }, "Dismiss")
        )
      );
    }
  }

  CalendarAlarmWidget.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

  window.CalendarAlarmWidget = CalendarAlarmWidget;
})();
