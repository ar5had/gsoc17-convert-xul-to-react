const TabBox = ({ children }) => {
  return React.createElement("div", { className: "tabBox" }, children);
};

TabBox.propTypes = {
  children: PropTypes.array.isRequired
};

window.TabBox = TabBox;
