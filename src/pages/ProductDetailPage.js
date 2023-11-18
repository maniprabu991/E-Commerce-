// client/src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;
