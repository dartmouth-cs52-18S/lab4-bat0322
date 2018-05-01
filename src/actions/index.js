import axios from 'axios';

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=b_tomasco';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POSTS', posts: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function getPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POST', post: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then((response) => {
      dispatch({ type: 'CREATE_POST', payload: response.data });
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function updatePost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/, posts/${API_KEY}`, post).then((response) => {
      dispatch({ type: 'UPDATE_POST', payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: 'DELETE_POST', newState: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

// export function increment() {
//   return {
//     type: ActionTypes.INCREMENT,
//     payload: null,
//   };
// }

// export function decrement() {
//   return {
//     type: ActionTypes.DECREMENT,
//     payload: null,
//   };
// }
