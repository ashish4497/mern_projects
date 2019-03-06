import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import signUp from './components/SignUp';
import Login from './components/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoDetail from './components/TodoDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TodoForm} />
            <Route path="/todos" exact component={TodoList} />
            <Route path="/todos/:id" exact component={TodoDetail} />
            <Route path="/signup" exact component={signUp} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
