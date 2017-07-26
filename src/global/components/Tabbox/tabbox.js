(function() {
  const TabBox = ({ children }) => {
    return (
      <div className="tabbox">
        {children}
      </div>
    );
  };

  TabBox.propTypes = {
    children: PropTypes.node.isRequired
  };

  window.TabBox = TabBox;
})();
