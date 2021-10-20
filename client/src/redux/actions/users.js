import axios from 'axios';

export const signUp = (fullName, lastName, email, password, history) => {
  return async dispatch => {
    dispatch({type: 'reg/start'})

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName,
        lastName,
        email,
        password
      }).then((response) => {
        history.push('/login')
        dispatch({
          type: 'reg/success',
          payload: response
        })
        alert(response.data.message)
      })
    } catch (e) {
      dispatch({type: 'reg/error', payload: e.response.data.message})
    }
  }
};

export const login = (email, password, history) => {
  return async dispatch => {
    dispatch({type: 'login/start'})
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      }).then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        history.push('/')
        dispatch({
          type: 'login/success',
          payload: response
        })
      })
    } catch (e) {
      dispatch({
        type: 'login/error',
        payload: e.response.data.message
      })
    }
  }
}

export const logOut = () => {
  localStorage.removeItem('token')
    return {
      type: 'logout'
    }

}

export const auth = () => {
  return async dispatch => {
    dispatch({
      type: 'user/get/start',
    })
    try {
      const response = await axios.get('http://localhost:5000/api/auth/auth',
        {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
        dispatch({
          type: 'user/get/success',
          action: response.data.user
        })
      localStorage.setItem('token', response.data.token)
    } catch(e) {
      localStorage.removeItem('token')
    }
  }
}