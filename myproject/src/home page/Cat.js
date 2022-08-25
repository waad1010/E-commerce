import React from "react";
import { Link } from "react-router-dom";
import './Cat.css'

const Cat = (props) => { 

 const { id , title, desc , img} = props;
 
//  console.log("THE ID : " + id);
console.log("your img " + img);



    return (
        <Link className = "card" to= {`./${id}/items`}>
    
      <div class="imgBx">
          <img src= {require(`../../../pictures/${img}`) }alt="images" />
      </div>
      <div class="details">
        <br></br>
          <h2 >{title}<br/><span></span></h2>
      </div>
    
    </Link>
)
}

export default Cat;