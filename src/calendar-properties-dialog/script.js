class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <label htmlFor="">Enable</label>
        <input type="radio" id=""/>
      </div>
    );
  }
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById("root")
);
