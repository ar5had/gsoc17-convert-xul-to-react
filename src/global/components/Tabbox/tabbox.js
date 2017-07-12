const TabBox = ({ children }) => {
  return (
    <div className="tabbox">
      {children}
    </div>
  );
};

TabBox.propTypes = {
  children: PropTypes.array.isRequired
};

window.TabBox = TabBox;
