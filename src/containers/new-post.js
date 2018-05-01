import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      cover_url: '',
      tags: '',
      content: '',
    };

    this.onTitleInputChange = this.onTitleInputChange.bind(this);
    this.onCoverInputChange = this.onCoverInputChange.bind(this);
    this.onTagsInputChange = this.onTagsInputChange.bind(this);
    this.onContentInputChange = this.onContentInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onTitleInputChange(event) {
    this.setState(Object.assign(this.state, { title: event.target.value }));
  }

  onCoverInputChange(event) {
    this.setState(Object.assign(this.state, { cover_url: event.target.value }));
  }

  onTagsInputChange(event) {
    this.setState(Object.assign(this.state, { tags: event.target.value }));
  }

  onContentInputChange(event) {
    this.setState(Object.assign(this.state, { content: event.target.value }));
  }

  onSubmitClick() {
    if (this.state.title.length > 0 &&
      this.state.cover_url.length > 0 &&
      this.state.content.length > 0
    ) {
      this.props.createPost(this.state, this.props.history);
    } else {
      alert('Make sure to fill in all fields!');
    }
  }

  render() {
    return (
      <div className="form-container">
        <input className="title-input" onChange={this.onTitleInputChange} placeholder="Title" />
        <input className="cover-url-input" onChange={this.onCoverInputChange} placeholder="Cover image url" />
        <input className="tags-input" onChange={this.onTagsInputChange} placeholder="Tags (optional)" />
        <textarea className="content-input" onChange={this.onContentInputChange} placeholder="Content" />
        <button className="submit-button" onClick={this.onSubmitClick}>Submit</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost: actions.createPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewPost);
