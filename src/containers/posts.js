import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import PostTile from '../components/post-tile';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const postTiles = [];
    for (let i = 0; i < this.props.allPosts.length; i++) {
      postTiles.push(<PostTile key={i} post={this.props.allPosts[i]} />);
    }
    return postTiles;
  }

  render() {
    if (!this.props.allPosts) {
      return (
        <div className="posts-container">
          Loading
        </div>
      );
    } else {
      return (
        <div className="posts-container">
          {this.renderPosts()}
        </div>
      );
    }
  }
}

const mapStateToProps = state => (
  {
    allPosts: state.posts.all,
  }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
