const SET_USER = "SET_USER"
const LOGOUT = 'LOGOUT'

const defaultState = {
  user: {},
  error: false,
  errorMessage: [],
  loading: false,
  isAuth: false
};

export const users = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER: 
      return {
        ...state,
        user: action.payload,
        isAuth: true
      }

      case LOGOUT: 
      localStorage.removeItem('token')
      return {
        ...state,
        user: {},
        isAuth: false
      }

    case 'reg/error':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };

    case 'login/error':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      }
      
    default: return state
  }
};

export const setUser = (user) => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})