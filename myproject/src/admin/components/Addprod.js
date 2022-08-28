import React, { useState } from "react";
import "./Addcat.css";
import axios from "axios";
import { toast } from "react-toastify";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Addprod = (props) => {
  const [title, setTitle] = useState();
  const nav = useNavigate();
  const [Desc, setDesc] = useState();
  const [Img, setImg] = useState();
  const [Price, setPrice] = useState();
  const [catID, setCATID] = useState();

  const [countinstock, setCountINStock] = useState(0);
  const [Uploading ,setUploading] = useState(false);
  const AddHandler = (e) => {
    e.preventDefault();

    const datatoadd = {
      title,
      Price,
      Desc,
      countinstock,
      catID,
      Img,
    };
    console.log("to be" , datatoadd);

    axios
    .post("http://localhost:8080/addprod", datatoadd)
    .then((res) => {
      
      setDesc('');
      // setImg('null');
      setCATID('')
      setCountINStock(0)
      setPrice();
    
      setTitle('');
      toast.success("A new Product is added!");
      // nav("/", { replace: true });
 
    })
    .catch (e =>{
      console.log(e)
      toast.error(e);
    })
  };

  const uploadFileHandler = async (e) => {
    console.log("ASDASD" , e.target.files[0])
 
    const file = e.target.files[0];
    
    const formData = new FormData();
  
    formData.append("img", file);

    setUploading(true);
    try {   
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      console.log("xd");
      const { data } = await axios.post("http://localhost:8080/api/upload", formData, config);
      const newData = data.split("\\");
      console.log("ADSAD " , newData);
      setImg(newData[2]);
      setUploading(false);
      console.log("ur data" , Img , newData[2]);
      

    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };
  return (
    <div class="addcat">
      <div class="col-md-12">
        <form onSubmit={AddHandler}>
          <span className="mrgn">
            <button style={{ border: "none" }} onClick={props.notClicked}>
              <i
                class="far fa-window-close"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </button>
          </span>

          <h1 className="addhead"> ADDING NEW Product</h1>

          <fieldset>
            <label for="name">Title:</label>
            <input type="text" 
             value={title}
             onChange={(e) => {
               setTitle(e.target.value);
             }}
            
            id="name" name="user_name" />
            





            <label for="price">Price:</label>
            <input type="number" 
             value={Price}
             onChange={(e) => {
               setPrice(e.target.value);
             }}
            
            id="price" name="price" />




            <label for="Description">Description:</label>
            <textarea id="Description" value={Desc}
             onChange={(e) => {
               setDesc(e.target.value);
             }} name="Description"></textarea>


<label for="count">Count in STOCK:</label>
            <input type="number" 
             value={countinstock}
             onChange={(e) => {
               setCountINStock(e.target.value);
             }}
            
            id="count" name="count" />


            
<label for="CATID">It belongs to Category ID:</label>
            <input type="number" 
             value={catID}
             onChange={(e) => {
               setCATID(e.target.value);
             }}
            
            id="CATID" name="CATID" />




            <label for="img">Product image :</label>
            <input type="file" 
            
           
             onChange={(e) => {
                uploadFileHandler(e)
             }}
            accept="image/*" id="img" name="img" />
          </fieldset>

          <button type="submit" className="savebutton">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addprod;
