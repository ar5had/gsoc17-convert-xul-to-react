(function() {
  const EventDialog = () =>
    React.createElement(
      "div",
      { id: "event-grid", className: "wrapper window" },
      React.createElement(
        "div",
        { className: "grid-rows" },
        React.createElement(BasicInfo, null),
        React.createElement(TimeInfo, null),
        React.createElement(AlarmReminderInfo, null),
        React.createElement(OtherInfo, null)
      )
    );
  window.EventDialog = EventDialog;
})();
