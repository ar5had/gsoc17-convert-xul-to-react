(function() {
  const { connect } = ReactRedux;

  class PreviewIframe extends React.Component {
    insertIframeContent() {
      const { title, html } = this.props.state;
      let iframeDoc = this.iframe.contentDocument;
      iframeDoc.documentElement.innerHTML = html;
      iframeDoc.title = title;
    }

    render() {
      return React.createElement("iframe", {
        onLoad: this.insertIframeContent.bind(this),
        src: "about:blank",
        id: "content",
        ref: node => (this.iframe = node)
      });
    }
  }

  PreviewIframe.propTypes = {
    state: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ iframe }) => ({ state: iframe });

  window.PreviewIframe = connect(mapStateToProps)(PreviewIframe);
})();
