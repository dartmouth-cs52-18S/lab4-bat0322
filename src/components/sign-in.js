import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPassInputChange = this.onPassInputChange.bind(this);
    this.onSigninClick = this.onSigninClick.bind(this);
  }

  onEmailInputChange(event) {
    this.setState(Object.assign(this.state, { email: event.target.value }));
  }

  onPassInputChange(event) {
    this.setState(Object.assign(this.state, { password: event.target.value }));
  }

  onSigninClick() {
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="form-container">
        <input className="email-input-si" onChange={this.onEmailInputChange} placeholder="Email" />
        <input className="password-input-si" onChange={this.onPassInputChange} placeholder="Password" />
        <button className="sign-in-button" onClick={this.onSigninClick}>Sign In</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signinUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignIn);
