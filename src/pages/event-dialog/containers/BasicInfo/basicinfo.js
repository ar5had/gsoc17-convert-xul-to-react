(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const BasicInfo = ({ state, actions }) => {
    const { title } = state;
    const { changeTitle } = actions;

    return (
      <div id="basic-info-wrapper">
        <div id="event-grid-title-row" className="row event-grid-title-row">
          <label
            htmlFor="item-title"
            className="row-label"
            dangerouslySetInnerHTML={{ __html: underlineAccessKey("Title:", "i") }}
          />
          <input
            accessKey="I"
            type="text"
            id="item-title"
            className="row-input"
            value={title}
            onChange={changeTitle}
          />
        </div>
        <div className="row event-grid-location-row" />
      </div>
    );
  };

  BasicInfo.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ basicInfo }) => ({ state: basicInfo });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__basic_info_actions__, dispatch)
  });

  window.BasicInfo = connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
})();
