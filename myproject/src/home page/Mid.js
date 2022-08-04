import React from "react";
import IMG2 from "../pictures/2.jpg"
import "./home.css";
import IMG3 from "../pictures/3.jpg"
import { Link } from "react-router-dom";
const Mid = () => {

    return (
        <>
            <header className="K">
                

                <form className=" form3">
                    <form className="form4">
                        <img className='IMG2' src={IMG2} ></img>
                        <div className="div2">
                            <h2> New Summer Collection!! </h2>
                            <label> The largest range of LUXURY</label>
                            <Link to ="/all"> <button> Shop Now!</button></Link>
                        </div>
                </form>



                        <img className="IMG3" src={IMG3}></img>
                </form>

            </header>
        </>
    );
}

export default Mid;