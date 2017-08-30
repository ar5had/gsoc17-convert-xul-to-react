/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
          return (
            <div className="event-grid-tabpanel" id="event-grid-tabpanel-description">
              <textarea
                id="item-description"
                className="textarea"
                onChange={changeDescription}
                value={description}
              />
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
        default:
          return "";
      }
    }

    render() {
      const handleTabChange = this.changeTab.bind(this);
      const activeTabPanelContent = this.getActiveTabPanelContent();

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
