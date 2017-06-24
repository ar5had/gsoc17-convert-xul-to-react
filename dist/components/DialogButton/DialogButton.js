class DialogButton extends React.Component {
  componentDidMount() {
    this.addAttributes();
  }

  componentWillReceiveProps(nextProps) {
    this.addAttributes();
  }

  addAttributes() {
    this.button.setAttribute("dlgtype", this.props.dlgtype);
    this.button.setAttribute("icon", this.props.dlgtype);
  }

  render() {
    const { html, className, onClick, accessKey } = this.props;
    return React.createElement("button", {
      ref: node => (this.button = node),
      dangerouslySetInnerHTML: {
        __html: html
      },
      onClick: onClick,
      accessKey: accessKey,
      className: className
    });
  }
}

DialogButton.propTypes = {
  dlgtype: PropTypes.string,
  accessKey: PropTypes.string,
  className: PropTypes.string,
  html: PropTypes.string,
  onClick: PropTypes.func
};

window.DialogButton = DialogButton;
