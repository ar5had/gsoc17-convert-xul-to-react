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
        },
        {
          text: "Attendees:",
          accessKey: "n",
          id: "attendees"
        }
      ];
    }

    getActiveTabPanelContent() {
      const disabled = true;
      switch (this.state.activeTab) {
        case "description": {
          return (
            <div className="event-grid-tabpanel" id="event-grid-tabpanel-description">
              <textarea id="item-description" className="textarea" />
            </div>
          );
        }
        case "attachment": {
          return (
            <div id="event-grid-tabpanel-attachment" className="event-grid-tabpanel">
              <div id="attachment-link" className="listbox" />
            </div>
          );
        }
        case "attendees": {
          return (
            <div id="event-grid-tabpanel-attendees" className="event-grid-tabpanel">
              <div id="item-attendees-box" className="listbox" />
              <div id="notify-options" className="row">
                <input
                  type="checkbox"
                  id="notify-attendees-checkbox"
                  accessKey="f"
                  disabled="true"
                  className="checkbox disabled"
                />
                <label
                  htmlFor="notify-attendees-checkbox"
                  className={`row-label ${disabled ? "disabled" : ""}`}
                  dangerouslySetInnerHTML={{ __html: underlineAccessKey("Notify attendees", "f") }}
                />
                <input
                  type="checkbox"
                  id="undisclose-attendees-checkbox"
                  accessKey="X"
                  disabled="true"
                  className="checkbox disabled"
                />
                <label
                  htmlFor="undisclose-attendees-checkbox"
                  className={`row-label ${disabled ? "disabled" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: underlineAccessKey("Separate invitation per attendee", "X")
                  }}
                />
                <input
                  type="checkbox"
                  id="disallow-counter-checkbox"
                  accessKey="a"
                  disabled="false"
                  className="checkbox"
                />
                <label
                  htmlFor="undisclose-attendees-checkbox"
                  className={`row-label ${disabled ? "disabled" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: underlineAccessKey("Disallow counter", "a")
                  }}
                />
              </div>
            </div>
          );
        }
        default:
          return "";
      }
    }

    render() {
      const handleTabChange = this.changeTab.bind(this);
      const activeTabPanelContent = this.getActiveTabPanelContent();

      const {} = this.props.state;
      const {} = this.props.actions;
      // <TabStrip tabs={allTabsName} handleTabChange={handleTabChange} activeTab={activeTab} />

      return (
        <div id="other-info-wrapper">
          <TabBox>
            <TabStrip
              tabs={this.getTabList()}
              activeTab={this.state.activeTab}
              handleTabChange={handleTabChange}
            />
            <TabPanel>
              {activeTabPanelContent}
            </TabPanel>
          </TabBox>
        </div>
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
