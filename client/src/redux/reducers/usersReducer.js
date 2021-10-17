const defaultState = {
  user: JSON.parse(localStorage.getItem('token')) || {},
  error: false,
  errorMessage: [],
  loading: false,
  isAuth: false
};

export const users = (state = defaultState, action) => {
  switch (action.type) {
    case 'reg/start':
      return {
        ...state,
        loading: true
      };
    case 'reg/success':
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    case 'reg/error':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };

    case 'login/start':
      return {
        ...state,
        loading: true
      }

    case 'login/success':
      return {
        ...state,
        loading: false,
        user: action.payload,
      }

    case 'login/error':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      }

    case 'logout':
      return {
        ...state,
        user: false,
      }

    default: return state
  }
};