/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  // Input element is a plain input elements having non-standard html attributes.
  // React ignores such attributes that's why a function i.e., onLoad prop is called with DOM
  // element when input element is mounted.

  // Directly mutating DOM is not the right way, that's why adding attributes this way.
  // Passing a method as a prop instead of attributes, allows parent element much more freedom to
  // change and add as possible.

  // NOTE: Here we don't have to worry about removing these attributes, components which needs
  // to remove attributes on State change follows a different strategy to add and remove attributes.
  // Example: Tab Component
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
