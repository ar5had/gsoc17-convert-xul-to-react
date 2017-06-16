const TabBox = ({ children }) => {
  return (
    <div className="tabBox">
      {children}
    </div>
  );
};

TabBox.propTypes = {
  children: PropTypes.array.isRequired
};

window.TabBox = TabBox;
