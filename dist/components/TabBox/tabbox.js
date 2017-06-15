const TabBox = ({ children }) => {
  return React.createElement("div", { id: "tabBox" }, children);
};

TabBox.propTypes = {
  children: PropTypes.array.isRequired
};

window.TabBox = TabBox;
