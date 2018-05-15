import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { signoutUser } from '../actions';

const url = require('../img/not-espn.png');

class Nav extends Component {
  constructor(props) {
    super(props);

    this.onSignoutClick = this.onSignoutClick.bind(this);
  }

  onSignoutClick() {
    this.props.signoutUser(this.props.history);
  }

  renderAcct() {
    if (this.props.authenticated) {
      return <li onClick={this.onSignoutClick} className="signout-link">Sign Out</li>;
    } else {
      return (
        <ul>
          <li><NavLink to="/signin">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav>
        <NavLink to="/" exact><img src={url} alt="Logo" /></NavLink>
        <div className="link-container">
          <ul>
            <li><NavLink to="/" exact>Scores</NavLink></li>
            <li><NavLink to="/posts/new">New Game</NavLink></li>
          </ul>
          {this.renderAcct()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signoutUser }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
