import axios from 'axios';
import { setUser } from '../reducers/usersReducer';

export const signUp = (fullName, lastName, email, password, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName,
        lastName,
        email,
        password
      })
        history.push('/login')
        alert(response.data.message)
    } catch (e) {
      dispatch({type: 'reg/error', payload: e.response.data.message})
    }
  }
};

export const login = (email, password, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token )
      history.push('/')
    } catch (e) {
      dispatch({
        type: 'login/error',
        payload: e.response.data.message
      })
    }
  }
}


export const auth = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/auth',
        {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } catch(e) {
      localStorage.removeItem('token')
    }
  }
}