import React from "react";
import CartButton from "./CartButton";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import IMG from '../pictures/logo2.jpg'

const Navbar = (props) => {
  return (
    <div className={styles.navbar }>
      <div className={styles.container}> 
      <NavLink className = {styles.over}to='/' >
      <div className={styles.logocont}></div>


        </NavLink> 
      
        
      <span className={styles.sign}>
      
       
       <div><NavLink to="/signin">Log In</NavLink></div> 
        <div><NavLink to="/signup">Sign Up</NavLink></div>
        <div> <CartButton show={props.show}> </CartButton></div>
       
      </span></div>
    
    </div>
  );
};

export default Navbar;
