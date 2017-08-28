(function() {
  class SnoozeButton extends React.Component {
    render() {
      return React.createElement("button", { className: "alarm-snooze-button" }, "Snooze for");
    }
  }

  SnoozeButton.propTypes = {
    // add isRequired
    onClick: PropTypes.func
  };

  window.SnoozeButton = SnoozeButton;
})();
