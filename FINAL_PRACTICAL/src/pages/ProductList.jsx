import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductList() {
  return (
    <div className="app-container">
      <h1>Product Dashboard</h1>
      <p>List of available products:</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
