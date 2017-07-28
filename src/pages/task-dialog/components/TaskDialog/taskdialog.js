(function() {
  const TaskDialog = () =>
    <div id="event-grid" className="wrapper window">
      <div className="grid-rows">
        <div className="vblock">
          <BasicInfo />
          <TimeInfo />
          <AlarmReminderInfo />
        </div>
        <div className="vblock flex1">
          <OtherInfo />
        </div>
      </div>
    </div>;
  window.TaskDialog = TaskDialog;
})();
