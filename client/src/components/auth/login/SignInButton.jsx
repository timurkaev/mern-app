import React from 'react'
import './login.less'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/reducers/usersReducer';

function SignInButton() {
  const isAuth = useSelector(state => state.users.isAuth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      {!isAuth && <Link to={'login'}><button className="navbar__btn-login">Войти</button></Link>}
      {isAuth && <button onClick={handleLogout} className="navbar__btn-login logout">Выйти</button>}
    </>
  )
}

export default SignInButton