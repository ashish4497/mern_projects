import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getAllTodo, deleteTodo} from '../action/action';
import {Link} from 'react-router-dom';
import Header from './Header';

class TodoList extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllTodo());
  };

  handelDelete = id => {
    // console.log(id);
    this.props.dispatch(deleteTodo(id));
  };
  render() {
    const {todo} = this.props;
    return (
      <Fragment>
        <Header />
        <div className="main-hero">
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
          <div className="todo_list">
            {todo &&
              todo.map((val, index) => (
                <div key={index} className="display-todo-list">
                  <h1>
                    <Link to={`/todos/${val._id}`}>
                      <h4>{val.title}</h4>
                    </Link>
                  </h1>
                  <p>
                    {' '}
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => this.handelDelete(val._id)}
                    />
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateTpProps = state => {
  return {
    todo: state.todos
  };
};

export default connect(mapStateTpProps)(TodoList);
