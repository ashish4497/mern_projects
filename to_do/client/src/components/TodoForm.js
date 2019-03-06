import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action/action';
import {Link} from 'react-router-dom';
import Header from './Header';

class TodoForm extends Component {
  state = {
    title: '',
    description: ''
  };

  //set the title and description
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //event on submit button
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      addTodo(this.state, success => {
        if (success) {
          this.props.history.push('/todos');
        }
      })
    );
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="todo_form">
          <Link to="/todos">
            <h2>see todo list</h2>
          </Link>
          <h1> Add todo list</h1>
          <form className="main-form" onSubmit={this.handleSubmit}>
            <input
              autoComplete="off"
              type="text"
              className="input-title"
              placeholder="enter title"
              required
              name="title"
              onChange={this.handleChange}
            />
            <textarea
              autoComplete="off"
              className="input-description"
              rows="3"
              cols="4"
              placeholder="description"
              required
              name="description"
              onChange={this.handleChange}
            />
            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default connect()(TodoForm);
