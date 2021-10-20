const defaultState = {
  user: {},
  error: false,
  errorMessage: [],
  loading: false,
  isAuth: false
};

export const users = (state = defaultState, action) => {
  switch (action.type) {
    // case 'user/get/start':
    //   return {
    //     ...state,
    //     loading: true
    //   }

    case 'user/get/success': 
      return {
        ...state,
        loading: false,
        user: action.payload,
      }

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
      localStorage.removeItem('token')
      return {
        ...state,
        user: {},
      }

    default: return state
  }
};