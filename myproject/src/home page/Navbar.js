import React from "react";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import  "./HeaderButton.module.css";

const Navbar = (props) => {
  return (
<<<<<<< HEAD
    <div className="NB" >
      <CartButton show={props.show} > </CartButton>
       <label className="hiii">
        
         <NavLink to="/signin" className="si"> Log In</NavLink>
        <NavLink to="/signup" className="su" > Sign Up</NavLink>

      </label>
=======
    <div className="IN">
      <CartButton show={props.show}> </CartButton>
      <span className={styles.sign}>
        <NavLink to="/signin">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to='/' >Home</NavLink>
      </span>
>>>>>>> f0fb6f4f813af1959b4c3b3d6c29b2694042a5eb
    </div>
  );
};

export default Navbar;
