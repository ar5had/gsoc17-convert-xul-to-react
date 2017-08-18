(function() {
  // TabStrip component which acts as a wrapper for all the tabs.
  // handleTabChange props is called whenever a tab is clicked.
  // activeTab is the id of tab which has selected attribute by default.
  const TabStrip = ({ tabs, handleTabChange, activeTab }) => {
    const tabStripContent = tabs.map(tab =>
      <Tab
        active={tab.id === activeTab}
        tabName={tab.text}
        accessKey={tab.accessKey}
        key={tab.id}
        tabId={tab.id}
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
})();
