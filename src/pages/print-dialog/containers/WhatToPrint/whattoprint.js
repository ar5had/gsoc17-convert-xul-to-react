const { connect } = ReactRedux;
const { bindActionCreators } = Redux;

const WhatToPrint = ({ state, actions }) => {
  const { printEvents, printTasks } = state;
  return (
    <Fieldset title="What to Print" id="what-to-print-group">
      <div className="fieldset-content-wrapper">
        <div className="row row-align-content">
          <input className="row-input checkbox" type="checkbox" id="events" checked={printEvents} />
          <label htmlFor="events" className="row-label mar-right-15">
            Events
          </label>
          <input className="row-input checkbox" type="checkbox" id="tasks" checked={printTasks} />
          <label htmlFor="tasks" className="row-label">
            Tasks
          </label>
        </div>
        <div className="row row-label-expanded">
          <input
            className="row-input checkbox"
            name="to-print"
            type="radio"
            id="printCurrentView"
          />
          <label htmlFor="printCurrentView" className="row-label">
            Current view
          </label>
        </div>
        <div className="row row-label-expanded">
          <input className="row-input checkbox" type="radio" name="to-print" id="selected" />
          <label htmlFor="selected" className="row-label">
            Selected events/tasks
          </label>
        </div>
        <div className="row row-label-expanded">
          <input className="row-input checkbox" type="radio" name="to-print" id="custom-range" />
          <label htmlFor="custom-range" className="row-label">
            Custom date range
          </label>
        </div>
        <div className="row">
          <label htmlFor="start-date-picker" className="row-label">From:</label>
          <input type="date" id="start-date-picker" className="row-input" />
        </div>
        <div className="row">
          <label htmlFor="end-date-picker" className="row-label">To:</label>
          <input type="date" id="end-date-picker" className="row-input" />
        </div>
      </div>
    </Fieldset>
  );
};

WhatToPrint.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(window.redux_actions, dispatch)
  };
};

window.WhatToPrint = connect(mapStateToProps, mapDispatchToProps)(WhatToPrint);
