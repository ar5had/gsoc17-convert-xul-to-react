(function() {
  class SnoozeButton extends React.Component {
    render() {
      return <button className="alarm-snooze-button">Snooze for</button>;
    }
  }

  SnoozeButton.propTypes = {
    // add isRequired
    onClick: PropTypes.func
  };

  window.SnoozeButton = SnoozeButton;
})();
