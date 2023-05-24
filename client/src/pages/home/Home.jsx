/* eslint-disable import/extensions */
import React from 'react';
import Header from '../../components/header/Header.jsx';
import Search from '../../components/search/Search.jsx';
import Recommended from '../../components/recommended/Recommended.jsx';

function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Recommended />
    </div>
  );
}

export default Home;
