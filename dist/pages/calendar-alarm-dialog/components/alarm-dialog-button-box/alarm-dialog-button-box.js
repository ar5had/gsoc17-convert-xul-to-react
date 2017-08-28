(function() {
  const AlarmDialogButtonBox = ({ snoozeAll, dismissAll, cssClasses }) => {
    return React.createElement(
      "div",
      { id: "alarm-action-box", className: cssClasses },
      React.createElement(SnoozeButton, { onClick: snoozeAll }),
      React.createElement("button", { id: "dismiss-all", onClick: dismissAll }, "Dismiss All")
    );
  };

  AlarmDialogButtonBox.propTypes = {
    snoozeAll: PropTypes.func.isRequired,
    dismissAll: PropTypes.func.isRequired,
    cssClasses: PropTypes.string
  };

  window.AlarmDialogButtonBox = AlarmDialogButtonBox;
})();
