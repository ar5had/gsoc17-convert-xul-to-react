class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "general",
      tabs: {
        general: {
          calendarSwitch: true,
          name: "My Calendar",
          color: "#3f3f3f",
          location: "moz-storage-calendar://",
          email: [
            "abc@gmail.com",
            "def@gmail.com",
          ],
          readOnly: false,
          showReminders: true,
        },
      }
    }
  }

  handleCalendarSwitchChange(event) {
    const tabState = this.state.tabs;
    tabState.general.calendarSwitch = !tabState.general.calendarSwitch;
    this.setState({tabs: tabState});
  }

  handleCalendarNameChange(event) {
    const tabState = this.state.tabs;
    tabState.general.name = event.currentTarget.value;
    this.setState({tabs: tabState});
  }

  handleCalendarColorChange(event) {
    const tabState = this.state.tabs;
    tabState.general.color = event.currentTarget.value;
    this.setState({tabs: tabState});
  }

  handleCalendarUriChange(event) {
    const tabState = this.state.tabs;
    tabState.general.location = event.currentTarget.value;
    this.setState({tabs: tabState});
  }

  handleCalendarEmailChange(event) {
    const tabState = this.state.tabs;
    // tabState.general.calendarSwitch = !tabState.general.calendarSwitch;
    // this.setState({tabs: tabState});
  }

  handleReadOnlyChange(event) {
    const tabState = this.state.tabs;
    tabState.general.readOnly = !tabState.general.readOnly;
    this.setState({tabs: tabState});
  }

  handleSuppressAlarmsChange(event) {
    const tabState = this.state.tabs;
    tabState.general.showReminders = !tabState.general.showReminders;
    this.setState({tabs: tabState});
  }

  getEmailSelectOptions() {
    const options = 
      this.state.tabs.general.email.map((e,i) => 
        <option value={i} key={i}>
          {e}
        </option>
      );
      
    return options;
  }

  getGeneralTab() {
    const {
      calendarSwitch,
      name,
      color,
      location,
      readOnly,
      showReminders
    } = this.state.tabs.general;

    const emails = this.getEmailSelectOptions(); 

    const handleCalendarSwitch = 
      this.handleCalendarSwitchChange.bind(this);
    
    const handleCalendarName = 
      this.handleCalendarNameChange.bind(this);
    
    const handleCalendarColor = 
      this.handleCalendarColorChange.bind(this);
    
    const handleCalendarUri = 
      this.handleCalendarUriChange.bind(this);
    
    const handleCalendarEmail = 
      this.handleCalendarEmailChange.bind(this);
    
    const handleReadOnly = 
      this.handleReadOnlyChange.bind(this);
    
    const handleSuppressAlarms = 
      this.handleSuppressAlarmsChange.bind(this);

    return (
      <div className="wrapper dialog-content-box">
        <div className="calendar-enabler-container"
          className="row">
          <input type="checkbox"
            className="checkbox"
            id="calendar-enabled-checkbox"
            value="calendarSwitch" 
            checked={calendarSwitch}
            onChange={handleCalendarSwitch}
          />
          <label htmlFor="calendar-enabled-checkbox">
            Switch this calendar on
          </label>
        </div>
        <div 
          id="calendar-properties-grid"
          className={!calendarSwitch?"grid disabled":"grid"}
        >
          <div id="calendar-name-row"
            className="row">
            <label htmlFor="calendar-name" className="row-label">
              Calendar Name:
            </label>
            <input
              type="text"
              id="calendar-name"
              className="row-input" 
              value={name}
              onChange={handleCalendarName}
              disabled={!calendarSwitch}
            />
          </div>
          <div id="calendar-color-row"
            className="row">
            <label htmlFor="calendar-color" className="row-label">
              Color:
            </label>
            <input
              type="color"
              id="calendar-color"
              className="row-input"
              value={color}
              onChange={handleCalendarColor}
              disabled={!calendarSwitch}
            />
          </div>
          <div id="calendar-uri-row"
            className="row">
            <label htmlFor="calendar-uri" className="row-label">
              Location:
            </label>
            <input
              type="text"
              id="calendar-uri"
              className="row-input"
              value={location}
              onChange={handleCalendarUri}
              disabled={!calendarSwitch}
            />
          </div>
          <div id="calendar-email-identity-row" className="row">
            <label htmlFor="email-identity-menulist" className="row-label">
              E-Mail:
            </label>
            <select
              type="text"
              id="email-identity-menulist"
              className="row-input"
              disabled={!calendarSwitch}
            >
              {emails}
            </select>
          </div>
          <div id="calendar-readOnly-row" className="row">
            <div>
              <input
                type="checkbox"
                className="checkbox"
                id="readOnly"
                checked={readOnly}
                onChange={handleReadOnly}
                disabled={!calendarSwitch}
              />
              <label htmlFor="readOnly">
                Read Only
              </label>
            </div>
          </div>
          <div id="calendar-suppressAlarms-row" className="row">
            <div>
              <input
                type="checkbox"
                className="checkbox"
                id="fire-alarms"
                checked={showReminders}
                onChange={handleSuppressAlarms}
                disabled={!calendarSwitch}
              />
              <label htmlFor="fire-alarms">
                Show Reminders
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getTab(tabName) {
    let Tab;
    switch (tabName) {
      case "general":
        Tab = this.getGeneralTab();
        break;
      default:
        Tab = this.getGeneralTab();
        break;
    }
    return Tab;
  }

  render() {
    const Tab = this.getTab(this.state.activeTab);
    return (
      <div className="tabWrapper">
        {Tab}
      </div>
    );
  }

}

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);
