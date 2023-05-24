import React, { useEffect, useState } from 'react';
import { Wrapper, Icon, Input } from './Search.styles';
import SearchedItem from '../searchedItem/SearchedItem';
// import NoProducts from './NoProducts.svg';

function Search() {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (product !== '') {
      fetch(`http://localhost:4000/search/${product}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.data.products))
        .catch((error) => console.log(error));
    } else {
      setProducts('');
    }

    // return () => setProduct('');
  }, [product]);
  return (
    <>
      <Wrapper>
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#CCD2E3" strokeWidth="2" />
            <path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 20L17 17" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Icon>
        <Input placeholder="Search.." value={product} onChange={(e) => setProduct(e.target.value)} />
      </Wrapper>
      <div>
        {
          // eslint-disable-next-line no-nested-ternary
          product && !products.length ? <p style={{ textAlign: 'center' }}>No Data Found</p>
            : !product ? '' : products?.map((ele) => (
              <SearchedItem key={ele.id} img={ele.image} title={ele.name} price={ele.price} />
            ))
        }
      </div>
    </>
  );
}

export default Search;
