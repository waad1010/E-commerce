import React from "react";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import  "./HeaderButton.module.css";

const Navbar = (props) => {
  return (
    <div className="NB" >
      <CartButton show={props.show} > </CartButton>
       <label className="hiii">
        
         <NavLink to="/signin" className="si"> Log In</NavLink>
        <NavLink to="/signup" className="su" > Sign Up</NavLink>

      </label>
    </div>
  );
};

export default Navbar;
