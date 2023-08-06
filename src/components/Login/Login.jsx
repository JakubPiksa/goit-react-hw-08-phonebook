import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'auth/operations'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ login, email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
