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
    return React.createElement(
      "div",
      {
        onClick: handleTabClick,
        className: `tab ${active ? "selected" : ""}`,
        id: `${tabName}tab`,
        key: tabName,
        ref: node => (this.tab = node)
      },
      tabName
    );
  }
}

Tab.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  tabName: PropTypes.string.isRequired
};
