import axios from 'axios';

export const signUp = (fullName, lastName, email, password, history) => {
  return async dispatch => {
    dispatch({type: 'reg/start'})
      await axios.post('http://localhost:5000/api/auth/signup', {
        fullName,
        lastName,
        email,
        password
      }).then(({data}) => {
         history.push('/login')
         dispatch({
           type: 'reg/success',
           payload: data
         }
         )
         alert(data.message)
      })

  }
};