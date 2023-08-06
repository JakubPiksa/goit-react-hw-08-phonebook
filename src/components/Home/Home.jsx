import React from 'react';
import css from './home.module.css'


const Home = () => {
  return (
    <div className={css.home}>
      <h2 className={css.homeTitle}>Witaj w aplikacji PhoneBook</h2>
      <p className={css.homeText}>Możesz tu zapisać swoje kontakty</p>
    </div>
  );
};

export default Home;
