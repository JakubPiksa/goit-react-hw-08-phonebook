import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations'; 
import css from './register.module.css'


const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleRegister = () => {
    const credentials = { email, password, login };
    dispatch(register(credentials));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Register</h2>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Login"
        className={css.login}
      />
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
      <button onClick={handleRegister} type='submit'>Register</button>
    </div>
  );
};

export default Register;
