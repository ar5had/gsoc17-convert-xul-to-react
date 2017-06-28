class PrintDialogGroupBox extends React.Component {
  render() {
    return React.createElement(
      "div",
      { id: "groupboxVbox" },
      React.createElement(
        Fieldset,
        { title: "Settings", id: "settingsGroup" },
        React.createElement(
          "div",
          { className: "fieldset-content-wrapper" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "label",
              { htmlFor: "title-field", className: "row-label" },
              "Title:"
            ),
            React.createElement("input", {
              className: "row-input",
              type: "text",
              id: "title-field"
            })
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "label",
              { htmlFor: "layout-field", className: "row-label" },
              "Layout:"
            ),
            React.createElement(
              "select",
              { className: "row-input", id: "layout-field" },
              React.createElement("option", { value: "list" }, "List"),
              React.createElement("option", { value: "monthly-grid" }, "Monthly Grid"),
              React.createElement("option", { value: "weekly-planner" }, "Weekly Planner")
            )
          )
        )
      ),
      React.createElement(
        Fieldset,
        { title: "What to Print", id: "what-to-print-group" },
        React.createElement(
          "div",
          { className: "fieldset-content-wrapper" },
          React.createElement(
            "div",
            { className: "row row-align-content" },
            React.createElement("input", {
              className: "row-input checkbox",
              type: "checkbox",
              id: "events"
            }),
            React.createElement(
              "label",
              { htmlFor: "events", className: "row-label mar-right-15" },
              "Events"
            ),
            React.createElement("input", {
              className: "row-input checkbox",
              type: "checkbox",
              id: "tasks"
            }),
            React.createElement("label", { htmlFor: "tasks", className: "row-label" }, "Tasks")
          ),
          React.createElement(
            "div",
            { className: "row row-label-expanded" },
            React.createElement("input", {
              className: "row-input checkbox",
              name: "to-print",
              type: "radio",
              id: "printCurrentView"
            }),
            React.createElement(
              "label",
              { htmlFor: "printCurrentView", className: "row-label" },
              "Current view"
            )
          ),
          React.createElement(
            "div",
            { className: "row row-label-expanded" },
            React.createElement("input", {
              className: "row-input checkbox",
              type: "radio",
              name: "to-print",
              id: "selected"
            }),
            React.createElement(
              "label",
              { htmlFor: "selected", className: "row-label" },
              "Selected events/tasks"
            )
          ),
          React.createElement(
            "div",
            { className: "row row-label-expanded" },
            React.createElement("input", {
              className: "row-input checkbox",
              type: "radio",
              name: "to-print",
              id: "custom-range"
            }),
            React.createElement(
              "label",
              { htmlFor: "custom-range", className: "row-label" },
              "Custom date range"
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "label",
              { htmlFor: "start-date-picker", className: "row-label" },
              "From:"
            ),
            React.createElement("input", {
              type: "date",
              id: "start-date-picker",
              className: "row-input"
            })
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "label",
              { htmlFor: "end-date-picker", className: "row-label" },
              "To:"
            ),
            React.createElement("input", {
              type: "date",
              id: "end-date-picker",
              className: "row-input"
            })
          )
        )
      ),
      React.createElement(
        Fieldset,
        { title: "Options", id: "optionsGroup" },
        React.createElement(
          "div",
          { className: "fieldset-content-wrapper" },
          React.createElement(
            "div",
            { className: "row row-label-expanded" },
            React.createElement("input", {
              className: "row-input checkbox",
              type: "checkbox",
              id: "task-with-no-due-date"
            }),
            React.createElement(
              "label",
              { htmlFor: "task-with-no-due-date", className: "row-label" },
              "Task with no due date"
            )
          ),
          React.createElement(
            "div",
            { className: "row row-label-expanded" },
            React.createElement("input", {
              className: "row-input checkbox",
              type: "checkbox",
              id: "completed-tasks"
            }),
            React.createElement(
              "label",
              { htmlFor: "completed-tasks", className: "row-label" },
              "Completed tasks"
            )
          )
        )
      )
    );
  }
}

window.PrintDialogGroupBox = PrintDialogGroupBox;
