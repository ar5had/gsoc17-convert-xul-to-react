const TabBox = ({ children }) => {
  return (
    <div id="tabBox">
      {children}
    </div>
  );
};

TabBox.propTypes = {
  children: PropTypes.array.isRequired
};

window.TabBox = TabBox;
