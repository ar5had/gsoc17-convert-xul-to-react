const TabStrip = ({ tabs, handleTabChange, activeTab }) => {
  const tabStripContent = tabs.map(tabName =>
    React.createElement(Tab, {
      active: tabName === activeTab,
      tabName: tabName,
      key: tabName,
      handleTabChange: handleTabChange
    })
  );

  return React.createElement("div", { className: "tabStrip" }, tabStripContent);
};

TabStrip.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired
};

window.TabStrip = TabStrip;
