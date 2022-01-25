import React from "react";
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    return (
      <>
        <button className="ui button negative" onClick={this.onDeleteClick}>Delete</button>
        <button className="ui button" onClick={this.onDismiss}>Cancel</button>
      </>
    )
  }

  onDismiss() {
    history.push('/')
  }

  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id)
  }

  renderModalContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?"
    }

    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
  }

  render() {
    return(
      <Modal
        title="Delete Stream"
        content={this.renderModalContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete)