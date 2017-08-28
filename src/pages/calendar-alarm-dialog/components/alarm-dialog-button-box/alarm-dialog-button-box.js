(function() {
  const AlarmDialogButtonBox = ({ snoozeAll, dismissAll, cssClasses }) => {
    return (
      <div id="alarm-action-box" className={cssClasses}>
        <SnoozeButton onClick={snoozeAll} />
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
})();
