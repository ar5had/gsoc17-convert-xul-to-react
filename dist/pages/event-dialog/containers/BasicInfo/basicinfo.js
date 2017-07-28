(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const BasicInfo = ({ state, actions }) => {
    const { title, location, itemCalendar, itemCategory } = state;
    const { changeTitle, changeLocation, changeItemCategory, changeItemCalendar } = actions;

    return React.createElement(
      "div",
      { id: "basic-info-wrapper" },
      React.createElement(
        "div",
        { id: "event-grid-title-row", className: "row event-grid-title-row" },
        React.createElement("label", {
          htmlFor: "item-title",
          className: "row-label",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("Title:", "i") }
        }),
        React.createElement("input", {
          accessKey: "I",
          type: "text",
          id: "item-title",
          className: "row-input",
          value: title,
          onChange: changeTitle
        })
      ),
      React.createElement(
        "div",
        { className: "row event-grid-location-row" },
        React.createElement("label", {
          htmlFor: "item-location",
          className: "row-label",
          dangerouslySetInnerHTML: { __html: underlineAccessKey("Location:", "L") }
        }),
        React.createElement("input", {
          accessKey: "L",
          type: "text",
          id: "item-location",
          className: "row-input",
          value: location,
          onChange: changeLocation
        })
      ),
      React.createElement(
        "div",
        { id: "event-grid-category-color-row", className: "row same-row" },
        React.createElement(
          "div",
          { id: "event-grid-category", className: "row" },
          React.createElement("label", {
            htmlFor: "item-categories",
            className: "row-label",
            id: "event-grid-category-labels-box",
            dangerouslySetInnerHTML: { __html: underlineAccessKey("Category:", "y") }
          }),
          React.createElement("select", {
            name: "item-categories",
            id: "item-categories",
            className: "row-input",
            accessKey: "y",
            onChange: changeItemCategory,
            value: itemCategory
          })
        ),
        React.createElement(
          "div",
          { id: "item-calendar-row", className: "row" },
          React.createElement("label", {
            htmlFor: "item-calendar",
            className: "row-label",
            dangerouslySetInnerHTML: { __html: underlineAccessKey("Calendar:", "C") }
          }),
          React.createElement(
            "select",
            {
              name: "item-calendar",
              id: "item-calendar",
              className: "row-input",
              accessKey: "C",
              onChange: changeItemCalendar,
              value: itemCalendar
            },
            React.createElement("option", { value: "HOME" }, "Home")
          )
        )
      ),
      React.createElement("div", { className: "separator groove" })
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
