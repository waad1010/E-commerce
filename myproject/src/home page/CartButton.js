import React from "react";
import "./home.css"
import {FaShoppingBag} from 'react-icons/fa';
import { Link } from "react-router-dom";


const CartButton = () => {


  return (<>

    <button><Link to='/payment'>

      
      <span><FaShoppingBag /></span>
      <span> 0 </span></Link>

    </button>

  </>);


}

export default CartButton; 