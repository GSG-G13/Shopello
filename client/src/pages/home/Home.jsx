/* eslint-disable import/extensions */
import React from 'react';
import Header from '../../components/header/Header.jsx';
import Search from '../../components/search/Search.jsx';
import Slider from '../../components/recommended/Recommended.jsx';

function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Slider />
    </div>
  );
}

export default Home;
