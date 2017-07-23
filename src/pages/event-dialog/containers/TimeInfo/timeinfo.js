(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const TimeInfo = ({ state, actions }) => {
    const { allDayEvent } = state;
    const { toggleAllDayEvent } = actions;

    return (
      <div id="time-info-wrapper">
        <div className="row event-grid-allday-row">
          <div className="label-spacer" />
          <input
            accessKey="d"
            type="checkbox"
            id="event-all-day"
            className="checkbox"
            checked={allDayEvent}
            onChange={toggleAllDayEvent}
          />
          <label
            htmlFor="event-all-day"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("All day event", "d") }}
          />
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
