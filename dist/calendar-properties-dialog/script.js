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
      console.log(`Blocked message event from ${e.origin} with data -`, e.data);
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

    return React.createElement(
      "div",
      { className: "wrapper", id: "dialog-content-box" },
      React.createElement(
        "div",
        { className: "tabPanel" },
        showTabStrip &&
          React.createElement(TabStrip, {
            tabs: allTabsName,
            handleTabChange: handleTabChange,
            activeTab: activeTab
          }),
        React.createElement(TabPanel, {
          data: currentStateData,
          calendarColorChange: calendarColorChange,
          calendarNameChange: calendarNameChange,
          calendarToggleChange: calendarToggleChange,
          calendarUriChange: calendarUriChange,
          calendarEmailChange: calendarEmailChange,
          readOnlyChange: readOnlyChange,
          suppressAlarmsChange: suppressAlarmsChange
        })
      )
    );
  }
}

ReactDOM.render(React.createElement(DialogContentBox, null), document.getElementById("root"));
