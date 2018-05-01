import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (!this.props.allPostsState) {
      return (
        <div className="posts-container">
          Loading
        </div>
      );
    } else {
      console.log(this.props);
      console.log(this.props.allPostsState);
      console.log(this.props.allPostsState.all);
      return (
        <div className="posts-container">
          { this.props.allPostsState.all }
        </div>
      );
    }
  }
}

const mapStateToProps = state => (
  {
    allPostsState: state.posts,
  }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: actions.fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
