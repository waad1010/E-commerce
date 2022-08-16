import SECURE from "../pictures/Cats/15.webp";
import "./cardpay.css";
import axios, { AxiosError } from "axios";
import Spinner from "../home page/Spinner";

import React, { useState, useContext } from "react";

import FlashMessage from "react-flash-message";
import { useNavigate } from "react-router-dom";
import Success from "../Flash/Success";
import Error from "../Flash/Error";
import AuthCart from "../store/cart-context";

const Cardpay = () => {
  const authCart = useContext(AuthCart);
  

  const [cardnum, setcardnum] = useState("");
  const [loading, setLoading] = useState(false);

  const [pin, setpin] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const [done, setDone] = useState({ status: null });
  console.log(authCart.items);
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

 
  const clear = () => {
    setDone({ status: null });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <img className="Imagepay" src={SECURE}></img>
     
      <div className="Payment">
        <div className="CheckHeader">
          {" "}
          <strong>Check Out</strong>{" "}
        </div>

        <form className="pay" >
          <div className="l2">
            <label>Card Number: </label>
            <input
              type="text"
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
              type="text"
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
              type="text"
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
  );
};

export default Cardpay;
