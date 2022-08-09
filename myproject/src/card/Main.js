import React from 'react';
import Product from './Product';
import './card.css';
import Search from '../Search/Search';



export default function Main(props) {
  const { products } = props;

  
  return (
    <main className="block col-2">
     <h2 className='title'>Products</h2>
     <Search />
  
      
      <div className="row">
        {products.map((m) => (
          <Product key={m.id} id = {m.id} title ={m.title} price ={m.price} description ={m.description}></Product>
        ))}
      </div>
    </main>
  );
}