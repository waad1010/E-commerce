import React from "react";
import "./Comment.css";
import Rating from "./Rating";

const Comment = () => {
  return (
   
          <div class="cardc v-card v-sheet theme--light elevation-2">
            <div class="header">
              {/* <div  class="v-avatar avatar" style="height: 50px; width: 50px;">
                <img  src="" /></div> */}
              <span class="displayName titlec">John Doe </span>{" "}
             
              <span class="displayName caption">22/7/2022  <div className="rated"><Rating value={2} /></div></span>
              
            </div>

            <div class="wrapper comment">
                
              <p>
                Fusce sodales magna id porta egestas. Nulla massa est, hendrerit
                nec auctor vitae, porta ut est.
              </p>
            </div>
            <div class="actions"></div>
            <div class="v-dialog__container"></div>
          </div>
        
          
        
     
  );
};

export default Comment;
