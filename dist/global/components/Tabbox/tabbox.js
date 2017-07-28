(function () {
  const TabBox = ({ children }) => {
    return React.createElement(
      "div",
      { className: "tabbox" },
      children
    );
  };

  TabBox.propTypes = {
    children: PropTypes.node.isRequired
  };

  window.TabBox = TabBox;
})();