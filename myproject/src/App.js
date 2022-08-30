import Signup from "./Sign in-out/Signup";
import Signin from "./Sign in-out/Signin";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./home page/Home";
import A from "./card/A";
import Cardpay from "./security payment/Cardpay";
import React, { useState, useContext } from "react";
import Adminhome from "./admin/Adminhome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Prov } from "./store/cart-context";
import Navbar from "./home page/Navbar";
import Cart from "./cart/Cart";
import Spec from "./home page/Spec";
import Searchcont from "./Search/Searchcont";
import AuthContext from "./store/auth-context";
import Error from "./Flash/Error";
import ProDetails from "./card/ProDetails";
import Footer from "./home page/Footer";

function App() {
  const authSign = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  var userInfo = JSON.parse(localStorage.getItem("USER"));
  const isAdmin = userInfo ? userInfo.FName === "Admin" : false;

  const red = () => {
    toast.error("You have to log in first");
  };

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
        {!isAdmin && <Navbar show={clickHandler} />}

        {isAdmin ? (
          <Routes>
            <Route path="/*" element={<Adminhome />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Searched" element={<Searchcont />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/:category/items" element={<Spec />} />
            <Route path="/all" element={<A />} />
            <Route path="/product/:p_id" element={<ProDetails />}></Route>

            <Route
              path="/payment"
              element={
                authSign.isLoggedIn ? (
                  <Cardpay />
                ) : (
                  <>
                    <Navigate to="/Signin" replace />
                  </>
                )
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}

        {!isAdmin && <Footer />}
      </Prov>
      <ToastContainer />
    </>
  );
}

export default App;
