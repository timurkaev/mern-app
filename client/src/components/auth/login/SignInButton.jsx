import React from 'react'
import './login.less'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../../redux/actions/users';

function SignInButton() {
  const isAuth = useSelector(state => state.users.isAuth)
  const user = useSelector(state => state.users.user)
  console.log(user);
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(logOut())
  }

  return (
    <>
      {!user && <Link to={'login'}><button className="navbar__btn-login">Войти</button></Link>}
      {user && <button onClick={handleRemove} className="navbar__btn-login logout">Выйти</button>}
    </>
  )
}

export default SignInButton