const TabStrip = ({ tabs, handleTabChange, activeTab }) => {
  const tabStripContent = tabs.map(tabName =>
    <Tab
      active={tabName === activeTab}
      tabName={tabName}
      key={tabName}
      handleTabChange={handleTabChange}
    />
  );

  return (
    <div className="tabstrip">
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
