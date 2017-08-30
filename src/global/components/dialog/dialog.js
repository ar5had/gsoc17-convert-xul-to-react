/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class Dialog extends React.Component {
    constructor(props) {
      super(props);
      this.buttonOptions = ["accept", "cancel", "help", "disclosure", "extra1", "extra2"];
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
          this.props.ondialogaccept();
          break;
        case "cancel":
          this.props.ondialogcancel();
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

    assignClickHandler(btn) {
      switch (btn) {
        case "accept":
          return this.props.ondialogaccept.bind(this);
        case "cancel":
          return this.props.ondialogcancel.bind(this);
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

    // Getting all the dialogs buttons by parsing the buttons prop
    getAllButtons() {
      const props = this.props;
      const buttonsList = props.buttons
        .split(",")
        // remove extra whitespace
        .map(btn => btn.trim())
        // filter only valid buttons
        .filter(btn => this.buttonOptions.includes(btn));

      return (
        buttonsList
          .map((btn, i) =>
            <DialogButton
              className={`${btn}-btn dialog-button`}
              key={i}
              isDefaultButton={this.props.defaultButton.toLowerCase() === btn}
              accessKey={props[`buttonaccesskey${btn}`]}
              dlgtype={btn}
              onClick={this.assignClickHandler(btn)}
              html={underlineAccessKey(props[`buttonlabel${btn}`], props[`buttonaccesskey${btn}`])}
            />
          )
          // adding a spacer, which helps in maintaining the dialog button layout of dialog
          .concat([<div className="dialog-button-spacer" key="spacer" />])
      );
    }

    render() {
      return (
        <div className="dialog">
          <div className="wrapper" id="dialog-content-box">
            {this.props.children}
          </div>
          <div className="dialog-button-box">
            {this.getAllButtons()}
          </div>
        </div>
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
    buttondisabledaccept: PropTypes.bool,
    buttonlabelaccept: PropTypes.string,
    buttonlabelcancel: PropTypes.string,
    buttonlabeldisclosure: PropTypes.string,
    buttonlabelextra1: PropTypes.string,
    buttonlabelextra2: PropTypes.string,
    buttonlabelhelp: PropTypes.string,
    buttons: PropTypes.string,
    defaultButton: PropTypes.string,
    ondialogaccept: PropTypes.func,
    ondialogcancel: PropTypes.func,
    ondialogdisclosure: PropTypes.func,
    ondialogextra1: PropTypes.func,
    ondialogextra2: PropTypes.func,
    ondialoghelp: PropTypes.func,
    children: PropTypes.element
  };

  Dialog.defaultProps = {
    buttondisabledaccept: false,
    buttonaccesskeyaccept: null,
    buttonaccesskeycancel: null,
    buttonaccesskeydisclosure: "I",
    buttonaccesskeyextra1: null,
    buttonaccesskeyextra2: null,
    buttonaccesskeyhelp: "H",
    buttonlabelaccept: "OK",
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
  };

  window.Dialog = Dialog;
})();
