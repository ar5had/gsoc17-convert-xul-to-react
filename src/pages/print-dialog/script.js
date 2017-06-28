class PrintDialog extends React.Component {
  constructor() {
    super();
    this.state = {};

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
    if (
      e.origin !== window.location.origin ||
      !e.data ||
      e.data.source !== "dialog-message"
    ) {
      console.log(`Blocked message event from ${e.origin} with data -`, e.data);
      return;
    }

    this.postMessage(
      { messageRecieved: true, source: "dialog-message" },
      `${window.location.origin}/iframe-testing-ground`
    );

    console.log(
      "%c Data from Parent: Starts",
      "color: #333; font-size: 20px; font-weight: bold"
    );
    console.log(e.data);
    console.log(
      "%c Data from Parent: Ends",
      "color: #333; font-size: 20px; font-weight: bold"
    );

    const newTabState = Object.assign({}, e.data);
    this.setState({ tabs: newTabState });
  }

  acceptDialog() {
    const stateData = JSON.parse(JSON.stringify(this.state.tabs));
    stateData.source = "dialog-message";
    stateData.action = "ACCEPT";
    this.postMessage(stateData, `${window.location.origin}`);
  }

  cancelDialog() {
    const message = { source: "dialog-message", action: "CANCEL" };
    this.postMessage(message, `${window.location.origin}`);
  }

  render() {
    const acceptDialog = this.acceptDialog.bind(this);
    const cancelDialog = this.cancelDialog.bind(this);

    return (
      <Dialog
        ondialogaccept={acceptDialog}
        ondialogcancel={cancelDialog}
        buttonlabelaccept="Print"
        buttonaccesskeyaccept="P"
      >
        <div className="vgrid">
          <PrintDialogGroupBox />
          <div className="splitter" />
          <iframe src="about:blank" frameBorder="0" id="content" />
        </div>
      </Dialog>
    );
  }
}

ReactDOM.render(<PrintDialog />, document.getElementById("root"));
