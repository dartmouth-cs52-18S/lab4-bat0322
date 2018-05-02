import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import NewPost from '../containers/new-post';
import Posts from '../containers/posts';
import Post from '../containers/post';

import '../style.scss';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};


const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/" exact><img src="../src/img/not-espn.png" alt="Logo" /></NavLink>
      <ul>
        <li><NavLink to="/" exact>Scores</NavLink></li>
        <li><NavLink to="/posts/new">New Game</NavLink></li>
      </ul>
    </nav>
  );
};

export default App;
