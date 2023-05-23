import React from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';

function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Filter categories={['Filter1', 'Filter2', 'Filter3']} />
    </div>
  );
}

export default Home;
