<<<<<<< HEAD
import Signup from './Sign in-out/Signup';
import Signin from './Sign in-out/Signin';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Home from './home page/Home';
import A from './card/A';
import Admin from './Admin/Admin';
import Cardpay from './security payment/Cardpay';


=======
import Signup from "./Sign in-out/Signup";
import Signin from "./Sign in-out/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./home page/Home";
import A from "./card/A";
import Cardpay from "./security payment/Cardpay";
import React, { useState } from "react";
import { Prov } from "./store/cart-context";
import Navbar from "./home page/Navbar";
import Cart from "./cart/Cart";
<<<<<<< HEAD
import Spec from "./home page/Spec"

import Product from "./card/Product";
=======
>>>>>>> eb31a6d5ac4ca54f1b765609bde98faba75971a1
>>>>>>> 6207ec98b3806a9fb94c23e6c9fdc82b4eebf6d8

function App() {

  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
  };

  const hidden = () => {
    setClicked(false);
  };
  return (
<<<<<<< HEAD
    <Routes>
    <Route path='/' element ={<Home />}></Route>
    <Route path ='/Signin' element={<Signin />} />
    <Route path = '/Signup' element = {<Signup />} />
    <Route path = '/A' element ={<A/>} />
    <Route path = '/payment' element ={<Cardpay/>} />
    <Route path = '/admin' element ={<Admin/>} />

    </Routes>
=======
    <>
      <Prov>
        {clicked && <Cart onClose={hidden} />}
        <Navbar show={clickHandler} />
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/:category/items" element={ <Spec />}/>
        <Route path="/all" element={<A />} />
        <Route path="/payment" element={<Cardpay />} />
      </Routes>
      </Prov>
    </>
>>>>>>> eb31a6d5ac4ca54f1b765609bde98faba75971a1
  );
}

export default App;
