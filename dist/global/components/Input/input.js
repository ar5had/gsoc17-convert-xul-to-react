var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

(function() {
  class Input extends React.Component {
    componentDidMount() {
      this.props.onLoad(this.input);
    }

    render() {
      return React.createElement(
        "input",
        _extends({ ref: node => (this.input = node) }, this.props.inputProps)
      );
    }
  }

  Input.propTypes = {
    onLoad: PropTypes.func.isRequired,
    inputProps: PropTypes.object
  };

  window.Input = Input;
})();
