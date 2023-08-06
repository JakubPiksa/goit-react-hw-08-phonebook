import React from 'react';
import { Link } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/"><button className={css.navBtn}>Home</button></Link>
        </li>
        <li className={css.navItem}>
          <Link to="/register"><button className={css.navBtn}>Register</button></Link>
        </li>
        <li className={css.navItem}>
          <Link to="/login"><button className={css.navBtn}>Login</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
