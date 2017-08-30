/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  // Just a wrapper, to make component structure similar to XUL equivalent component
  const TabBox = ({ children }) => {
    return React.createElement("div", { className: "tabbox" }, children);
  };

  TabBox.propTypes = {
    children: PropTypes.node.isRequired
  };

  window.TabBox = TabBox;
})();
