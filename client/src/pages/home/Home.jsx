/* eslint-disable import/extensions */
import React from 'react';
import Header from '../../components/header/Header.jsx';
import Search from '../../components/search/Search.jsx';
import Slider from '../../components/Slider';
import ProductsList from '../../components/ProductList/index.jsx';
import Recomended from '../../components/recommended/Recommended.jsx';

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Search />
      <ProductsList />
    </div>
  );
}

export default Home;
