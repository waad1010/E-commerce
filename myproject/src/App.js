import Signup from './Sign in-out/Signup';
import Signin from './Sign in-out/Signin';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Home from './home page/Home';
import A from './card/A';

import Cardpay from './security payment/Cardpay';



function App() {

  return (
    <Routes>
    <Route path='/' element ={<Home />}></Route>
    <Route path ='/Signin' element={<Signin />} />
    <Route path = '/Signup' element = {<Signup />} />
    <Route path = '/A' element ={<A/>} />
    <Route path = '/payment' element ={<Cardpay/>} />
    </Routes>
  );
}

export default App;