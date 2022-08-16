import React from 'react';
import './card.css';
import AuthCart from "../store/cart-context";
import Form from "./Form";
import { useContext  } from 'react';
import IMG from "../pictures/Cats/8.jpg"
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Rating.css'

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
     <Link to={`/product/${props.id}`}>
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src=
         {require(`../pictures/${props.cid}/${props.pic}`)}
        
        />
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
  
  <div ><Form onAddToCart ={addHandler}/>
  <span className='Rate'><Rating  text=' 5 reviews'/></span>
  
  </div>
</div>
</div>
  );
}