import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPassInputChange = this.onPassInputChange.bind(this);
    this.onCreateClick = this.onCreateClick.bind(this);
  }

  onNameInputChange(event) {
    this.setState(Object.assign(this.state, { username: event.target.value }));
  }

  onEmailInputChange(event) {
    this.setState(Object.assign(this.state, { email: event.target.value }));
  }

  onPassInputChange(event) {
    this.setState(Object.assign(this.state, { password: event.target.value }));
  }

  onCreateClick() {
    if (this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      this.props.signupUser(this.state, this.props.history);
    } else {
      alert('Make sure to fill in all fields!');
    }
  }

  render() {
    return (
      <div className="form-container">
        <input className="name-input-reg" onChange={this.onNameInputChange} placeholder="Name" />
        <input className="email-input-reg" onChange={this.onEmailInputChange} placeholder="Email" />
        <input className="password-input-reg" onChange={this.onPassInputChange} placeholder="Password" />
        <button className="create-button" onClick={this.onCreateClick}>Register</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp);
