class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedOptionText: "some dummy text"
    };
  }

  getSelectOptions() {
    const options =
      this.props.options.map((e, i) => (
        <option value={i} key={i}>
          {e}
        </option>
      ));

    return options;
  }

  getMenuOptions() {
    const options =
      this.props.options.map((e, i) => (
        <div
          data-value={i}
          key={i}
          className="menuItem"
        >
          {e}
        </div>
      ));

    return options;
  }

  render() {
    const { calendarSwitch } = this.props;
    const selectOptions =
      this.getSelectOptions();
    const menuOptions =
      this.getMenuOptions();

    return (
      <div className="menulistWrapper">
        <select
          type="text"
          id="email-identity-menulist"
          className="row-input hidden"
          disabled={!calendarSwitch}
        >
          {selectOptions}
        </select>
        <div className="menulist">
          <div
            className="menuSelect"
            tabIndex="0"
          >
            {this.state.selectedOptionText}
          </div>
          <div className="menuOptions">
            {menuOptions}
          </div>
        </div>
      </div>
    );
  }
}

MenuList.propTypes = {
  options: PropTypes.array.isRequired,
  calendarSwitch: PropTypes.bool.isRequired
};
