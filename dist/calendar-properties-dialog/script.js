class Wrapper extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "label",
        { htmlFor: "" },
        "Enable"
      ),
      React.createElement("input", { type: "checkbox", id: "" })
    );
  }
}

ReactDOM.render(React.createElement(Wrapper, null), document.getElementById("root"));
