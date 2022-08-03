import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
import IMG2 from "../pictures/2.jpg"
import "./home.css";
import IMG3 from "../pictures/3.jpg"
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <>
            <header className="K">
                <form className="IN">
                <div className="div1">
                    <CartButton >  </CartButton>
                    <label> <NavLink to='/signin' >Log In</NavLink> </label>
                    <label> <NavLink to='/signup' >Sign Up</NavLink> </label>
                </div>
                </form>

                <form className=" form3">
                    <form className="form4">
                        <img className='IMG2' src={IMG2} ></img>
                        <div className="div2">
                            <h2> New Summer Collection!! </h2>
                            <label> The largest range of LUXURY</label>
                            <Link to ="/A"> <button> Shop Now!</button></Link>
                        </div>
                </form>



                        <img className="IMG3" src={IMG3}></img>
                </form>

            </header>
        </>
    );
}

export default Header;