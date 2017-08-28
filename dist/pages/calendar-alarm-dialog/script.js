class CalendarAlarmDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      widgetData: [1, 2]
    };

    // this.recieveMessage.bind(this) gives new reference every time
    // so declaring instance variable so that event can be removed
    // in componentWillUnmount lifecycle
    this.recieveMessage = this.recieveMessage.bind(this);
  }

  componentWillMount() {
    window.addEventListener("message", this.recieveMessage);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.recieveMessage);
  }

  postMessage(msg, origin) {
    // parent and window are same thing if the current page is not in any frame
    if (window !== parent) {
      parent.postMessage(msg, origin);
    }
  }

  recieveMessage(e) {
    // extentions talk via postMeessage api(same orgin)
    // so it is very important to filter those events
    if (e.origin !== window.location.origin || !e.data || e.data.source !== "dialog-message") {
      return;
    }

    this.postMessage(
      { messageRecieved: true, source: "dialog-message" },
      `${window.location.origin}/iframe-testing-ground`
    );

    console.log("%c Data from Parent: Starts", "color: #333; font-size: 20px; font-weight: bold");
    console.log(e.data);
    console.log("%c Data from Parent: Ends", "color: #333; font-size: 20px; font-weight: bold");

    const newTabState = Object.assign({}, e.data);
    this.setState({ tabs: newTabState });
  }

  snoozeAll() {
    const stateData = JSON.parse(JSON.stringify(this.state.tabs));
    stateData.source = "dialog-message";
    stateData.action = "SNOOZE_ALL";
    this.postMessage(stateData, `${window.location.origin}`);
  }

  dismissAll() {
    const message = { source: "dialog-message", action: "DISMISS_ALL" };
    this.postMessage(message, `${window.location.origin}`);
  }

  render() {
    const snoozeAll = this.snoozeAll.bind(this);
    const dismissAll = this.dismissAll.bind(this);

    return React.createElement(
      "div",
      { id: "alarm-dialog-content-box", className: "wrapper window" },
      React.createElement(RichListBox, {
        cssClasses: "alarm-dialog-richlistbox",
        widgetData: this.state.widgetData
      }),
      React.createElement(AlarmDialogButtonBox, {
        cssClasses: "alarm-dialog-buttonbox",
        snoozeAll: snoozeAll,
        dismissAll: dismissAll
      })
    );
  }
}

ReactDOM.render(React.createElement(CalendarAlarmDialog, null), document.getElementById("root"));
