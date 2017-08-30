/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class Tab extends React.Component {
    componentDidMount() {
      // if tab is active, then visually select the tab
      if (this.props.active) {
        this.selectTabVisually(this.tab);
      }
    }

    componentWillReceiveProps(nextProps) {
      // First removing all the attributes, because html supports attribute minimization so changing
      // attribute value to falsy value is not enough. Removing them is necessary.
      this.deselectTabVisually(this.tab);
      if (nextProps.active) {
        this.selectTabVisually(this.tab);
      }
    }

    // Add selected and visuallySelected attributes to node.
    selectTabVisually(node) {
      node.setAttribute("visuallyselected", "true");
      node.setAttribute("selected", "true");
    }

    // Remove selected and visuallySelected attributes to node.
    deselectTabVisually(node) {
      node.removeAttribute("visuallyselected");
      node.removeAttribute("selected");
    }

    handleTabClick() {
      const { handleTabChange, tabId } = this.props;
      handleTabChange(tabId);
    }

    render() {
      const { tabName, active, tabId, accessKey } = this.props;
      const handleTabClick = this.handleTabClick.bind(this);

      return React.createElement("div", {
        onClick: handleTabClick,
        className: `tab ${active ? "selected" : ""}`,
        id: `${tabId}-tab`,
        key: tabName,
        ref: node => (this.tab = node),
        dangerouslySetInnerHTML: { __html: underlineAccessKey(tabName, accessKey) }
      });
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
