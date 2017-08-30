/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React, Redux, ReactRedux */
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  class PrintSettings extends React.Component {
    componentDidMount() {
      this.titleInput.select();
    }

    getLayoutOptions(options) {
      return options.map((option, i) =>
        React.createElement("option", { value: i, key: i }, option.value)
      );
    }

    render() {
      const { title, selectedLayoutIndex, layoutList } = this.props.state;
      const { changeTitle, changeLayout } = this.props.actions;
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
              onChange: changeTitle,
              ref: node => (this.titleInput = node)
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
              this.getLayoutOptions(layoutList)
            )
          )
        )
      );
    }
  }

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
