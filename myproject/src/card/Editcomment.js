import axios from "axios";
import React, { useState, useRef } from "react";
import './ProDetails.css'
import { ToastContainer , toast } from "react-toastify";

const Editcomment = (props) =>{
   

    const[Loading , setLoading] = useState(false);
    const [rate , setRate] = useState(props.rate);
    let reviewsRef  = useRef();

    const [newComment , setNewComment] = useState(props.comment)
    const rated = (e) =>{
        props.setRating(e);
        setRate(e);
    }


    const commented = (e) => {
        props.setComment(e);
        setNewComment(e);
    }
    const EditHandle = async (e) =>{
        e.preventDefault();

        const newDataComment = {
            comment : newComment,
            rating  : rate,

        }
        console.log("Here new " , newDataComment);
        try {
            setLoading(true);
        const {data} = await axios.put( `http://localhost:8080/comments/${props.c_id}`,
         newDataComment);

         setLoading(false);

         console.log("xd : ", data);
   
       
         <ToastContainer />;
         props.EditComments(
            data
         )
        
        }
        catch (e) {
            setLoading(false);
            toast.error(e);
          }



    }


    return(<>
    {/* <div class="cardc v-card v-sheet theme--light elevation-2">
            <div class="headercomment">
              
                <div>
              <span class="displayName titlec">{props.Name} </span>{" "}
              <span class="displayName caption date"> 22/7</span>
              </div>
             
              
              
            </div> */}

            <form onSubmit={EditHandle} >
            <div class="form-group">
                  <label>Your rating</label>
                  <div class="reviews-counter">
                    <div
                      class="rate"
                      onChange={(event) => {
                        console.log(event.target.value);
                       rated(event.target.value);
                      }}
                      
                    >
                      <input type="radio" id="star5" name="rate" value="5" checked={rate == 5 ? 'checked' : ''} />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" checked={rate == 4 ? 'checked' : ''}  />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" checked={rate == 3 ? 'checked' : ''}  />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" checked={rate == 2 ? 'checked' : ''}  />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" checked={rate == 1 ? 'checked' : ''}  />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                  </div>
                </div>
                <br></br>

                <div class="form-group">
                    
                  <label>Your comment: </label>
                  <br></br>
                  <br></br>
                  <textarea
                   defaultValue={props.comment}
                    placeholder="Leave a comment here"
                    //value={props.comment}
                    onChange={(e) => commented(e.target.value)}
                    className="form-control"
                    rows="5"
                    cols="100"
                  ></textarea>
                  <div><button >Save</button> <button type="button" onClick={(e) => {props.onCancel()}}>Cancel</button></div>
                  <hr></hr>
                </div>
          {/* </div> */}
          </form>
    </>)

}

export default Editcomment;