import "./Comment.css";
import Rating from "./Rating";
import axios, { AxiosError } from "axios";
import Spinner from "../home page/Spinner";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Comment = (props) => {
  console.log("comment ", props.c_id);
  var userInfo= JSON.parse(localStorage.getItem("USER"));
  
  const [Loading, setLoading] = useState(false);

  const DeleteHandle = (e) => {
    setLoading(true);

    console.log("cid : ", props.c_id);

    axios
      .delete(`http://localhost:8080/comments/${props.c_id}`)
      .then((res) => {
        console.log(res.data.c_id);
        setLoading(false);
       
      })

      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data);
      });

    props.onDelete({c_id :  props.c_id , rating : props.rating});
  };

  return (
    <div class="cardc v-card v-sheet theme--light elevation-2">
      <div class="headercomment">
        {/* <div  class="v-avatar avatar" style="height: 50px; width: 50px;">
                <img  src="" /></div> */}
        <div>
          <span class="displayName titlec">{props.Name} </span>{" "}
          <span class="displayName caption date"> 22/7</span>
        </div>
        {console.log("here we will know " , props.u_id , userInfo.Id)}
          {userInfo && userInfo.Id == props.u_id ?

        <div>
          <span className="deletespan">
            {" "}
            <button className="edit" onClick={(e) =>props.onEdit(e,props.c_id)}>Edit</button>
          </span>

          <span className="deletespan">
            <button onClick={DeleteHandle} className="delete"></button>
          </span>
        </div>
        : <div></div>
}
      </div>
      <div className="rated">
        <Rating value={props.rating} />
      </div>
      <div class="wrapper comment">
        <p>{props.comment}</p>
      </div>
      <div class="actions"></div>
      <div class="v-dialog__container"></div>
    </div>
  );
};

export default Comment;
