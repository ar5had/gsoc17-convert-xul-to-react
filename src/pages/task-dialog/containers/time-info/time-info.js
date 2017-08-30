/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const TimeInfo = ({ state, actions }) => {
    const {
      startTime,
      dueTime,
      isStartTimeActive,
      isDueTimeActive,
      todoStatus,
      completionStatus,
      completionDate
    } = state;
    const {
      toggleStartTime,
      toggleDueTime,
      changeDueTime,
      changeStartTime,
      changeTodoStatus,
      changeCompletionStatus,
      changeCompletionDate
    } = actions;

    const validateCompletionStatus = e => {
      let value = e.currentTarget.value.toString();
      changeCompletionStatus(parseInt(value, 10));
    };

    const isCompletionDatePickerDisabled = todoStatus !== "COMPLETED";

    const isCompletionStatusTextboxDisabled =
      todoStatus === "CANCELED" || todoStatus === "NOT_SPECIFIED";

    return (
      <div id="time-info-wrapper">
        <div id="row event-grid-startdate-row" className="row">
          <label
            htmlFor="todo-entrytime"
            className="row-label event-only"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Start:", "S") }}
          />
          <input
            type="checkbox"
            className="checkbox"
            id="todo-has-entrydate"
            checked={isStartTimeActive}
            onChange={toggleStartTime}
          />
          <input
            accessKey="S"
            type="date"
            id="todo-entrytime"
            className="row-input no-flex"
            value={startTime}
            onChange={changeStartTime}
            disabled={!isStartTimeActive}
          />
        </div>
        <div id="row event-grid-duedate-row" className="row">
          <label
            htmlFor="todo-duedate"
            className="row-label event-only"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Due date:", "u") }}
          />
          <input
            type="checkbox"
            className="checkbox"
            id="todo-has-duedate"
            checked={isDueTimeActive}
            onChange={toggleDueTime}
          />
          <input
            accessKey="U"
            type="date"
            id="todo-duedate"
            className="row-input no-flex"
            value={dueTime}
            onChange={changeDueTime}
            disabled={!isDueTimeActive}
          />
        </div>
        <div id="event-grid-todo-status-row" className="row">
          <label
            htmlFor="todo-status"
            id="todo-status-label"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Status:", "a") }}
          />
          <select
            name="todo-status"
            id="todo-status"
            className="row-input no-flex"
            value={todoStatus}
            onChange={changeTodoStatus}
            accessKey="a"
          >
            <option value="NOT_SPECIFIED">Not specified</option>
            <option value="NEED_ACTION">Need Action</option>
            <option value="IN_PROCESS">In Process</option>
            <option value="COMPLETED">Completed on</option>
            <option value="CANCELED">Canceled</option>
          </select>
          <input
            type="date"
            id="completed-date-picker"
            className="row-input no-flex"
            value={completionDate}
            onChange={changeCompletionDate}
            disabled={isCompletionDatePickerDisabled}
          />
          <input
            type="number"
            id="percent-complete-textbox"
            className="row-input no-flex"
            min={0}
            max={100}
            value={completionStatus}
            onChange={validateCompletionStatus}
            disabled={isCompletionStatusTextboxDisabled}
          />
          <label className={isCompletionStatusTextboxDisabled ? "row-label disabled" : "row-label"}>
            % complete
          </label>
        </div>
        <div className="separator groove" />
      </div>
    );
  };

  TimeInfo.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ timeInfo }) => ({ state: timeInfo });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__time_info_actions__, dispatch)
  });

  window.TimeInfo = connect(mapStateToProps, mapDispatchToProps)(TimeInfo);
})();
