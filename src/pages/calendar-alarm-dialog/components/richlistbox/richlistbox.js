/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  const { connect } = ReactRedux;
  const { bindActionCreators } = Redux;

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
        <CalendarAlarmWidget
          key={i}
          isSelected={i === this.state.selectedWidget}
          onClick={() => {
            this.changeSelectedWidget(i);
          }}
        />
      );
    }

    render() {
      const allCalendarWidgets = this.getAllCalendarWidgets();
      const cssClasses = this.props.cssClasses;

      return (
        <div className={`richlistbox ${cssClasses}`}>
          {allCalendarWidgets}
        </div>
      );
    }
  }

  RichListBox.propTypes = {
    cssClasses: PropTypes.string,
    widgetData: PropTypes.array
  };

  const mapStateToProps = ({ options }) => ({ state: options });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(() => {}, dispatch)
  });

  window.RichListBox = connect(mapStateToProps, mapDispatchToProps)(RichListBox);
})();
