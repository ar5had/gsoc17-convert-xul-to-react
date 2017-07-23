(function() {
  const TabBox = ({ children }) => {
    return React.createElement("div", { className: "tabbox" }, children);
  };

  TabBox.propTypes = {
    children: PropTypes.array.isRequired
  };

  window.TabBox = TabBox;
})();
