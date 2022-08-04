
import A from './card/A';
import Signup from "./Sign in-out/Signup";
import Signin from "./Sign in-out/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./home page/Home";
import Cardpay from "./security payment/Cardpay";
import React, { useState } from "react";
import { Prov } from "./store/cart-context";
import Navbar from "./home page/Navbar";
import Cart from "./cart/Cart";

function App() {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);};
  const hidden = () => {
    setClicked(false); };

  return (
    <>
      <Prov>
        {clicked && <Cart onClose={hidden} />}
        <Navbar show={clickHandler} />
      </Prov>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/A" element={<A />} />
        <Route path="/payment" element={<Cardpay />} />
      </Routes>
    </>
    
  );
}


export default App;
