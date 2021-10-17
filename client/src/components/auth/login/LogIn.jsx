import React from 'react';
import Input from '../../../utils/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../../../redux/actions/users';

function LogIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error)
  const errorMessage = useSelector(state => state.users.errorMessage)
  const dispatch = useDispatch()

  const history = useHistory()

  const handleLogin = () => {
    dispatch(login(email, password, history))
  }

  return (
    <div className="login">
      <h1 className="login__title">Авторизация</h1>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
      {error && <span style={{color: '#ff0000'}}>{errorMessage}</span>}
      <button
        disabled={loading}
        className="login__btn"
        onClick={handleLogin}
      >
          Войти
      </button>
      <Link to={'/signup'}>
        <span>Нет аккаунта, зарегистрируйтесь</span>
      </Link>
    </div>
  );
}

export default LogIn;