import React from 'react';
import { Link } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={css.navItem}>
          <Link to="/register">Register</Link>
        </li>
        <li className={css.navItem}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
