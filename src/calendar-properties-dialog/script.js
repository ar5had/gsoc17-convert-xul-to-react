class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <label htmlFor="">Enable</label>
        <input type="checkbox" id=""/>
      </div>
    );
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);
