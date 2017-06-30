const RichListBox = ({ cssClasses }) => {
  return (
    <div className={`rich-list-box ${cssClasses}`}>
      <CalendarAlarmWidget />
    </div>
  );
};

RichListBox.propTypes = {
  cssClasses: PropTypes.string
};

window.RichListBox = RichListBox;
