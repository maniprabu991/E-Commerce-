// client/src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  
  
  useEffect(() => {
    console.log('Before Axios request');
    axios.get('/api/products').then((response) => {
      console.log('After Axios request', response.data);
      setProducts(response.data);
    });
  }, []);
  

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h3>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
