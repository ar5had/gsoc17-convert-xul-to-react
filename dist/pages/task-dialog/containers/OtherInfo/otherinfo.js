(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  class OtherInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: "description"
      };
    }

    changeTab(tabId) {
      this.setState({ activeTab: tabId });
    }

    getTabList() {
      return [
        {
          text: "Description:",
          accessKey: "p",
          id: "description"
        },
        {
          text: "Attachment:",
          accessKey: "h",
          id: "attachment"
        }
      ];
    }

    getActiveTabPanelContent() {
      const { description } = this.props.state;
      const { changeDescription } = this.props.actions;

      switch (this.state.activeTab) {
        case "description": {
          return React.createElement(
            "div",
            { className: "event-grid-tabpanel", id: "event-grid-tabpanel-description" },
            React.createElement("textarea", {
              id: "item-description",
              className: "textarea",
              onChange: changeDescription,
              value: description
            })
          );
        }
        case "attachment": {
          return React.createElement(
            "div",
            { id: "event-grid-tabpanel-attachment", className: "event-grid-tabpanel" },
            React.createElement("div", { id: "attachment-link", className: "listbox" })
          );
        }
        default:
          return "";
      }
    }

    render() {
      const handleTabChange = this.changeTab.bind(this);
      const activeTabPanelContent = this.getActiveTabPanelContent();

      return React.createElement(
        "div",
        { id: "other-info-wrapper" },
        React.createElement(
          TabBox,
          null,
          React.createElement(TabStrip, {
            tabs: this.getTabList(),
            activeTab: this.state.activeTab,
            handleTabChange: handleTabChange
          }),
          React.createElement(TabPanel, null, activeTabPanelContent)
        )
      );
    }
  }

  OtherInfo.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ otherInfo }) => ({ state: otherInfo });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(window.__other_info_actions__, dispatch)
  });

  window.OtherInfo = connect(mapStateToProps, mapDispatchToProps)(OtherInfo);
})();
