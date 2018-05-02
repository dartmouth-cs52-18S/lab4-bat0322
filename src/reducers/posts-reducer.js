import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return Object.assign({}, state, { all: action.posts });
    case ActionTypes.FETCH_POST:
      return Object.assign({}, state, { post: action.post });
    case ActionTypes.UPDATE_POST:
      return Object.assign({}, state, { post: action.post });
    default:
      return state;
  }
};

export default PostsReducer;
