class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.buttonOptions = ["accept", "cancel", "help", "disclosure", "extra1", "extra2"];
    this.alignOptions = ["start", "center", "end", "baseline", "stretch"];
    this.buttondirOptions = ["normal", "reverse"];
    this.buttonOrientOptions = ["horizontal", "vertical"];
    this.buttonPackOptions = ["start", "center", "end"];
    this.addKeyListeners = this.addKeyListeners.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.addKeyListeners);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.addKeyListeners);
  }

  callDefaultButtonHandler(defaultButton) {
    switch (defaultButton) {
      case "accept":
        this.acceptDialog();
        break;
      case "cancel":
        this.cancelDialog();
        break;
      case "disclosure":
        this.props.ondialogdisclosure();
        break;
      case "help":
        this.props.ondialoghelp();
        break;
      case "extra1":
        this.props.ondialogextra1();
        break;
      case "extra2":
        this.props.ondialogextra2();
        break;
    }
  }

  addKeyListeners(e) {
    switch (e.keyCode) {
      case 13:
        if (document.activeElement === document.querySelector("body")) {
          this.callDefaultButtonHandler(this.props.defaultButton);
        }
        break;
      case 27:
        this.cancelDialog();
        break;
    }
  }

  // centerWindowOnScreen and moveToAlertPosition
  // can't be implmented without any parent xul wrapper help

  acceptDialog() {
    console.log("acceptDialog");
    this.props.ondialogaccept();
  }

  cancelDialog() {
    console.log("cancelDialog");
    this.props.ondialogcancel();
  }

  getButton() {
    console.log("getButton");
  }

  assignClickHandler(btn) {
    switch (btn) {
      case "accept":
        return this.acceptDialog.bind(this);
      case "cancel":
        return this.cancelDialog.bind(this);
      case "disclosure":
        return this.props.ondialogdisclosure.bind(this);
      case "help":
        return this.props.ondialoghelp.bind(this);
      case "extra1":
        return this.props.ondialogextra1.bind(this);
      case "extra2":
        return this.props.ondialogextra2.bind(this);
      default:
        return null;
    }
  }

  getAllButtons() {
    const props = this.props;
    const buttonsList = this.props.buttons
      .split(",")
      .map(btn => btn.trim())
      .filter(btn => this.buttonOptions.includes(btn));

    return buttonsList
      .map((btn, i) =>
        React.createElement(DialogButton, {
          className: `${btn}-btn dialog-button`,
          key: i,
          accessKey: props[`buttonaccesskey${btn}`],
          dlgtype: btn,
          onClick: this.assignClickHandler(btn),
          html: underlineAccessKey(props[`buttonlabel${btn}`], props[`buttonaccesskey${btn}`])
        })
      )
      .concat([React.createElement("div", { className: "dialog-button-spacer", key: "spacer" })]);
  }

  render() {
    return React.createElement(
      "div",
      { className: "dialog" },
      React.createElement("div", { className: "dialog-button-box" }, this.getAllButtons())
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Dialog.propTypes = {
  buttonaccesskeyaccept: PropTypes.string,
  buttonaccesskeycancel: PropTypes.string,
  buttonaccesskeydisclosure: PropTypes.string,
  buttonaccesskeyextra1: PropTypes.string,
  buttonaccesskeyextra2: PropTypes.string,
  buttonaccesskeyhelp: PropTypes.string,
  // buttonalign: PropTypes.string,
  // buttondir: PropTypes.string,
  buttondisabledaccept: PropTypes.bool,
  buttonlabelaccept: PropTypes.string,
  buttonlabelcancel: PropTypes.string,
  buttonlabeldisclosure: PropTypes.string,
  buttonlabelextra1: PropTypes.string,
  buttonlabelextra2: PropTypes.string,
  buttonlabelhelp: PropTypes.string,
  // buttonorient: PropTypes.string,
  // buttonpack: PropTypes.string,
  buttons: PropTypes.string,
  defaultButton: PropTypes.string,
  ondialogaccept: PropTypes.func,
  ondialogcancel: PropTypes.func,
  ondialogdisclosure: PropTypes.func,
  ondialogextra1: PropTypes.func,
  ondialogextra2: PropTypes.func,
  ondialoghelp: PropTypes.func
  // title: PropTypes.string,
  // activetitlebarcolor: PropTypes.string,
  // inactivetitlebarcolor: PropTypes.string
};

Dialog.defaultProps = {
  // buttonalign: "right",
  // buttondir: "normal",
  // buttonorient: "horizontal",
  // buttonpack: "end",
  buttondisabledaccept: false,
  buttonaccesskeyaccept: null,
  buttonaccesskeycancel: null,
  buttonaccesskeydisclosure: "I",
  buttonaccesskeyextra1: null,
  buttonaccesskeyextra2: null,
  buttonaccesskeyhelp: "H",
  buttonlabelaccept: "Ok",
  buttonlabelcancel: "Cancel",
  buttonlabeldisclosure: "More Info",
  buttonlabelextra1: "&nbsp;",
  buttonlabelextra2: "&nbsp;",
  buttonlabelhelp: "Help",
  buttons: "accept, cancel",
  defaultButton: "accept",
  ondialogaccept: () => true,
  ondialogcancel: () => true,
  ondialogdisclosure: () => true,
  ondialogextra1: () => true,
  ondialogextra2: () => true,
  ondialoghelp: () => true
  // title: "New Dialog",
  // activetitlebarcolor: null,
  // inactivetitlebarcolor: null
};

ReactDOM.render(
  React.createElement(Dialog, {
    buttons: "accept,cancel, extra1,extra2,help, disclosure, soemramd",
    ondialogdisclosure: () => console.log("disclosure"),
    ondialoghelp: () => console.log("help"),
    ondialogextra1: () => console.log("Extra1"),
    ondialogextra2: () => console.log("Extra2"),
    ondialogcancel: () => console.log("props:cancel"),
    ondialogaccept: () => console.log("props:accept"),
    buttonaccesskeyextra1: "F",
    buttonaccesskeyextra2: "S",
    buttonaccesskeyaccept: "O",
    buttonaccesskeycancel: "C",
    buttonlabelextra1: "Fancy",
    buttonlabelextra2: "Super Fancy",
    defaultButton: "extra1"
  }),
  document.getElementById("root")
);
