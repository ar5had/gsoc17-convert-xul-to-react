class RichListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWidget: 0
    };
  }

  changeSelectedWidget(i) {
    this.setState({ selectedWidget: i });
  }

  getAllCalendarWidgets() {
    console.log("calleing getAllWidg");
    return this.props.widgetData.map((widget, i) =>
      <CalendarAlarmWidget
        key={i}
        isSelected={i === this.state.selectedWidget}
        onClick={() => {
          this.changeSelectedWidget(i);
        }}
      />
    );
  }

  render() {
    const allCalendarWidgets = this.getAllCalendarWidgets();
    const cssClasses = this.props.cssClasses;

    return (
      <div className={`richlistbox ${cssClasses}`}>
        {allCalendarWidgets}
      </div>
    );
  }
}

RichListBox.propTypes = {
  cssClasses: PropTypes.string,
  widgetData: PropTypes.array
};

window.RichListBox = RichListBox;
