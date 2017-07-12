const AlarmDialogButtonBox = ({ snoozeAll, dismissAll, cssClasses }) => {
  return (
    <div id="alarm-action-box" className={cssClasses}>
      <button id="alarm-snooze-all" onClick={snoozeAll}>Snooze All for</button>
      <button id="dismiss-all" onClick={dismissAll}>Dismiss All</button>
    </div>
  );
};

AlarmDialogButtonBox.propTypes = {
  snoozeAll: PropTypes.func.isRequired,
  dismissAll: PropTypes.func.isRequired,
  cssClasses: PropTypes.string
};

window.AlarmDialogButtonBox = AlarmDialogButtonBox;
