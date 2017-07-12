const { connect } = ReactRedux;
const { bindActionCreators } = Redux;

const Options = ({ state, actions }) => {
  const { showTasksWithNoDueDate, showCompletedTasks } = state;
  return (
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
  );
};

Options.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(window.redux_actions, dispatch)
  };
};

window.Options = connect(mapStateToProps, mapDispatchToProps)(Options);
