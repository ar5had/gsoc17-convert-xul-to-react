(function() {
  // Just a wrapper, to make component structure similar to XUL equivalent component
  const TabBox = ({ children }) => {
    return React.createElement("div", { className: "tabbox" }, children);
  };

  TabBox.propTypes = {
    children: PropTypes.node.isRequired
  };

  window.TabBox = TabBox;
})();
