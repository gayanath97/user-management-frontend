import { legacy_createStore as createStore} from 'redux'

const initialState = {
    isAuthenticated: false,
    username: '',
    password: '',
    users: [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
      { id: 3, firstName: 'Emily', lastName: 'Wilson'},
      { id: 4, firstName: 'Tom', lastName: 'Hanks'},
      { id: 5, firstName: 'Tom', lastName: 'Cruise'},
    ],
};
const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case 'LOGIN':
        const { username, password } = action.payload;
      if (username === 'haulmatic' && password === '123456') {
        return {
          ...state,
          isAuthenticated: true,
          username,
          password,
        };
      }
      return state;
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, username: '', password: '' };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? { ...user, ...action.payload.changes } : user
        ),
      };
    case 'DELETE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    default:
      return state;
    }
  };
  
  const store = createStore(rootReducer);
  
  export default store;