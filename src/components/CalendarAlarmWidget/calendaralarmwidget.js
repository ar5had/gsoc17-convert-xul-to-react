class CalendarAlarmWidget extends React.Component {
  componentDidMount() {
    if (this.isWidgetSelected()) {
      this.widget.setAttribute("selected", "true");
    }
  }

  isWidgetSelected() {
    return true;
  }

  render() {
    return (
      <div className="calendar-alarm-widget" ref={node => (this.widget = node)}>
        <div className="alarm-calendar-image-wrapper">
          <img src="" alt="" className="alarm-calendar-image" />
        </div>
        <div className="alarm-description">
          <p className="alarm-title-label">new alarm</p>
          <div className="additional-information-box">
            <p className="alarm-date-label">23 apr,2017</p>
          </div>
          <p className="location-label">Location</p>
          <p className="alarm-location-description">New Delhi, India</p>
          <p className="text-link alarm-details-label">Details...</p>
        </div>
        <div className="alarm-action-buttons">
          <button className="alarm-snooze-button">Snooze for</button>
          <button className="alarm-dismiss-button">Dismiss</button>
        </div>
      </div>
    );
  }
}

CalendarAlarmWidget.propTypes = {};

window.CalendarAlarmWidget = CalendarAlarmWidget;
