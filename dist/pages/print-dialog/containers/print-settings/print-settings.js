(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const PrintSettings = ({ state, actions }) => {
    const { title, selectedLayoutIndex, layoutList } = state;
    const { changeTitle, changeLayout } = actions;

    const getLayoutOptions = options =>
      options.map((option, i) => React.createElement("option", { value: i, key: i }, option.value));

    return React.createElement(
      Fieldset,
      { title: "Print Settings", id: "settingsGroup" },
      React.createElement(
        "div",
        { className: "fieldset-content-wrapper" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "label",
            { htmlFor: "title-field", className: "row-label" },
            "Title:"
          ),
          React.createElement("input", {
            className: "row-input",
            type: "text",
            id: "title-field",
            value: title,
            onChange: changeTitle
          })
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "label",
            { htmlFor: "layout-field", className: "row-label" },
            "Layout:"
          ),
          React.createElement(
            "select",
            {
              className: "row-input",
              id: "layout-field",
              value: selectedLayoutIndex,
              onChange: changeLayout
            },
            getLayoutOptions(layoutList)
          )
        )
      )
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
