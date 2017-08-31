/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class SnoozeButton extends React.Component {
    render() {
      const text = this.props.type === "all" ? "Snooze All for" : "Snooze for";
      return (
        <div class="snooze-button-wrapper">
          <button className="alarm-snooze-button" onClick={this.props.onClick.bind(this)}>
            {text}
          </button>
          <div class="snooze-button-dropdown">
            <div class="dropdown-item" data-value="5" data-unit="Minutes">5 Minu</div>
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
