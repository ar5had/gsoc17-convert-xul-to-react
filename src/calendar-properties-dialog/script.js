class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "general",
      tabs: {
        general: {
          calendarSwitch: true,
          name: "demo name",
          color: "#fefefe",
          location: "demo uri",
          emails: [
            "NONE",
            "AnotherNONE"
          ],
          selectedEmailIndex: 1,
          readOnly: false,
          showReminders: true,
        },
        aeneral: {
          calendarSwitch: true,
          name: "demo name",
          color: "#fefefe",
          location: "demo uri",
          emails: [
            "NONE",
            "AnotherNONE"
          ],
          selectedEmailIndex: 1,
          readOnly: false,
          showReminders: true,
        }
      }
    };

    // this.recieveMessage.bind(this) gives new reference every time
    // so declaring instance variable so that event can be removed
    // in componentWillUnmount lifecycle
    this.recieveMessage = this.recieveMessage.bind(this);
  }

  componentWillMount() {
    window.addEventListener("message", this.recieveMessage);
  }

  componentDidMount() {
    // set the visuallyselected attribute of first tab to true
    document.querySelector(".tab")
      .setAttribute("visuallyselected", "true");
    setTimeout(() => {
      parent.postMessage(
        JSON.stringify(this.state.tabs),
        `${window.location.origin}/iframe-testing-ground`
      );
    }, 20000);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.recieveMessage);
  }

  getSelectOptions(arr) {
    const options =
      arr.map((e, i) => (
        <option
          value={i}
          key={i}
        >
          {e}
        </option>
      ));

    return options;
  }

  handleCalendarSwitchChange(event) {
    const tabsState = Object.assign(
      {},
      this.state.tabs
    );
    tabsState.general.calendarSwitch = !tabsState.general.calendarSwitch;
    this.setState({ tabs: tabsState });
  }

  handleCalendarNameChange(event) {
    const tabsState = Object.assign(
      {},
      this.state.tabs
    );
    tabsState.general.name = event.currentTarget.value;
    this.setState({ tabs: tabsState });
  }

  handleCalendarColorChange(event) {
    const tabsState = Object.assign(
      {},
      this.state.tabs
    );
    tabsState.general.color = event.currentTarget.value;
    this.setState({ tabs: tabsState });
  }

  handleCalendarUriChange(event) {
    this.setState({ tabs: this.state.tabs });
  }

  handleCalendarEmailChange(event) {
    const generalTab = Object.assign(
      {},
      this.state.tabs.general,
      { selectedEmailIndex: event.currentTarget.selectedIndex }
    );

    const tabsState = Object.assign(
      {},
      { general: generalTab }
    );

    this.setState({ tabs: tabsState });
  }

  handleReadOnlyChange(event) {
    const tabsState = Object.assign(
      {},
      this.state.tabs
    );
    tabsState.general.readOnly = !tabsState.general.readOnly;
    this.setState({ tabs: tabsState });
  }

  handleSuppressAlarmsChange(event) {
    const tabsState = Object.assign(
      {},
      this.state.tabs
    );
    tabsState.general.showReminders = !tabsState.general.showReminders;
    this.setState({ tabs: tabsState });
  }

  // remove this tabName arguemnt when tabStrip is done
  getGeneralTab(tabName) {
    const {
      calendarSwitch,
      name,
      color,
      location,
      readOnly,
      showReminders,
      emails,
      selectedEmailIndex
    } = this.state.tabs[tabName];

    const emailOptions =
      this.getSelectOptions(emails);

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
      <div className="tabContentWrapper">
        <div id="calendar-enabler-container"
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
          className={calendarSwitch ? "grid" : "grid disabled"}
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
              className="row-input hidden"
              disabled={!calendarSwitch}
              onChange={handleCalendarEmail}
              value={selectedEmailIndex}
            >
              {emailOptions}
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
        Tab = this.getGeneralTab(tabName);
        break;
      default:
        Tab = this.getGeneralTab(tabName);
        break;
    }
    return Tab;
  }

  recieveMessage(e) {
    if (e.origin !== window.location.origin) {
      return;
    }

    console.log("%c Data from Parent: Starts",
      "color: #333; font-size: 20px; font-weight: bold");
    console.log(`%c ${e.data}`,
      "color: #ED4CBC; font-size: 16px");
    console.log("%c Data from Parent: Ends",
      "color: #333; font-size: 20px; font-weight: bold");

    const newTabState = Object.assign(
      {},
      JSON.parse(e.data)
    );
    this.setState({ tabs: newTabState });
  }

  changeTab(tabName) {
    this.setState({ activeTab: tabName });
  }

  getTabStrip(activeTab) {
    const tabs =
      Object.keys(this.state.tabs)
        .map(tabName => (
          <div
            onClick={(e) => {
              this.changeTab(tabName);
              const tabNodes =
                document.querySelectorAll(".tab");
              Array.prototype.forEach.call(
                tabNodes,
                tab => {
                  tab.removeAttribute("visuallyselected");
                });
              e.currentTarget
                .setAttribute("visuallyselected", "true");
            }}
            className={`tab ${activeTab === tabName ? "selected" : ""}`}
            selected={activeTab === tabName}
            id={`${tabName}tab`}
            key={tabName}
          >
            {tabName}
          </div>
        ));

    if (tabs.length > 1) {
      return (
        <div className="tabStrip">
          {tabs}
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    const Tab = this.getTab(this.state.activeTab);
    const TabStrip = this.getTabStrip(this.state.activeTab);
    return (
      <div className="wrapper" id="dialog-content-box">
        <div className="tabWrapper">
          {TabStrip}
          {Tab}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);
