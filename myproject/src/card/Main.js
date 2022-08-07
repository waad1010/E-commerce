import React from 'react';
import Product from './Product';
import './card.css';



export default function Main(props) {
  const { products } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((m) => (
          <Product key={m.id} id = {m.id} title ={m.title} price ={m.price} description ={m.description}></Product>
        ))}
      </div>
    </main>
  );
}