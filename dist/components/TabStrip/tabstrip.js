const TabStrip = ({ tabs, handleTabChange, activeTab }) => {
  const getTabStripContent = () => {
    const allTabs = tabs.map(tabName =>
      React.createElement(Tab, {
        active: tabName === activeTab,
        tabName: tabName,
        key: tabName,
        handleTabChange: handleTabChange
      })
    );
    return allTabs;
  };

  const tabStripContent = getTabStripContent();

  return React.createElement("div", { className: "tabStrip" }, tabStripContent);
};

TabStrip.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired
};

window.TabStrip = TabStrip;
