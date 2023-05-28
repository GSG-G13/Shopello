import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import './style.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    fetch('http://localhost:4000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError('Failed to fetch products');
      });
  };

  if (error) {
    return <div>{error}</div>;
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
