/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
