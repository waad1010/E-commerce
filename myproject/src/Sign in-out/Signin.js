import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sign.css"
import SigninPic from "../pictures/13.webp"

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    //password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (

        <div className='Main'>
        <header >
                <img className='IMG1' src={SigninPic}></img>
                <div className='hey'> <strong>Welcome Again!! </strong> </div>

                <form className='form2'>

                    <label className='signinlabel' id="l1">Email:</label>
                    <input type="email" value={email} required onChange={(e) => { handleEmail(e) }} />
                    <label className='signinlabel' id="l2">Password:</label>
                    <input type="password" value={password} required onChange={(e) => { handlePassword(e) }} /> <br/>
                     <button type="submit" className='b1'> Submit</button> 
                    <Link to ="/Signup">Create new account?</Link>
                        
                </form>

                
        </header> 
        </div>
    )

}
export default Signin;
