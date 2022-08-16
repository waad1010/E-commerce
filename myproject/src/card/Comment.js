import React from "react";
import "./Comment.css";
import Rating from "./Rating";

const Comment = (props) => {
  return (
   
          <div class="cardc v-card v-sheet theme--light elevation-2">
            <div class="header">
              {/* <div  class="v-avatar avatar" style="height: 50px; width: 50px;">
                <img  src="" /></div> */}
              <span class="displayName titlec">{props.Name} </span>{" "}
             
              <span class="displayName caption date">22/7/2022  <div className="rated">
                <Rating value={props.rating}/></div></span>
              
            </div>

            <div class="wrapper comment">
                
              <p>
                {props.comment}
              </p>
            </div>
            <div class="actions"></div>
            <div class="v-dialog__container"></div>
          </div>
        
          
        
     
  );
};

export default Comment;
