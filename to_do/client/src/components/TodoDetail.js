import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {oneTodo} from '../action/action';
import {Link} from 'react-router-dom';
import Header from './Header';

class TodoDetail extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(oneTodo(id));
  };

  render() {
    const {onetodo} = this.props;
    return (
      <div className="description-section">
        <Header />
        <div className="detail-section">
          <Link to="/todos">
            <i className="fas fa-arrow-circle-left" />
          </Link>
          <div className="detail-page">
            <h1>{onetodo.title}</h1>
            <p>{onetodo.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    onetodo: state.onetodo
  };
};

export default connect(mapStateToProps)(TodoDetail);
