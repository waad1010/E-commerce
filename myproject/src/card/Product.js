import React from 'react';
import './card.css';
import AuthCart from "../store/cart-context";
import Form from "./Form";
import { useContext  } from 'react';
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
        max : +props.count,


       });
    };
    const avg = props.number ? props.rates / props.number : 0 ;

    console.log("DATA IS " );  
    console.log(props.id , props.count); 
  return (
  <div class="a-box nooverwrite">
     <Link to={`/product/${props.id}`}>
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src=
         {require(`../../../pictures/${props.pic}`)}
        
        />
      </div>
    </div>
  </div>
  </Link>
  <div class="text-container">
    <h3>{props.title}</h3>
    <div>${props.price}</div>
    <div className = "nooverwrite">
      {props.description}
  </div>
  {props.count > 0 ?
                <div className="stockStatus">In Stock : {props.count}</div>
                :<div className="out">out of Stock</div>} 
  
  <div ><Form max ={props.count } onAddToCart ={addHandler}/>
  <span className='Rate'><Rating  value = {avg} text= {` ${props.number ? props.number : 0}  reviews` }/></span>
  
  </div>          
</div>
</div>
  );
}