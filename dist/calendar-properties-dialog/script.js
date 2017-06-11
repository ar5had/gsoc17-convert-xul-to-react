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
          emails: ["NONE", "AnotherNONE"],
          selectedEmailIndex: 1,
          readOnly: false,
          showReminders: true
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
      parent.postMessage(JSON.stringify(this.state.tabs), `${window.location.origin}/iframe-testing-ground`);
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
    const options = arr.map((e, i) => React.createElement(
      "option",
      {
        value: i,
        key: i
      },
      e
    ));

    return options;
  }

  handleCalendarSwitchChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.calendarSwitch = !tabsState.general.calendarSwitch;
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
    const generalTab = Object.assign({}, this.state.tabs.general, { selectedEmailIndex: event.currentTarget.selectedIndex });

    const tabsState = Object.assign({}, this.state.tabs, { general: generalTab });

    this.setState({ tabs: tabsState });
  }

  handleReadOnlyChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
    tabsState.general.readOnly = !tabsState.general.readOnly;
    this.setState({ tabs: tabsState });
  }

  handleSuppressAlarmsChange(event) {
    const tabsState = Object.assign({}, this.state.tabs);
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

    const emailOptions = this.getSelectOptions(emails);

    const handleCalendarSwitch = this.handleCalendarSwitchChange.bind(this);

    const handleCalendarName = this.handleCalendarNameChange.bind(this);

    const handleCalendarColor = this.handleCalendarColorChange.bind(this);

    const handleCalendarUri = this.handleCalendarUriChange.bind(this);

    const handleCalendarEmail = this.handleCalendarEmailChange.bind(this);

    const handleReadOnly = this.handleReadOnlyChange.bind(this);

    const handleSuppressAlarms = this.handleSuppressAlarmsChange.bind(this);

    return React.createElement(
      "div",
      { className: "tabContentWrapper" },
      React.createElement(
        "div",
        {
          id: "calendar-enabler-container",
          className: "row"
        },
        React.createElement("input", {
          type: "checkbox",
          className: "checkbox",
          id: "calendar-enabled-checkbox",
          value: "calendarSwitch",
          checked: calendarSwitch,
          onChange: handleCalendarSwitch
        }),
        React.createElement(
          "label",
          { htmlFor: "calendar-enabled-checkbox" },
          "Switch this calendar on"
        )
      ),
      React.createElement(
        "div",
        {
          id: "calendar-properties-grid",
          className: calendarSwitch ? "grid" : "grid disabled"
        },
        React.createElement(
          "div",
          {
            id: "calendar-name-row",
            className: "row"
          },
          React.createElement(
            "label",
            { htmlFor: "calendar-name", className: "row-label" },
            "Calendar Name:"
          ),
          React.createElement("input", {
            type: "text",
            id: "calendar-name",
            className: "row-input",
            value: name,
            onChange: handleCalendarName,
            disabled: !calendarSwitch
          })
        ),
        React.createElement(
          "div",
          {
            id: "calendar-color-row",
            className: "row"
          },
          React.createElement(
            "label",
            { htmlFor: "calendar-color", className: "row-label" },
            "Color:"
          ),
          React.createElement("input", {
            type: "color",
            id: "calendar-color",
            className: "row-input",
            value: color,
            onChange: handleCalendarColor,
            disabled: !calendarSwitch
          })
        ),
        React.createElement(
          "div",
          {
            id: "calendar-uri-row",
            className: "row"
          },
          React.createElement(
            "label",
            { htmlFor: "calendar-uri", className: "row-label" },
            "Location:"
          ),
          React.createElement("input", {
            type: "text",
            id: "calendar-uri",
            className: "row-input",
            value: location,
            onChange: handleCalendarUri,
            disabled: !calendarSwitch
          })
        ),
        React.createElement(
          "div",
          { id: "calendar-email-identity-row", className: "row" },
          React.createElement(
            "label",
            { htmlFor: "email-identity-menulist", className: "row-label" },
            "E-Mail:"
          ),
          React.createElement(
            "select",
            {
              type: "text",
              id: "email-identity-menulist",
              className: "row-input hidden",
              disabled: !calendarSwitch,
              onChange: handleCalendarEmail,
              value: selectedEmailIndex
            },
            emailOptions
          )
        ),
        React.createElement(
          "div",
          { id: "calendar-readOnly-row", className: "row" },
          React.createElement(
            "div",
            null,
            React.createElement("input", {
              type: "checkbox",
              className: "checkbox",
              id: "readOnly",
              checked: readOnly,
              onChange: handleReadOnly,
              disabled: !calendarSwitch
            }),
            React.createElement(
              "label",
              { htmlFor: "readOnly" },
              "Read Only"
            )
          )
        ),
        React.createElement(
          "div",
          { id: "calendar-suppressAlarms-row", className: "row" },
          React.createElement(
            "div",
            null,
            React.createElement("input", {
              type: "checkbox",
              className: "checkbox",
              id: "fire-alarms",
              checked: showReminders,
              onChange: handleSuppressAlarms,
              disabled: !calendarSwitch
            }),
            React.createElement(
              "label",
              { htmlFor: "fire-alarms" },
              "Show Reminders"
            )
          )
        )
      )
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

    parent.postMessage(JSON.stringify({ dialogReady: true }), `${window.location.origin}/iframe-testing-ground`);

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
    const tabs = Object.keys(this.state.tabs).map(tabName => React.createElement(
      "div",
      {
        onClick: event => {
          const tabNodes = document.querySelectorAll(".tab");

          Array.prototype.forEach.call(tabNodes, tab => {
            this.deselectTabVisually(tab);
          });

          this.selectTabVisually(event.target);
          this.changeTab(tabName);
        },
        className: `tab ${activeTab === tabName ? "selected" : ""}`,
        selected: activeTab === tabName,
        id: `${tabName}tab`,
        key: tabName
      },
      tabName
    ));

    if (tabs.length > 1) {
      return React.createElement(
        "div",
        { className: "tabStrip" },
        tabs
      );
    } else {
      return "";
    }
  }

  render() {
    const Tab = this.getTab(this.state.activeTab);
    const TabStrip = this.getTabStrip(this.state.activeTab);
    return React.createElement(
      "div",
      { className: "wrapper", id: "dialog-content-box" },
      React.createElement(
        "div",
        { className: "tabWrapper" },
        TabStrip,
        Tab
      )
    );
  }
}

ReactDOM.render(React.createElement(Wrapper, null), document.getElementById("root"));
