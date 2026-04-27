import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Link to="/">Back to Dashboard</Link>
      
      <div className="details-card">
        <h1>{product.name}</h1>
        <h2>Price: ${product.price}</h2>
        <p>{product.description}</p>
        
        <h3>Features:</h3>
        <ul>
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
