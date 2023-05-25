import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import PopularSection from '../../components/PopularSection/PopularSection';
// import checkAuth from './../../../../server/middleware/checkAuth';
/* eslint-disable import/extensions */
import Slider from '../../components/recommended/Recommended.jsx';

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/getCategories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <Filter categories={categories} />
      <PopularSection products={products} />
      <Slider />
    </div>
  );
}

export default Home;
