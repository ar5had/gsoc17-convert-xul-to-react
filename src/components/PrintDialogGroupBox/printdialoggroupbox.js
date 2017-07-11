const { connect } = ReactRedux;
const { bindActionCreators } = Redux;

class PrintDialogGroupBox extends React.Component {
  componentDidMount() {}

  render() {
    const {
      title,
      layout,
      printTasks,
      printEvents,
      view,
      showCompletedTasks,
      showTasksWithNoDueDate,
      dateRange
    } = this.props.state;

    const { changeTitle } = this.props.actions;

    return (
      <div id="groupboxVbox">
        <Fieldset title="Print Settings" id="settingsGroup">
          <div className="fieldset-content-wrapper">
            <div className="row">
              <label htmlFor="title-field" className="row-label">Title:</label>
              <input
                className="row-input"
                type="text"
                id="title-field"
                value={title}
                onChange={changeTitle}
              />
            </div>
            <div className="row">
              <label htmlFor="layout-field" className="row-label">
                Layout:
              </label>
              <select className="row-input" id="layout-field" value={layout}>
                <option value="LIST">List</option>
                <option value="MONTHLY_GRID">Monthly Grid</option>
                <option value="WEEKLY_PLANNER">Weekly Planner</option>
              </select>
            </div>
          </div>
        </Fieldset>
        <Fieldset title="What to Print" id="what-to-print-group">
          <div className="fieldset-content-wrapper">
            <div className="row row-align-content">
              <input
                className="row-input checkbox"
                type="checkbox"
                id="events"
                checked={printEvents}
              />
              <label htmlFor="events" className="row-label mar-right-15">
                Events
              </label>
              <input
                className="row-input checkbox"
                type="checkbox"
                id="tasks"
                checked={printTasks}
              />
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
              <input
                className="row-input checkbox"
                type="radio"
                name="to-print"
                id="custom-range"
              />
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
        <Fieldset title="Options" id="optionsGroup">
          <div className="fieldset-content-wrapper">
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                type="checkbox"
                id="tasks-with-no-due-date"
                checked={showTasksWithNoDueDate}
              />
              <label htmlFor="tasks-with-no-due-date" className="row-label">
                Tasks with no due date
              </label>
            </div>
            <div className="row row-label-expanded">
              <input
                className="row-input checkbox"
                type="checkbox"
                id="completed-tasks"
                checked={showCompletedTasks}
              />
              <label htmlFor="completed-tasks" className="row-label">
                Completed tasks
              </label>
            </div>
          </div>
        </Fieldset>
      </div>
    );
  }
}

PrintDialogGroupBox.propTypes = {
  actions: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(window.redux_actions, dispatch)
  };
};

window.PrintDialogGroupBox = connect(mapStateToProps, mapDispatchToProps)(PrintDialogGroupBox);
