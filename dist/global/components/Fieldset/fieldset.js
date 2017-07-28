(function() {
  const Fieldset = ({ title, id, children }) => {
    return React.createElement(
      "fieldset",
      { className: "fieldset", id: id },
      React.createElement("legend", null, title),
      children
    );
  };

  Fieldset.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.element
  };

  window.Fieldset = Fieldset;
})();
