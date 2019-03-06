const initialState = {
  todos: [],
  onetodo: {},
  user: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ALL_TODO': {
      return {
        ...state,
        todos: action.data
      };
    }
    case 'ONE_TODO': {
      // console.log(action.data)
      return {
        ...state,
        onetodo: action.data
      };
    }
    case 'LOGIN_SUCCESS': {
      // console.log(action.data.user, 'inside reducer');
      return {
        ...state,
        user: action.data.user
      };
    }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: []
      };
    default:
      return state;
  }
}
