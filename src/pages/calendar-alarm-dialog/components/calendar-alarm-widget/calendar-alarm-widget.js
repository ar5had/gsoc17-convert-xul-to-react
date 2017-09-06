/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
            <SnoozeButton onClick={() => {}} type="single" />
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
})();
