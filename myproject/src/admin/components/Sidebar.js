import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Adminhome.css";
import { useContext } from "react";

import AuthContext from "../../store/auth-context";
const Sidebar = () => {
  const authLogin = useContext(AuthContext);
  const nav = useNavigate;


  const logoutAdmin = () => {
   
    authLogin.logout();
    setTimeout(()=> {
 nav('/signin')
    } , 300)
   
  }
  return (
    <>
      <input type="checkbox" id="nav-toggle" />

      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span class="lab la-accusoft"></span>
            <span id="kleenpulse">ADMIN</span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul style={{ paddingLeft: "10px" }}>
            <li>
              <NavLink to="/" >
                <span class="fas fa-braille"></span>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="users" className={(navD) => navD.isActive ? 'ActiveLink' :''}>
                <span>
                  <i class="fas fa-users"></i>
                </span>
                <span>Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="categories" className={(navD) => navD.isActive ? 'ActiveLink' :''}>
                <span class="fas fa-clone"></span>
                <span>Categories</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="products" className={(navD) => navD.isActive ? 'ActiveLink' :''} >
                {" "}
                <span class="fas fa-tshirt"></span>
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="orders" className={(navD) => navD.isActive ? 'ActiveLink' :''}>
                <span class="fas fa-shopping-bag"></span>
                <span>Orders</span>
              </NavLink>
            </li>


        
        
               
           
            
          </ul>      <span className = "logout" onClick={logoutAdmin}>
                <span class="	fas fa-sign-out-alt"></span>
                <span>
                  LOG OUT
                </span>
                </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
