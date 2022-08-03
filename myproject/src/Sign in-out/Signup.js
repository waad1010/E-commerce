
import React, { useState } from 'react';
import "./Sign.css"
import Signupimg from "../pictures/14.webp"

 

const Signup = () => {
    const [firstname, setFN] = useState('');
    const [last_name, setLN] = useState('')
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    //FN
    const handleFNChange = (e) => {
        setFN(e.target.value); }

    //LN
    const handleLNChange = (e) => {
        setLN(e.target.value);}

    //age
    const handleAgeChange = (e) => {
        setAge(e.target.value);}

    //email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);}

    //password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);}

    //confirm password
    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value); }

    // when click on submit button .
    const handleSubmit = (e) => {
        if (password !== confPassword) {
            console.log("password Not Match");
        } else {
            console.log('A form was submitted with Name :"' + firstname + last_name +
                '" ,Age :"' + age + '" and Email :"' + email + '"');
        }
        e.preventDefault();
    }

    return (
        <div className="App">
            <header className="App-header">
                <img className='IMG' src= {Signupimg} ></img>
                
                <div class='hi'>Welcome to our online woman Shop! </div>
                <form className='form1' onSubmit={(e) => { handleSubmit(e) }}>
                    <h1 className='t'> Sign Up </h1>

                    <div className='container'>
                            <div className='labelss'>
                                <label > First Name: </label>
                                <input type="text" value={firstname} className="input1" required onChange={(e) => { handleFNChange(e) }} />
                            </div>

                            <div className='labelss'>
                                <label >Last Name:</label>
                                <input type="text" value={last_name} required onChange={(e) => { handleLNChange(e) }} /> 
                            </div>
                            
                            <div className='labelss'>
                                <label> Email:</label>
                                <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} />
                            </div>
                            <div className='labelss'>
                                <label>Password:</label> 
                                <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /> 
                            </div>
                            <div className='labelss'>

                                <label>Confirm Password: </label>
                                <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /> 
                            </div>
                            <div className='labelss'>
                                <label > Age:</label> 
                                <input type="text" value={age} required onChange={(e) => { handleAgeChange(e) }} />
                            </div>
                    </div>

                    <button type="submit"> Submit</button>

                </form>
            </header>
        </div>
    );
}

export default Signup;