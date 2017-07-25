(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  class OtherInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: "Description"
      };
    }

    changeTab(tabName) {
      this.setState({ activeTab: tabName });
    }

    render() {
      const handleTabChange = this.changeTab.bind(this);

      const {} = this.props.state;
      const {} = this.props.actions;
      // <TabStrip tabs={allTabsName} handleTabChange={handleTabChange} activeTab={activeTab} />

      return (
        <div id="other-info-wrapper">
          <TabBox>
            <TabStrip
              tabs={["Description", "Attachment", "Attendees"]}
              activeTab={this.state.activeTab}
              handleTabChange={handleTabChange}
            />
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
