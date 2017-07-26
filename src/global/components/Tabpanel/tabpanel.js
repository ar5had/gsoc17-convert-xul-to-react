(function() {
  const TabPanel = ({ children }) => {
    return (
      <div className="tabpanel">
        {children}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node
  };

  window.TabPanel = TabPanel;
})();
