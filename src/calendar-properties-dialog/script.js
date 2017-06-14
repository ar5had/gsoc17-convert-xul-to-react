// Tab Component

class Tab extends React.Component {
  componentDidMount() {
    if (this.props.active) {
      this.selectTabVisually(this.tab);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.deselectTabVisually(this.tab);
    if (nextProps.active) {
      this.selectTabVisually(this.tab);
    }
  }

  selectTabVisually(node) {
    node.setAttribute("visuallyselected", "true");
    node.setAttribute("selected", "true");
  }

  deselectTabVisually(node) {
    node.removeAttribute("visuallyselected");
    node.removeAttribute("selected");
  }

  handleTabClick(event) {
    const { handleTabChange, tabName } = this.props;
    handleTabChange(tabName);
  }

  render() {
    const handleTabClick = this.handleTabClick.bind(this);
    const { tabName, active } = this.props;
    return (
      <div
        onClick={handleTabClick}
        className={`tab ${active ? "selected" : ""}`}
        id={`${tabName}tab`}
        key={tabName}
        ref={node => (this.tab = node)}
      >
        {tabName}
      </div>
    );
  }
}

Tab.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  tabName: PropTypes.string.isRequired
};

// TabStrip Component

const TabStrip = ({ tabs, handleTabChange, activeTab }) => {
  const getTabStripContent = () => {
    const allTabs = tabs.map(tabName =>
      <Tab
        active={tabName === activeTab}
        tabName={tabName}
        key={tabName}
        handleTabChange={handleTabChange}
      />
    );
    return allTabs;
  };

  const tabStripContent = getTabStripContent();

  return (
    <div className="tabStrip">
      {tabStripContent}
    </div>
  );
};

TabStrip.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired
};

// TabPanel Component

const TabPanel = ({
  data,
  calendarColorChange,
  calendarEmailChange,
  calendarNameChange,
  calendarToggleChange,
  calendarUriChange,
  readOnlyChange,
  suppressAlarmsChange
}) => {
  const getSelectOptions = arr => {
    arr = arr ? arr : ["NONE"];
    const options = arr.map((e, i) =>
      <option value={i} key={i}>
        {e}
      </option>
    );
    return options;
  };

  const { disabled, name, color, uri, readOnly, supressAlarms, emails, selectedEmailIndex } = data;

  const emailOptions = getSelectOptions(emails);

  return (
    <div className="tabContentWrapper">
      <div id="calendar-enabler-container" className="row">
        <input
          type="checkbox"
          className="checkbox"
          id="calendar-enabled-checkbox"
          value="disabled"
          checked={!disabled}
          onChange={calendarToggleChange}
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
            onChange={calendarNameChange}
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
            onChange={calendarColorChange}
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
            onChange={calendarUriChange}
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
            onChange={calendarEmailChange}
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
              onChange={readOnlyChange}
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
              onChange={suppressAlarmsChange}
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
};

TabPanel.propTypes = {
  data: PropTypes.object,
  calendarColorChange: PropTypes.func,
  calendarEmailChange: PropTypes.func,
  calendarNameChange: PropTypes.func,
  calendarToggleChange: PropTypes.func,
  calendarUriChange: PropTypes.func,
  readOnlyChange: PropTypes.func,
  suppressAlarmsChange: PropTypes.func
};

// DialogContentBox Component

class DialogContentBox extends React.Component {
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
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.recieveMessage);
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

  postMessage(msg, origin) {
    // parent and window are same thing if the current page is not in any frame
    if (window !== parent) {
      parent.postMessage(msg, origin);
    }
  }

  recieveMessage(e) {
    // react-devtools sends message events whenever you open it so blocking such event is necessary
    if (e.origin !== window.location.origin || /react-devtools/gi.test(e.data.source)) {
      console.log(`Blocked request from ${e.origin} with data -`, e.data);
      return;
    }

    this.postMessage({ messageRecieved: true }, `${window.location.origin}/iframe-testing-ground`);

    console.log("%c Data from Parent: Starts", "color: #333; font-size: 20px; font-weight: bold");
    console.log(e.data);
    console.log("%c Data from Parent: Ends", "color: #333; font-size: 20px; font-weight: bold");

    const newTabState = Object.assign({}, e.data);
    this.setState({ tabs: newTabState });
  }

  changeTab(tabName) {
    this.setState({ activeTab: tabName });
  }

  render() {
    const currentStateData = this.state.tabs[this.state.activeTab];
    const allTabsName = Object.keys(this.state.tabs);
    const handleTabChange = this.changeTab.bind(this);
    const activeTab = this.state.activeTab;
    const showTabStrip = allTabsName.length > 1;
    const calendarToggleChange = this.handleCalendarToggleChange.bind(this);
    const calendarNameChange = this.handleCalendarNameChange.bind(this);
    const calendarColorChange = this.handleCalendarColorChange.bind(this);
    const calendarUriChange = this.handleCalendarUriChange.bind(this);
    const calendarEmailChange = this.handleCalendarEmailChange.bind(this);
    const readOnlyChange = this.handleReadOnlyChange.bind(this);
    const suppressAlarmsChange = this.handleSuppressAlarmsChange.bind(this);

    return (
      <div className="wrapper" id="dialog-content-box">
        <div className="tabPanel">
          {showTabStrip &&
            <TabStrip tabs={allTabsName} handleTabChange={handleTabChange} activeTab={activeTab} />}
          <TabPanel
            data={currentStateData}
            calendarColorChange={calendarColorChange}
            calendarNameChange={calendarNameChange}
            calendarToggleChange={calendarToggleChange}
            calendarUriChange={calendarUriChange}
            calendarEmailChange={calendarEmailChange}
            readOnlyChange={readOnlyChange}
            suppressAlarmsChange={suppressAlarmsChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DialogContentBox />, document.getElementById("root"));
