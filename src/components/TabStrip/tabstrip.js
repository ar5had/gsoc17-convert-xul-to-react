const TabStrip = ({ tabs, handleTabChange, activeTab }) => {
  const getTabStripContent = () => {
    const allTabs = tabs.map(tabName =>
      <Tab
        active={tabName === activeTab}
        tabName={tabName}
        key={tabName}
        handleTabChange={handleTabChange}
      />
    );
    return allTabs;
  };

  const tabStripContent = getTabStripContent();

  return (
    <div className="tabStrip">
      {tabStripContent}
    </div>
  );
};

TabStrip.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired
};

window.TabStrip = TabStrip;
