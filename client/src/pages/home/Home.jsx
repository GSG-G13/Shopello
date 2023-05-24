import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import PopularSection from '../../components/PopularSection/PopularSection';

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/getCategories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <Filter categories={categories} />
      <PopularSection />
    </div>
  );
}

export default Home;
