const Fieldset = ({ title, id, children }) => {
  return (
    <fieldset className="fieldset" id={id}>
      <legend>{title}</legend>{children}
    </fieldset>
  );
};

Fieldset.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.element
};

window.Fieldset = Fieldset;
