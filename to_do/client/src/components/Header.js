import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getUserData, logoutUser} from '../action/action';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    this.props.dispatch(getUserData());
  }

  handleLogout = e => {
    console.log(this, 'display in header-section');
    e.preventDefault();
    this.props.dispatch(
      logoutUser(success => {
        const {history} = this.props;
        if (success) {
          console.log(this.props, 'header section');
          history.push('/login');
        }
      })
    );
  };

  render() {
    const {user} = this.props;
    return (
      <Fragment>
        <div className="top-header">
          <h1>
            <Link to="/">
              <i className="fas fa-clipboard-list" />
            </Link>
          </h1>
          {user._id ? (
            <h1 onClick={this.handleLogout}>
              <p className="log-out-btn">Log out</p>
            </h1>
          ) : (
            <div className="right-icon">
              <Link to="/signup">
                <p>signUp</p>
              </Link>
              <Link to="/login">
                <p>login</p>
              </Link>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(withRouter(Header));
