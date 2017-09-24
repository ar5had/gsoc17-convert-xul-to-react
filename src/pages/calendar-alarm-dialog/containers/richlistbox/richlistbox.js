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
      return this.props.state.map((widget, i) =>
        <CalendarAlarmWidget
          key={i}
          time={widget.time}
          name={widget.name}
          isSelected={i === this.state.selectedWidget}
          onClick={() => {
            this.changeSelectedWidget(i);
          }}
        />
      );
    }

    render() {
      const allCalendarWidgets = this.getAllCalendarWidgets();

      return (
        <div className="richlistbox alarm-dialog-richlistbox">
          {allCalendarWidgets}
        </div>
      );
    }
  }

  RichListBox.propTypes = {
    state: PropTypes.array.isRequired
  };

  const mapStateToProps = ({ items }) => ({ state: items });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(() => {}, dispatch)
  });

  window.RichListBox = connect(mapStateToProps, mapDispatchToProps)(RichListBox);
})();
