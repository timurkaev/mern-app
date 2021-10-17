import React from 'react';
import Input from '../../../utils/input/Input';
import './signup.less'
import { signUp } from '../../../redux/actions/users';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

function SignUp() {
  const [fullName, setFullName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const loading = useSelector(state => state.users.loading);
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector(state => state.users.error)
  const errorMessage = useSelector(state => state.users.errorMessage)

  const handleReg = () => {
    dispatch(signUp(fullName, lastName, email, password, history))
  }

  return (
      <div className="signUp">
        <h1 className="signUp__title">Регистрация</h1>
        <div className="signup__name-block">
          <Input value={fullName} setValue={setFullName} type="text" placeholder="Введите Имя..." />
          <Input value={lastName} setValue={setLastName} type="text" placeholder="Введите фамилию..." />
        </div>
        <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />

        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
        {error && <div style={{color: '#ff0000'}}>{errorMessage}</div>}
        <button disabled={loading}
                onClick={handleReg}
                className="signup__btn">
          Зарегистрироваться
        </button>
        <Link to={'login'}>
          <span>У вас есть аккаунт? Войти</span>
        </Link>
      </div>
  );
}

export default SignUp;