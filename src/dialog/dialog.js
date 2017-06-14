const defaultButtons = [
  { name: "disclosure", hidden: true },
  { name: "help", hidden: true },
  { name: "extra2", hidden: true },
  { name: "extra1", hidden: true },
  { name: "cancel", hidden: false },
  { name: "accept", hidden: false }
];

const alignOptions = ["start", "center", "end", "baseline", "stretch"];
const buttondirOptions = ["normal", "reverse"];
const buttonOrientOptions = ["horizontal", "vertical"];
const buttonPackOptions = ["start", "center", "end"];
// this is something different as buttons attribute is string separated by commas having multiple values
// ',' for empty
const buttonOptions = ["accept", "cancel", "help", "disclosure", "extra1", "extra2"];

class Dialog extends React.Component {
  // acceptDialog() {}

  // cancelDialog() {}

  // centerWindowOnScreen() {}

  // getButton() {}

  // moveToAlertPosition() {}

  render() {}
}

Dialog.propTypes = {
  buttonaccesskeyaccept: PropTypes.string,
  buttonaccesskeycancel: PropTypes.string,
  buttonaccesskeydisclosure: PropTypes.string,
  buttonaccesskeyextra1: PropTypes.string,
  buttonaccesskeyextra2: PropTypes.string,
  buttonaccesskeyhelp: PropTypes.string,
  buttonalign: PropTypes.string,
  buttondir: PropTypes.string,
  buttondisabledaccept: PropTypes.bool,
  buttonlabelaccept: PropTypes.string,
  buttonlabelcancel: PropTypes.string,
  buttonlabeldisclosure: PropTypes.string,
  buttonlabelextra1: PropTypes.string,
  buttonlabelextra2: PropTypes.string,
  buttonlabelhelp: PropTypes.string,
  buttonorient: PropTypes.string,
  buttonpack: PropTypes.string,
  buttons: PropTypes.string,
  defaultButton: PropTypes.string,
  ondialogaccept: PropTypes.func,
  ondialogcancel: PropTypes.func,
  ondialogdisclosure: PropTypes.func,
  ondialogextra1: PropTypes.func,
  ondialogextra2: PropTypes.func,
  ondialoghelp: PropTypes.func,
  title: PropTypes.string,
  activetitlebarcolor: PropTypes.string,
  inactivetitlebarcolor: PropTypes.string
};

Dialog.defaultProps = {
  buttonaccesskeyaccept: null,
  buttonaccesskeycancel: null,
  buttonaccesskeydisclosure: null,
  buttonaccesskeyextra1: null,
  buttonaccesskeyextra2: null,
  buttonaccesskeyhelp: null,
  buttonalign: "right",
  buttondir: "normal",
  buttondisabledaccept: "false",
  buttonlabelaccept: "Accept",
  buttonlabelcancel: "Cancel",
  buttonlabeldisclosure: "Disclosure",
  buttonlabelextra1: "extra1",
  buttonlabelextra2: "extra2",
  buttonlabelhelp: "Help",
  buttonorient: "horizontal",
  buttonpack: "end",
  buttons: "accept, cancel",
  defaultButton: "accept",
  ondialogaccept: () => true,
  ondialogcancel: () => true,
  ondialogdisclosure: () => true,
  ondialogextra1: () => true,
  ondialogextra2: () => true,
  ondialoghelp: () => true,
  title: "New Dialog",
  activetitlebarcolor: null,
  inactivetitlebarcolor: null
};

ReactDOM.render(<Dialog />, document.getElementById("root"));
