(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

  const OtherInfo = ({ state, actions }) => {
    const {} = state;
    const {} = actions;
    // <TabStrip tabs={allTabsName} handleTabChange={handleTabChange} activeTab={activeTab} />

    return React.createElement(
      "div",
      { id: "other-info-wrapper" },
      React.createElement(
        TabBox,
        null,
        React.createElement(TabStrip, { tabs: ["Description", "Attachment", "Attendees"] })
      )
    );
  };

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
