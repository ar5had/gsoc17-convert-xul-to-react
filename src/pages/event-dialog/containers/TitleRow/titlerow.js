(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const TitleRow = ({ state, actions }) => {
    // const {} = state;
    // const {} = actions;

    return (
      <div id="title-rows-wrapper">
        <div className="row event-grid-title-row" />
        <div className="row event-grid-location-row" />
      </div>
    );
  };

  TitleRow.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ titleRow }) => ({ state: titleRow });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__title_row_actions__, dispatch)
  });

  window.TitleRow = connect(mapStateToProps, mapDispatchToProps)(TitleRow);
})();
