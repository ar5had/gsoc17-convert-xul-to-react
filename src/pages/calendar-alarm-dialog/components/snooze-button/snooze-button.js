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
          <div className="snooze-button-dropdown">
            <div className="dropdown-item" data-value="5" data-unit="M">5 Minutes</div>
            <div className="dropdown-item" data-value="10" data-unit="M">10 Minutes</div>
            <div className="dropdown-item" data-value="15" data-unit="M">15 Minutes</div>
            <div className="dropdown-item" data-value="30" data-unit="M">20 Minutes</div>
            <div className="dropdown-item" data-value="45" data-unit="M">45 Minutes</div>
            <div className="dropdown-item" data-value="1" data-unit="H">1 Hour</div>
            <div className="dropdown-item" data-value="2" data-unit="H">2 Hours</div>
            <div className="dropdown-item" data-value="2" data-unit="H">1 Day</div>
            <div className="dropdown-item manual-time-setter" data-value="2" data-unit="H">
              <input type="number" min="0" />
              <select id="manual-time-unit">
                <option value="M">minutes</option>
                <option value="H">hours</option>
                <option value="D">days</option>
              </select>
              <button>Ok</button>
              <button>Cancel</button>
            </div>
          </div>
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
