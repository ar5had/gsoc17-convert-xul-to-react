/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  // Just a wrapper
  const TabPanel = ({ children }) => {
    return (
      <div className="tabpanel">
        {children}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node
  };

  window.TabPanel = TabPanel;
})();
