import React from "react";
import CartButton from "./CartButton";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={styles.navbar }>
      <ul className={styles.container}>  <li> <CartButton show={props.show}> </CartButton></li>
     
      {/* <NavLink to="/signin">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to='/' >Home</NavLink> */}
      <span className={styles.sign}>
        <li><NavLink to='/' >Home</NavLink></li> 
       <li><NavLink to="/signin">Log In</NavLink></li> 
        <li><NavLink to="/signup">Sign Up</NavLink></li>
       
      </span></ul>
    
    </div>
  );
};

export default Navbar;
