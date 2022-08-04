import React from 'react';
import './card.css';
import AuthCart from "../store/cart-context";
import Form from "./Form";
import { useContext } from 'react';

export default function Product(props) {
  const ctx = useContext(AuthCart);

    const addHandler = (amount) => { 
     
       ctx.addItem ({
        id : props.id,
        title : props.title,
        amount : amount ,
        price : props.price, 


       });
    };
  return (
    <span>
      <img className="small" src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <div>${props.price}</div>
      <div><Form onAddToCart ={addHandler}/></div>
    </span>
  );
}