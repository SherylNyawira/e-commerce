import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductListComponent from '../components/ProductList';

const ProductListing = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Filters />
        <ProductListComponent />
      </div>
    </div>
  );
};

export default ProductListing;