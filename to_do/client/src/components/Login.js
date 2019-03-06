import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {login} from '../action/action';
import {Link} from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log('object handleSubmit');
    this.props.dispatch(
      login(this.state, succeed => {
        if (succeed) {
          this.props.history.push('/');
        }
      })
    );
  };

  render() {
    return (
      <Fragment>
        <div className="login_page">
          <form onSubmit={this.handleSubmit} className="signUp-form">
            <h1>login</h1>
            <input
              autoComplete="off"
              className="use-name"
              type="text"
              placeholder="Enter  User name"
              name="username"
              onChange={this.handleChange}
            />
            <input
              className="password-input"
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.handleChange}
            />
            <input type="submit" className="submit-btn" />
            <Link to="/signup">
              <p className="register-user">Registere User</p>
            </Link>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default connect()(Login);
