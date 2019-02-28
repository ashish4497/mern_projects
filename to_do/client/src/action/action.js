const url = 'http://localhost:8000/api';

export function addTodo(data, cb) {
  return dispatch => {
    fetch(`${url}/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'ADD_TODO', data});
        cb(true);
      });
  };
}

export function getAllTodo() {
  return function(dispatch) {
    fetch(`${url}/todo`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'ALL_TODO', data});
      });
  };
}

export function oneTodo(id) {
  return function(dispatch) {
    fetch(`${url}/todo/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'ONE_TODO', data});
      });
  };
}

export function deleteTodo(id) {
  return function(dispatch) {
    fetch(`${url}/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'ALL_TODO', data});
      });
  };
}

export function userSignup(data) {
  return function(dispatch) {
    fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({type: 'SIGNUP_SUCCESS', data});
      });
  };
}

export function login(data, cb) {
  console.log(data);
  return dispatch => {
    fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
}
