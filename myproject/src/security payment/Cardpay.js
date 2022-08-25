import SECURE from "../staticpic/Cats/15.webp";
import "./cardpay.css";
import axios, { AxiosError } from "axios";
import Spinner from "../home page/Spinner";
import LoadingSpinner from '../UI/LoadingSpinner'
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import AuthContext from "../store/auth-context";
import AuthCart from "../store/cart-context";

const Cardpay = () => {
  const ctx = useContext(AuthCart);
  var userInfo= JSON.parse(localStorage.getItem("USER"));
  

  const [cardnum, setcardnum] = useState("");
  const [loading, setLoading] = useState(false);

  const [pin, setpin] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const [done, setDone] = useState({ status: null });
  console.log(ctx.items);
  //Num
  const handlenum = (e) => {
    setcardnum(e.target.value);
  };
  //pin
  const handlepin = (e) => {
    setpin(e.target.value);
  };
  const handlecountry = (e) => {
    setcountry(e.target.value);
  };
  const handleaddress = (e) => {
    setaddress(e.target.value);
  };



  // when click on submit button .
  const handleSubmit = (e) => {
   console.log(ctx.items);
    e.preventDefault();

    const OrderData = {
      total_price : ctx.totalAmount,
      u_id : userInfo.Id,
      address,
      cardnum,
      data : ctx.items

  }
    

    setLoading(true);
    axios
    .post("http://localhost:8080/payment", OrderData)
    .then((res) => {
      
      setLoading(false); 
      toast.success("Successfuly Ordered!");

      setpin("");
      setaddress("");
      setcardnum("");
      setcountry(""); 
    
    })
      


    .catch (error => {
      setLoading(false);
      
      toast.error(error.response.data)
  })
        
      clear();
 
   
  };
  const clear = () => {
    setDone({ status: null });
  };

  // if (loading) {
  //   return <LoadingSpinner />
  // }

  return (
    
    loading ? <LoadingSpinner /> : ( <>
      <img className="Imagepay" src={SECURE}></img>
     
      <div className="Payment">
        <div className="CheckHeader">
          {" "}
          <strong>Check Out</strong>{" "}
        </div>

        <form className="pay" onSubmit={handleSubmit}>
          <div className="l2">
            <label>Card Number: </label>
            <input
              type="number"
              value={cardnum}
              required
              onChange={(e) => {
                handlenum(e);
              }}
            />
          </div>

          <div className="l2">
            <label>PIN code:</label>
            <input
              type="number"
              value={pin}
              required
              onChange={(e) => {
                handlepin(e);
              }}
            />
          </div>

          <div className="l2">
            <label>Phone Number:</label>
            <select
              className="sel1"
              type="number"
              value={country}
              required
              onChange={(e) => {
                handlecountry(e);
              }}
            >
              <option value="0">+961</option>
              <option value="1">+962</option>
              <option value="2">+970</option>
            </select>
            <input type="number" />
          </div>

          <div className="l2">
            <label>Country: </label>
            <select
              className="sel2"
              type="text"
              value={country}
              required
              onChange={(e) => {
                handlecountry(e);
              }}
            >
              <option value="0">Lebanon</option>
              <option value="1">Jordan</option>
              <option value="2">Palestine</option>
            </select>
          </div>

          <div className="l2">
            <label>Address: </label>
            <input
              type="text"
              value={address}
              required
              onChange={(e) => {
                handleaddress(e);
              }}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
      </>
    )
            
    
  );
};

export default Cardpay;
