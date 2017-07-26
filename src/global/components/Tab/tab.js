(function() {
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

    handleTabClick() {
      const { handleTabChange, tabId } = this.props;
      handleTabChange(tabId);
    }

    render() {
      const { tabName, active, accessKey } = this.props;
      const handleTabClick = this.handleTabClick.bind(this);

      return (
        <div
          onClick={handleTabClick}
          className={`tab ${active ? "selected" : ""}`}
          id={`${tabName}tab`}
          key={tabName}
          ref={node => (this.tab = node)}
          dangerouslySetInnerHTML={{ __html: underlineAccessKey(tabName, accessKey) }}
        />
      );
    }
  }

  Tab.propTypes = {
    handleTabChange: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    tabName: PropTypes.string.isRequired,
    tabId: PropTypes.string.isRequired,
    accessKey: PropTypes.string
  };

  Tab.defaultProps = {
    accessKey: ""
  };

  window.Tab = Tab;
})();
