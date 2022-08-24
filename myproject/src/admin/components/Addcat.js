import React, { useState } from "react";
import "./Addcat.css";
import axios from "axios";
const Addcat = (props) => {
  const [title, setTitle] = useState();
  const [Desc, setDesc] = useState();
  const [Img, setImg] = useState();
  const [Uploading ,setUploading] = useState(false);
  const AddHandler = (e) => {
    e.preventDefault();

    const datatoadd = {
      title,
      Desc,
      Img,
    };

    axios
    .post("http://localhost:8080/addcategory", datatoadd)
    .then((res) => {
      
      setDesc('')
      setImg('')
      setTitle('')
    })
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImg(data);
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };
  return (
    <div class="addcat">
      <div class="col-md-12">
        <form>
          <span className="mrgn">
            <button style={{ border: "none" }}>
              <i
                class="far fa-window-close"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
            </button>
          </span>

          <h1 className="addhead"> ADDING NEW CATEGORY</h1>

          <fieldset>
            <label for="name">Title:</label>
            <input type="text" 
             value={title}
             onChange={(e) => {
               setTitle(e.target.value);
             }}
            
            id="name" name="user_name" />

            <label for="Description">Description:</label>
            <textarea id="Description" value={Desc}
             onChange={(e) => {
               setDesc(e.target.value);
             }} name="Description"></textarea>



            <label for="img">Category image :</label>
            <input type="file" 
            
            value={Img}
             onChange={(e) => {
                uploadFileHandler(e.target.value)
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

export default Addcat;
