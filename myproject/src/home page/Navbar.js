import React from "react";
import CartButton from "./CartButton";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="IN">
      <CartButton show={props.show}> </CartButton>
      <span className={styles.sign}>
        <NavLink to="/signin">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to='/' >Home</NavLink>
      </span>
    </div>
  );
};

export default Navbar;
