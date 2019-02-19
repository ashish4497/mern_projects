import React, { Component, Fragment } from 'react';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="login_page">
          <form>
            <input type="text" placeholder="Enter  User name" />
            <input type="text" placeholder="Enter Password" />
            <input type="submit" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Login;
