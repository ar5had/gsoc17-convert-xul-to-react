(function() {
  // Just a wrapper, to make component structure similar to XUL equivalent component
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
