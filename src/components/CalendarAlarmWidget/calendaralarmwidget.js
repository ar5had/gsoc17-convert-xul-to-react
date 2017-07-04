class CalendarAlarmWidget extends React.Component {
  componentDidMount() {
    this.addAttributes();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.isSelected);
    // need to call removeAttributes first so that previous render attributes are removed
    this.removeAttributes();
    this.addAttributes();
  }

  addAttributes() {
    if (this.isWidgetSelected()) {
      this.widget.setAttribute("selected", "true");
    }
  }

  removeAttributes() {
    this.widget.removeAttribute("selected");
  }

  isWidgetSelected() {
    return this.props.isSelected;
  }

  render() {
    return (
      <div
        className="calendar-alarm-widget"
        ref={node => (this.widget = node)}
        onClick={this.props.onClick}
      >
        <div className="alarm-calendar-image-wrapper">
          <img src="" alt="" className="alarm-calendar-image" />
        </div>
        <div className="alarm-description">
          <p className="alarm-title-label">new alarm</p>
          <div className="additional-information-box">
            <p className="alarm-date-label">23 apr,2017</p>
          </div>
          <p className="location-label" />
          <p className="alarm-location-description" />
          <p className="text-link alarm-details-label">Details...</p>
        </div>
        <p className="alarm-relative-date-label">22 Jun, 2am , 2015</p>
        <div className="alarm-action-buttons">
          <button className="alarm-snooze-button">Snooze for</button>
          <button className="alarm-dismiss-button">Dismiss</button>
        </div>
      </div>
    );
  }
}

CalendarAlarmWidget.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

window.CalendarAlarmWidget = CalendarAlarmWidget;
