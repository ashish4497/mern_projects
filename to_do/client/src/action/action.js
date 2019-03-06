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

export function userSignup(data, cb) {
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
        // console.log(data);

        dispatch({type: 'SIGNUP_SUCCESS', data});
        cb(true);
      });
  };
}

export const login = (data, cb) => dispatch => {
  fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data, 'inside action login');
      dispatch({type: 'LOGIN_SUCCESS', data});
      cb(true);
    });
};

export const getUserData = () => dispatch => {
  fetch(`${url}/isLoggedIn`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'LOGIN_SUCCESS', data});
    });
};

export function logoutUser(cb) {
  return dispatch => {
    fetch('/api/logout')
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'LOGOUT_SUCCESS', data});
        cb(true);
      });
  };
}
