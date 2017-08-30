/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
      return (
        <iframe
          onLoad={this.insertIframeContent.bind(this)}
          src="about:blank"
          id="content"
          ref={node => (this.iframe = node)}
        />
      );
    }
  }

  PreviewIframe.propTypes = {
    state: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ iframe }) => ({ state: iframe });

  window.PreviewIframe = connect(mapStateToProps)(PreviewIframe);
})();
