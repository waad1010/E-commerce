import Signup from "./Sign in-out/Signup";
import Signin from "./Sign in-out/Signin";
import { Routes, Route  , Navigate} from "react-router-dom";
import Home from "./home page/Home";
import A from "./card/A";
import FlashMessage from "react-flash-message";
import Cardpay from "./security payment/Cardpay";
import React, { useState , useContext } from "react";

import { Prov } from "./store/cart-context";
import Navbar from "./home page/Navbar";
import Cart from "./cart/Cart";
import Spec from "./home page/Spec"
import Product from "./card/Product";
import Searchcont from "./Search/Searchcont";

import AuthContext from "./store/auth-context";
import Error from './Flash/Error'

function App() {

  const authSign = useContext(AuthContext)

  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
    
  
    
  };

  const hidden = () => {
    setClicked(false);
  };
  return (
    <>
     
      <Prov>
     
        {clicked && <Cart onClose={hidden} />}
        <Navbar show={clickHandler} />
        

        
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Searched" element={<Searchcont />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/:category/items" element={ <Spec />}/>
        <Route path="/all" element={<A />} />
       <Route path="/payment" element={authSign.isLoggedIn ? <Cardpay /> : (<><FlashMessage Duration={8000}>
            <Error text="You have to log in to order!" />
          </FlashMessage>
          {/* <Navigate to="/signin" replace /> */}
          </>)} />
       <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>

       
      </Prov>
    </>
  );
}

export default App;
