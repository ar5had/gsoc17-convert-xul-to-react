class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "general",
      tabs: {
        general: {
          disabled: false,
          forceDisabled: false,
          autoEnabled: false,
          color: "#deadbf",
          name: "Calendar",
          uri: "moz-storage-calendar://",
          readOnly: true,
          supressAlarms: false,
          canRefresh: false,
          refreshInterval: 30,
          cache: {
            supported: false,
            enabled: false,
            always: false
          },
          capabilities: {
            alarms: {
              popup: {
                supported: true
              }
            }
          }
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
    setTimeout(() => {
      this.postMessage(JSON.stringify(this.state.tabs, null, 2), `${window.location.origin}`);
    }, 20000);

    // set the visuallyselected attribute of first tab to true
    const firstTabNode = document.querySelector(".tab");
    if (firstTabNode) {
      this.selectTabVisually(firstTabNode);
    } else {
      this.tabInterval = setInterval(() => {
        const firstTab = document.querySelector(".tab");
        if (firstTab) {
          this.selectTabVisually(firstTab);
          clearInterval(this.tabInterval);
        }
      }, 50);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.recieveMessage);
  }

  selectTabVisually(node) {
    node.setAttribute("visuallyselected", "true");
    node.setAttribute("selected", "true");
  }

  deselectTabVisually(node) {
    node.removeAttribute("visuallyselected");
    node.removeAttribute("selected");
  }

  getSelectOptions(arr) {
    arr = arr ? arr : ["NONE"];
    const options = arr.map((e, i) =>
      <option value={i} key={i}>
        {e}
      </option>
    );

    return options;
  }

  handleCalendarToggleChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.disabled = !tabsState.general.disabled;
    this.setState({ tabs: tabsState });
  }

  handleCalendarNameChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.name = event.currentTarget.value;
    this.setState({ tabs: tabsState });
  }

  handleCalendarColorChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.color = event.currentTarget.value;
    this.setState({ tabs: tabsState });
  }

  handleCalendarUriChange(event) {
    this.setState({ tabs: this.state.tabs });
  }

  handleCalendarEmailChange(event) {
    const generalTab = Object.assign({}, this.state.tabs.general, {
      selectedEmailIndex: event.currentTarget.selectedIndex
    });

    const tabsState = Object.assign({}, this.state.tabs, {
      general: generalTab
    });

    this.setState({ tabs: tabsState });
  }

  handleReadOnlyChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.readOnly = !tabsState.general.readOnly;
    this.setState({ tabs: tabsState });
  }

  handleSuppressAlarmsChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.supressAlarms = !tabsState.general.supressAlarms;
    this.setState({ tabs: tabsState });
  }

  // remove this tabName arguemnt when tabStrip is done
  getGeneralTab(tabName) {
    const {
      disabled,
      name,
      color,
      uri,
      readOnly,
      supressAlarms,
      emails,
      selectedEmailIndex
    } = this.state.tabs[tabName];

    const emailOptions = this.getSelectOptions(emails);

    const handleCalendarToggle = this.handleCalendarToggleChange.bind(this);

    const handleCalendarName = this.handleCalendarNameChange.bind(this);

    const handleCalendarColor = this.handleCalendarColorChange.bind(this);

    const handleCalendarUri = this.handleCalendarUriChange.bind(this);

    const handleCalendarEmail = this.handleCalendarEmailChange.bind(this);

    const handleReadOnly = this.handleReadOnlyChange.bind(this);

    const handleSuppressAlarms = this.handleSuppressAlarmsChange.bind(this);

    return (
      <div className="tabContentWrapper">
        <div id="calendar-enabler-container" className="row">
          <input
            type="checkbox"
            className="checkbox"
            id="calendar-enabled-checkbox"
            value="disabled"
            checked={!disabled}
            onChange={handleCalendarToggle}
          />
          <label htmlFor="calendar-enabled-checkbox">
            Switch this calendar on
          </label>
        </div>
        <div id="calendar-properties-grid" className={disabled ? "grid disabled" : "grid"}>
          <div id="calendar-name-row" className="row">
            <label htmlFor="calendar-name" className="row-label">
              Calendar Name:
            </label>
            <input
              type="text"
              id="calendar-name"
              className="row-input"
              value={name}
              onChange={handleCalendarName}
              disabled={disabled}
            />
          </div>
          <div id="calendar-color-row" className="row">
            <label htmlFor="calendar-color" className="row-label">
              Color:
            </label>
            <input
              type="color"
              id="calendar-color"
              className="row-input"
              value={color}
              onChange={handleCalendarColor}
              disabled={disabled}
            />
          </div>
          <div id="calendar-uri-row" className="row">
            <label htmlFor="calendar-uri" className="row-label">
              Location:
            </label>
            <input
              type="text"
              id="calendar-uri"
              className="row-input"
              value={uri}
              onChange={handleCalendarUri}
              disabled={disabled}
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
              disabled={disabled}
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
                disabled={disabled}
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
                checked={supressAlarms}
                onChange={handleSuppressAlarms}
                disabled={disabled}
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

  postMessage(msg, origin) {
    // parent and window are same thing if the current page is not in any frame
    console.log(window !== parent);
    if (window !== parent) {
      parent.postMessage(msg, origin);
    }
  }

  recieveMessage(e) {
    if (e.origin !== window.location.origin) {
      return;
    }

    this.postMessage(
      JSON.stringify({ messageRecieved: true }),
      `${window.location.origin}/iframe-testing-ground`
    );

    console.log("%c Data from Parent: Starts", "color: #333; font-size: 20px; font-weight: bold");
    console.log(`%c ${e.data}`, "color: #ED4CBC; font-size: 16px");
    console.log("%c Data from Parent: Ends", "color: #333; font-size: 20px; font-weight: bold");

    const newTabState = Object.assign({}, JSON.parse(e.data));
    this.setState({ tabs: newTabState });
  }

  changeTab(tabName) {
    this.setState({ activeTab: tabName });
  }

  getTabStrip(activeTab) {
    const tabs = Object.keys(this.state.tabs).map(tabName =>
      <div
        onClick={event => {
          const tabNodes = document.querySelectorAll(".tab");

          Array.prototype.forEach.call(tabNodes, tab => {
            this.deselectTabVisually(tab);
          });

          this.selectTabVisually(event.target);
          this.changeTab(tabName);
        }}
        className={`tab ${activeTab === tabName ? "selected" : ""}`}
        selected={activeTab === tabName}
        id={`${tabName}tab`}
        key={tabName}
      >
        {tabName}
      </div>
    );

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

ReactDOM.render(<Wrapper />, document.getElementById("root"));
