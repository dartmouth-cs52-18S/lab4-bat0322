import React from 'react';
import { NavLink } from 'react-router-dom';

const PostTile = (props) => {
  const route = `/posts/${props.post.id}`;
  return (
    <NavLink to={route}>
      <div className="tile-container">
        <img src={props.post.cover_url} alt="Cover" className="cover-photo" />
        <div className="text-container">
          <p className="tile-title">{props.post.title}</p>
          <p className="tile-tags">{props.post.tags}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default PostTile;
