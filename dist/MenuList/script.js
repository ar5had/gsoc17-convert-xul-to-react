class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedOptionText: "some dummy text"
    };
  }

  getSelectOptions() {
    const options = this.props.options.map((e, i) =>
      React.createElement("option", { value: i, key: i }, e)
    );

    return options;
  }

  getMenuOptions() {
    const options = this.props.options.map((e, i) =>
      React.createElement(
        "div",
        {
          "data-value": i,
          "key": i,
          "className": "menuItem"
        },
        e
      )
    );

    return options;
  }

  render() {
    const { calendarSwitch } = this.props;
    const selectOptions = this.getSelectOptions();
    const menuOptions = this.getMenuOptions();

    return React.createElement(
      "div",
      { className: "menulistWrapper" },
      React.createElement(
        "select",
        {
          type: "text",
          id: "email-identity-menulist",
          className: "row-input hidden",
          disabled: !calendarSwitch
        },
        selectOptions
      ),
      React.createElement(
        "div",
        { className: "menulist" },
        React.createElement(
          "div",
          {
            className: "menuSelect",
            tabIndex: "0"
          },
          this.state.selectedOptionText
        ),
        React.createElement("div", { className: "menuOptions" }, menuOptions)
      )
    );
  }
}

MenuList.propTypes = {
  options: PropTypes.array.isRequired,
  calendarSwitch: PropTypes.bool.isRequired
};
