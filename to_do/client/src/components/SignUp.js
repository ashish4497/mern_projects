import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {userSignup} from './../action/action';
class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      userSignup(this.state, success => {
        if (success) {
          this.props.history.push('/login');
        }
      })
    );
  };

  render() {
    return (
      <Fragment>
        <div className="signUp_page">
          <form onSubmit={this.handleSubmit} className="signUp-form">
            <h1>signUp</h1>
            <input
              autoComplete="off"
              className="use-name"
              type="text"
              placeholder="Enter user name"
              name="username"
              onChange={this.handleChange}
            />
            <input
              autoComplete="off"
              className="email-input"
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={this.handleChange}
            />
            <input
              className="password-input"
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default connect()(SignUp);
