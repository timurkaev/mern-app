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
  const [showPassword, setShowPassword] = React.useState(false)

  const loading = useSelector(state => state.users.loading);
  const dispatch = useDispatch()

  const history = useHistory()
  
  const error = useSelector(state => state.users.error)
  const errorMessage = useSelector(state => state.users.errorMessage)

  const handleReg = () => {
    dispatch(signUp(fullName, lastName, email, password, history))
  }

  return (
      <div className="signup">
        <h1 className="signup__title">Регистрация</h1>
        <div className="signup__name-block">
          <Input value={fullName} setValue={setFullName} type="text" placeholder="Введите Имя..." />
          <Input value={lastName} setValue={setLastName} type="text" placeholder="Введите фамилию..." />
        </div>
        <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..." />
        <div className="signup__password">
          <Input value={password}
                 setValue={setPassword}
                 type={showPassword ? 'text': 'password'}
                 placeholder="Введите пароль..."
          />
          <span onClick={() => setShowPassword(!showPassword)} className="material-icons">
            {showPassword ? 'visibility' : 'visibility_off'}
          </span>
        </div>
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