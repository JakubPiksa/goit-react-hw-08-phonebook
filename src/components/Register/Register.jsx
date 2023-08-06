import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'auth/operations';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(register({ login, email, password }));
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Login"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
