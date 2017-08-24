(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const PrintSettings = ({ state, actions }) => {
    const { title, selectedLayoutIndex, layoutList } = state;
    const { changeTitle, changeLayout } = actions;

    const getLayoutOptions = options =>
      options.map((option, i) =>
        <option value={i} key={i}>
          {option.value}
        </option>
      );

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
            <select
              className="row-input"
              id="layout-field"
              value={selectedLayoutIndex}
              onChange={changeLayout}
            >
              {getLayoutOptions(layoutList)}
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
    actions: bindActionCreators(window.__print_settings_actions__, dispatch)
  });

  window.PrintSettings = connect(mapStateToProps, mapDispatchToProps)(PrintSettings);
})();
