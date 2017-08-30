/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const TimeInfo = ({ state, actions }) => {
    const { allDayEvent, startTime, endTime } = state;
    const { toggleAllDayEvent, changeEndTime, changeStartTime } = actions;

    return React.createElement(
      "div",
      { id: "time-info-wrapper" },
      React.createElement(
        "div",
        { className: "row event-grid-allday-row" },
        React.createElement("div", { className: "label-spacer" }),
        React.createElement("input", {
          accessKey: "d",
          type: "checkbox",
          id: "event-all-day",
          className: "checkbox",
          checked: allDayEvent,
          onChange: toggleAllDayEvent
        }),
        React.createElement("label", {
          htmlFor: "event-all-day",
          className: "row-label",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("All day event", "d") }
        })
      ),
      React.createElement(
        "div",
        { className: "row event-grid-startdate-row" },
        React.createElement("label", {
          htmlFor: "event-starttime",
          className: "row-label event-only",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("Start:", "S") }
        }),
        React.createElement("input", {
          accessKey: "S",
          type: "date",
          id: "event-starttime",
          className: "row-input no-flex",
          value: startTime,
          onChange: changeStartTime
        })
      ),
      React.createElement(
        "div",
        { className: "row event-grid-enddate-row" },
        React.createElement("label", {
          htmlFor: "event-endtime",
          className: "row-label event-only",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("End:", "U") }
        }),
        React.createElement("input", {
          accessKey: "U",
          type: "date",
          id: "event-endtime",
          className: "row-input no-flex",
          value: endTime,
          onChange: changeEndTime
        })
      ),
      React.createElement("div", { className: "separator groove" })
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
