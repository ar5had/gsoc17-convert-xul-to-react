(function() {
  const EventDialog = () =>
    <div id="event-grid" className="wrapper window">
      <div className="grid-rows">
        <BasicInfo />
        <TimeInfo />
        <AlarmReminderInfo />
        <OtherInfo />
      </div>
    </div>;
  window.EventDialog = EventDialog;
})();
