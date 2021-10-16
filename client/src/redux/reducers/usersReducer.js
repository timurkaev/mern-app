const defaultState = {
  user: [],
  error: false,
  errorMessage: [],
  loading: false,
};

export const users = (state = defaultState, action) => {
  switch (action.type) {
    case 'reg/start':
      return {
        ...state,
      };
    case 'reg/success':
      return {
        ...state,
        user: action.payload
      };

    default: return state
  }
};