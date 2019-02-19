const initialState = {
  todos: [],
  onetodo : {}
}

export default function rootReducer(state=initialState, action) {
  switch(action.type) {
    case 'ALL_TODO': {
      return {
        ...state,
        todos: action.data
      }
    }
    case 'ONE_TODO': {
      // console.log(action.data)
      return {
        ...state,
        onetodo: action.data
      }
    }
    default: 
    return state;
  }
}
