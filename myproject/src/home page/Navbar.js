import React from "react";
import CartButton from "./CartButton";
import styles from "./Navbar.module.css";
import { NavLink ,useNavigate } from "react-router-dom";
import Search from "../Search/Search";

import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Navbar = (props) => {
  const authLogin = useContext(AuthContext);
  const isLoggedIn = authLogin.isLoggedIn;
  const nav = useNavigate();
  var user = JSON.parse(localStorage.getItem("USER"));

  const logoutHandler = () => {
   
    authLogin.logout();
    setTimeout(()=> {
 nav('/signin')
    } , 300)
   
  }
  return (
    <div className={styles.navbar }>
      <div className={styles.container}> 
      <NavLink className = {styles.over}to='/' >
      <div className={styles.logocont}></div>


        </NavLink> 
        <div >{isLoggedIn && (
  
        
        <div className={styles.welcome}>Welcome {user.FName} </div>
         ) }
       </div>
        
      
        
      <span className={styles.sign}>
      
       {!isLoggedIn && (
       <div><NavLink to="/signin">Log In</NavLink></div> )}

       {/* {isLoggedIn && (<div>Profile</div>)} */}
       {!isLoggedIn && (
        <div><NavLink to="/signup">Sign Up</NavLink></div> )}

        {isLoggedIn && (
        <NavLink onClick={logoutHandler} to='/'>Log out</NavLink> )}

        <div> <CartButton show={props.show}> </CartButton></div>
       
      </span></div>
    
    </div>
  );
};

export default Navbar;
