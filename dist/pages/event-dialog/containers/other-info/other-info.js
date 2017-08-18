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
      const {
        description,
        notifyAttendees,
        separateInvitationPerAttendee,
        disallowCounter
      } = this.props.state;
      const {
        changeDescription,
        toggleNotifyAttendees,
        toggleSeparateInvitation,
        toggleDisallowCounter
      } = this.props.actions;

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
        case "attendees": {
          return React.createElement(
            "div",
            { id: "event-grid-tabpanel-attendees", className: "event-grid-tabpanel" },
            React.createElement(
              "div",
              { id: "item-organiser-row", className: "item-attendees-row collapsed" },
              React.createElement("label", null, "Organizer:"),
              React.createElement("div", { className: "itip-icon" })
            ),
            React.createElement("div", { id: "item-attendees-box", className: "listbox" }),
            React.createElement(
              "div",
              { id: "notify-options", className: "row" },
              React.createElement("input", {
                type: "checkbox",
                id: "notify-attendees-checkbox",
                accessKey: "f",
                className: "checkbox",
                checked: notifyAttendees,
                onChange: toggleNotifyAttendees
              }),
              React.createElement("label", {
                htmlFor: "notify-attendees-checkbox",
                className: "row-label",
                dangerouslySetInnerHTML: { __html: underlineAccessKey("Notify attendees", "f") }
              }),
              React.createElement("input", {
                type: "checkbox",
                id: "undisclose-attendees-checkbox",
                accessKey: "X",
                className: "checkbox",
                checked: separateInvitationPerAttendee,
                onChange: toggleSeparateInvitation
              }),
              React.createElement("label", {
                htmlFor: "undisclose-attendees-checkbox",
                className: "row-label",
                dangerouslySetInnerHTML: {
                  __html: underlineAccessKey("Separate invitation per attendee", "X")
                }
              }),
              React.createElement("input", {
                type: "checkbox",
                id: "disallow-counter-checkbox",
                accessKey: "a",
                className: "checkbox",
                checked: disallowCounter,
                onChange: toggleDisallowCounter
              }),
              React.createElement("label", {
                htmlFor: "disallow-counter-checkbox",
                className: "row-label",
                dangerouslySetInnerHTML: {
                  __html: underlineAccessKey("Disallow counter", "a")
                }
              })
            )
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
