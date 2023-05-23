import React, { useEffect, useState } from 'react';
import { Wrapper, Icon, Input } from './Search.styles';

function Search() {
  const [product, setProduct] = useState('');
  // useEffect(() => {
  //   fetch(`/search/${product}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => alert(error));

  //   return () => setProduct('');
  // }, [product]);
  return (
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
  );
}

export default Search;
