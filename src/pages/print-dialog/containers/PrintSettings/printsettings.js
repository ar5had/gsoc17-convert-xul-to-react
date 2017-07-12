(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const PrintSettings = ({ state, actions }) => {
    const { title, layout } = state;
    const { changeTitle, changeLayout } = actions;
    return (
      <Fieldset title="Print Settings" id="settingsGroup">
        <div className="fieldset-content-wrapper">
          <div className="row">
            <label htmlFor="title-field" className="row-label">Title:</label>
            <input
              className="row-input"
              type="text"
              id="title-field"
              value={title}
              onChange={changeTitle}
            />
          </div>
          <div className="row">
            <label htmlFor="layout-field" className="row-label">
              Layout:
            </label>
            <select className="row-input" id="layout-field" value={layout} onChange={changeLayout}>
              <option value="LIST">List</option>
              <option value="MONTHLY_GRID">Monthly Grid</option>
              <option value="WEEKLY_PLANNER">Weekly Planner</option>
            </select>
          </div>
        </div>
      </Fieldset>
    );
  };

  PrintSettings.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ printSettings }) => ({ state: printSettings });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.redux_actions, dispatch)
  });

  window.PrintSettings = connect(mapStateToProps, mapDispatchToProps)(PrintSettings);
})();
