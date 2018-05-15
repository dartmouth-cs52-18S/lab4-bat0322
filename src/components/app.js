import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewPost from '../containers/new-post';
import Posts from '../containers/posts';
import Post from '../containers/post';
import RequireAuth from '../containers/requireAuth';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Nav from './nav';


import '../style.scss';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={RequireAuth(NewPost)} />
          <Route path="/posts/:postID" component={Post} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
