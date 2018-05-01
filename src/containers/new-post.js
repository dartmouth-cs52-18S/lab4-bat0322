import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class NewPost extends Component {
  render() {
    return (
      <div className="form-container">
        <input className="title-input" placeholder="Title" />
        <input className="cover-url-input" placeholder="Cover image url" />
        <input className="tags-input" placeholder="Tags" />
        <textarea className="content-input" placeholder="Content" />
        <button className="submit-button">Submit</button>
      </div>
    );
  }
}

export default NewPost;
