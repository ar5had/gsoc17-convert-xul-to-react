(function() {
  class Input extends React.Component {
    componentDidMount() {
      this.props.onLoad(this.input);
    }

    render() {
      return <input ref={node => (this.input = node)} {...this.props.inputProps} />;
    }
  }

  Input.propTypes = {
    onLoad: PropTypes.func.isRequired,
    inputProps: PropTypes.object
  };

  window.Input = Input;
})();
