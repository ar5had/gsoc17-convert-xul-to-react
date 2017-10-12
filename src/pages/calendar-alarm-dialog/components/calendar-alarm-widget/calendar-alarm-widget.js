/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
(function () {
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
      const showDetails = () => { };

      return (
        <div
          className="calendar-alarm-widget"
          ref={node => (this.widget = node)}
          onClick={this.props.onClick}
        >
          <div className="alarm-calendar-image-wrapper">
            <div className="alarm-calendar-image" />
          </div>
          <div className="alarm-description">
            <p className="alarm-title-label">{name}</p>
            <div className="additional-information-box">
              <p className="alarm-date-label">{time}</p>
            </div>
            <p className="location-label" />
            <p className="alarm-location-description" />
            <p className="text-link alarm-details-label" onClick={showDetails}>Details...</p>
          </div>
          <p className="alarm-relative-date-label">{time}</p>
          <div className="alarm-action-buttons">
            <SnoozeButton onClick={snoozeAlarm} type="single" />
            <button className="alarm-dismiss-button" onClick={dismissAlarm}>Dismiss</button>
          </div>
        </div>
      );
    }
  }

  CalendarAlarmWidget.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    snoozeAlarm: PropTypes.func.isRequired,
    dismissAlarm: PropTypes.func.isRequired,
  };

  window.CalendarAlarmWidget = CalendarAlarmWidget;
})();
