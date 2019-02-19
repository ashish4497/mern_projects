import React, { Component, Fragment } from 'react';

class SignUp extends Component {
  render() {
    return (
      <Fragment>
        <div className="signUp_page">
          <form>
            <input type="text" placeholder="Enter user name" />
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="submit" placeholder="Enter Password" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
