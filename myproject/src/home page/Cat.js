import React from "react";
import { Link } from "react-router-dom";
import IMG4 from "../pictures/4.jpg"
import IMG5 from "../pictures/5.avif"
import IMG6 from "../pictures/6.webp"
import IMG7 from "../pictures/7.jpg"
import IMG8 from "../pictures/8.jpg"
import IMG9 from "../pictures/9.webp"
import IMG10 from "../pictures/10.webp"
import IMG11 from "../pictures/11.jpg"
import IMG12 from "../pictures/12.jpg"
import './Cat.css'

const Cat = (props) => { 

 const { id , title, desc} = props;
 console.log("THE ID : " + id);
 const pic = `IMG${id + 3}`;


    return (
        <Link to= {`./${id}/items`}>
    <div class="card">
      <div class="imgBx">
          <img src={IMG10} alt="images" />
      </div>
      <div class="details">
        <br></br>
          <h2 >{title}<br/><span></span></h2>
      </div>
    </div>
    </Link>
)
}

export default Cat;