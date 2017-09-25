/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  /* global React */
  const PrintDialogGroupBox = () =>
    React.createElement(
      "div",
      { id: "groupboxVbox" },
      React.createElement(PrintSettings, null),
      React.createElement(WhatToPrint, null),
      React.createElement(Options, null)
    );

  window.PrintDialogGroupBox = PrintDialogGroupBox;
})();
