const url = "http://localhost:8000/api"


export function addTodo (data, cb) {
  return dispatch => {
    fetch(`${url}/todo`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      dispatch({type: 'ADD_TODO', data})
      cb(true)
    })
  }
}

export function getAllTodo() {
  return function(dispatch) {
    fetch(`${url}/todo`)
    .then(res => res.json())
    .then(data => {
      dispatch({type:'ALL_TODO',data})
    })
  }
}

export function oneTodo(id){
  return function(dispatch) {
    fetch(`${url}/todo/${id}`)
    .then(res => res.json())
    .then(data =>{
      dispatch({type:'ONE_TODO',data})
    })
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    fetch(`${url}/todo/${id}`, {
    method : 'DELETE',
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({id})
  })
  .then(res => res.json())
    .then(data => {
      dispatch({type: 'ALL_TODO', data})
    })
  }
}