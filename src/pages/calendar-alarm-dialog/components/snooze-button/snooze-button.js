/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeButton extends React.Component {
    render() {
      const text = this.props.type === "all" ? "Snooze All for" : "Snooze for";
      return (
        <div className="snooze-button-wrapper">
          <button className="alarm-snooze-button" onClick={this.props.onClick.bind(this)}>
            {text}
          </button>
          <select className="snooze-button-dropdown">
            <option className="dropdown-item" value="5" data-unit="M">5 Minutes</option>
            <option className="dropdown-item" value="10" data-unit="M">10 Minutes</option>
            <option className="dropdown-item" value="15" data-unit="M">15 Minutes</option>
            <option className="dropdown-item" value="30" data-unit="M">20 Minutes</option>
            <option className="dropdown-item" value="45" data-unit="M">45 Minutes</option>
            <option className="dropdown-item" value="1" data-unit="H">1 Hour</option>
            <option className="dropdown-item" value="2" data-unit="H">2 Hours</option>
            <option className="dropdown-item" value="2" data-unit="H">1 Day</option>
          </select>
        </div>
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
