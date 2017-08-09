(function() {
  // Just a wrapper
  const TabPanel = ({ children }) => {
    return React.createElement("div", { className: "tabpanel" }, children);
  };

  TabPanel.propTypes = {
    children: PropTypes.node
  };

  window.TabPanel = TabPanel;
})();
