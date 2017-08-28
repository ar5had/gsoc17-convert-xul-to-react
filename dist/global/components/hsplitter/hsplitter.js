(function() {
  // HSplitter(horizontal splitter), divides the components horizonatally.
  class HSplitter extends React.Component {
    constructor(props) {
      super(props);
      this.splitterDrag = this.splitterDrag.bind(this);
    }

    componentDidMount() {
      this.box = document.getElementById(this.props.boxId);
      this.boxWindow = document.getElementById(this.props.boxWindowId);

      // slice removes "px" from width
      this.boxDefaultWidth = +window
        .getComputedStyle(this.box)
        .getPropertyValue("width")
        .slice(0, -2);

      this.splitter.addEventListener("mousedown", e => {
        if (e.which === 1) {
          document.getElementById("content").style.pointerEvents = "none";
          this.prevX = e.clientX;
          this.boxWindow.addEventListener("mousemove", this.splitterDrag);
          document.body.classList.add("splitter-cursor");
          e.preventDefault();
        }
      });
    }

    componentWillUnmount() {
      document.getElementById("content").style.pointerEvents = "all";
      document.body.classList.remove("splitter-cursor");
      document
        .getElementById("dialog-content-box")
        .removeEventListener("mousemove", this.splitterDrag);
    }

    isMouseButtonDown(e) {
      if (e.buttons === null) {
        return e.which !== 0;
      } else {
        return e.buttons !== 0;
      }
    }

    splitterDrag(e) {
      if (this.isMouseButtonDown(e)) {
        const disp = e.clientX - this.prevX;
        const newWidth = Math.max(this.boxDefaultWidth, this.box.offsetWidth + disp);
        this.box.style.width = `${newWidth}px`;
        this.prevX = Math.max(
          this.box.getBoundingClientRect().left + this.boxDefaultWidth,
          e.clientX
        );
      } else {
        document.getElementById("content").style.pointerEvents = "all";
        this.boxWindow.removeEventListener("mousemove", this.splitterDrag);
        document.body.classList.remove("splitter-cursor");
      }
    }

    render() {
      return React.createElement("div", {
        className: "splitter vertical",
        ref: node => (this.splitter = node)
      });
    }
  }

  HSplitter.propTypes = {
    boxId: PropTypes.string.isRequired,
    boxWindowId: PropTypes.string.isRequired
    // maxWidth: PropTypes.number.isRequired
  };

  window.HSplitter = HSplitter;
})();
