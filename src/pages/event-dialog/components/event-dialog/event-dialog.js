/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const EventDialog = () =>
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
  window.EventDialog = EventDialog;
})();
