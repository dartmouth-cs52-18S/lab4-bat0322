import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import marked from 'marked';

import * as actions from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      post: {
        title: '',
        cover_url: '',
        tags: '',
        content: '',
      },
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onTitleInputChange = this.onTitleInputChange.bind(this);
    this.onCoverInputChange = this.onCoverInputChange.bind(this);
    this.onTagsInputChange = this.onTagsInputChange.bind(this);
    this.onContentInputChange = this.onContentInputChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  onEditClick() {
    this.setState({ editing: true });
  }

  onSaveClick() {
    // this prevents empty Strings from being sent to server, would appear as default state
    this.props.updatePost(this.props.match.params.postID, this.state.post);
    this.setState({ editing: false });
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  onTitleInputChange(event) {
    this.setState(Object.assign(this.state, { post: Object.assign(this.state.post, { title: event.target.value }) }));
  }

  onCoverInputChange(event) {
    this.setState(Object.assign(this.state, { post: Object.assign(this.state.post, { cover_url: event.target.value }) }));
  }

  onTagsInputChange(event) {
    this.setState(Object.assign(this.state, { post: Object.assign(this.state.post, { tags: event.target.value }) }));
  }

  onContentInputChange(event) {
    this.setState(Object.assign(this.state, { post: Object.assign(this.state.post, { content: event.target.value }) }));
  }

  renderCover() {
    const coverUrl = this.props.currentPost.cover_url;
    if (this.state.editing) {
      return (<input className="cover-edit" defaultValue={coverUrl} onChange={this.onCoverInputChange} />);
    } else {
      return (<img src={this.props.currentPost.cover_url} alt="Cover" />);
    }
  }

  renderChangeButton() {
    if (this.state.editing) {
      return (<button className="save-button" onClick={this.onSaveClick}><i className="fas fa-save fa-2x" /></button>);
    } else {
      return (<button className="edit-button" onClick={this.onEditClick}><i className="fas fa-edit fa-2x" /></button>);
    }
  }

  renderTitle() {
    const titleText = this.props.currentPost.title;
    if (this.state.editing) {
      return (<input className="title-edit" defaultValue={titleText} onChange={this.onTitleInputChange} />);
    } else {
      return (<h1>{this.props.currentPost.title}</h1>);
    }
  }

  renderTags() {
    const tagsText = this.props.currentPost.tags;
    if (this.state.editing) {
      return (<input className="tags-edit" defaultValue={tagsText} onChange={this.onTagsInputChange} />);
    } else {
      return (<h2>{this.props.currentPost.tags}</h2>);
    }
  }

  renderAuthor() {
    if (!this.state.editing) {
      return <h3>Posted by: {this.props.currentPost.author.username}</h3>;
    }
  }

  renderContent() {
    const contentText = this.props.currentPost.content;
    if (this.state.editing) {
      return (<textarea className="text-edit-area" defaultValue={contentText} onChange={this.onContentInputChange} />);
    } else {
      return (<div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />);
    }
  }

  render() {
    if (Object.keys(this.props.currentPost).length > 0) {
      return (
        <div className="post-container">
          <div className="post-title-card">
            {this.renderCover()}
            <div className="title-card-with-buttons">
              <div className="button-container">
                <button className="delete-button" onClick={this.onDeleteClick}><i className="far fa-trash-alt fa-2x" /></button>
                {this.renderChangeButton()}
              </div>
              <div className="title-with-tags">
                {this.renderTitle()}
                {this.renderTags()}
                {this.renderAuthor()}
              </div>
            </div>
          </div>
          <div className="content-container">
            {this.renderContent()}
          </div>
        </div>
      );
    } else {
      return (
        <div>Post not found</div>
      );
    }
  }
}

const mapStateToProps = state => (
  {
    currentPost: state.posts.post,
  }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost: actions.fetchPost, updatePost: actions.updatePost, deletePost: actions.deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
