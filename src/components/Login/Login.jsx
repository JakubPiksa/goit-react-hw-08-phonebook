import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations'; 
import css from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const credentials = { email, password };
    dispatch(logIn(credentials));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={css.email}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={css.password}
      />
      <button type="submit" onClick={handleLogin} className={css.loginBtn}>
        Login
      </button>
    </div>
  );
};

export default Login;
