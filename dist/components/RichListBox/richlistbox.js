const RichListBox = ({ cssClasses }) => {
  return React.createElement(
    "div",
    { className: `rich-list-box ${cssClasses}` },
    React.createElement(CalendarAlarmWidget, null)
  );
};

RichListBox.propTypes = {
  cssClasses: PropTypes.string
};

window.RichListBox = RichListBox;
