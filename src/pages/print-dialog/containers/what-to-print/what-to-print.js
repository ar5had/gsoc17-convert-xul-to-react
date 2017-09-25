/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React, Redux, ReactRedux */
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const WhatToPrint = ({ state, actions }) => {
    const { printEvents, printTasks, toDate, fromDate, view } = state;
    const { toggleEventsShow, toggleTasksShow, changeView, changeFromDate, changeToDate } = actions;
    return (
      <Fieldset title="What to Print" id="what-to-print-group">
        <div className="fieldset-content-wrapper">
          <div className="row row-align-content">
            <input
              className="row-input checkbox"
              type="checkbox"
              id="events"
              checked={printEvents}
              onChange={toggleEventsShow}
            />
            <label htmlFor="events" className="row-label mar-right-15">
              Events
            </label>
            <input
              className="row-input checkbox"
              type="checkbox"
              id="tasks"
              checked={printTasks}
              onChange={toggleTasksShow}
            />
            <label htmlFor="tasks" className="row-label">
              Tasks
            </label>
          </div>
          <div className="row row-label-expanded">
            <input
              className="row-input checkbox"
              name="to-print"
              type="radio"
              id="printCurrentView"
              value="currentView"
              checked={view === "currentView"}
              onChange={changeView}
            />
            <label htmlFor="printCurrentView" className="row-label">
              Current view
            </label>
          </div>
          <div className="row row-label-expanded">
            <input
              className="row-input checkbox"
              type="radio"
              name="to-print"
              id="selected"
              value="selected"
              checked={view === "selected"}
              onChange={changeView}
            />
            <label htmlFor="selected" className="row-label">
              Selected events/tasks
            </label>
          </div>
          <div className="row row-label-expanded">
            <input
              className="row-input checkbox"
              type="radio"
              name="to-print"
              id="custom-range"
              value="custom"
              checked={view === "custom"}
              onChange={changeView}
            />
            <label htmlFor="custom-range" className="row-label">
              Custom date range
            </label>
          </div>
          <div className="row">
            <label htmlFor="start-date-picker" className="row-label">From:</label>
            <input
              type="date"
              id="start-date-picker"
              className="row-input"
              value={fromDate}
              onChange={changeFromDate}
            />
          </div>
          <div className="row">
            <label htmlFor="end-date-picker" className="row-label">To:</label>
            <input
              type="date"
              id="end-date-picker"
              className="row-input"
              value={toDate}
              onChange={changeToDate}
            />
          </div>
        </div>
      </Fieldset>
    );
  };

  WhatToPrint.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ whatToPrint }) => ({ state: whatToPrint });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__what_to_print_actions__, dispatch)
  });

  window.WhatToPrint = connect(mapStateToProps, mapDispatchToProps)(WhatToPrint);
})();
