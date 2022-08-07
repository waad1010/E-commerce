import React from 'react';
import './card.css';
import AuthCart from "../store/cart-context";
import Form from "./Form";
import { useContext  } from 'react';
import IMG from "../pictures/8.jpg"
import { Link } from 'react-router-dom';

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
  <div class="a-box">
    <Link to ='/'>
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={IMG} />
      </div>
    </div>
  </div>
  </Link>
  <div class="text-container">
    <h3>{props.title}</h3>
    <div>${props.price}</div>
    <div>
      {props.description}
  </div>
  
  <div ><Form onAddToCart ={addHandler}/></div>
</div>
</div>
  );
}