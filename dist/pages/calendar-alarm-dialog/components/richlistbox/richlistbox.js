/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  class RichListBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedWidget: 0
      };
    }

    changeSelectedWidget(i) {
      this.setState({ selectedWidget: i });
    }

    getAllCalendarWidgets() {
      return this.props.widgetData.map((widget, i) =>
        React.createElement(CalendarAlarmWidget, {
          key: i,
          isSelected: i === this.state.selectedWidget,
          onClick: () => {
            this.changeSelectedWidget(i);
          }
        })
      );
    }

    render() {
      const allCalendarWidgets = this.getAllCalendarWidgets();
      const cssClasses = this.props.cssClasses;

      return React.createElement(
        "div",
        { className: `richlistbox ${cssClasses}` },
        allCalendarWidgets
      );
    }
  }

  RichListBox.propTypes = {
    cssClasses: PropTypes.string,
    widgetData: PropTypes.array
  };

  window.RichListBox = RichListBox;
})();
