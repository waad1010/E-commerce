
import axios, { AxiosError } from "axios";
import Spinner from "../home page/Spinner"

import LoadingSpinner from "../UI/LoadingSpinner";
import React, { useState } from 'react';
import "./Sign.css"

import Fader from './Fader';

import { useNavigate } from "react-router-dom";
import Success from "../Flash/Success";
import Error from "../Flash/Error"
import { toast } from "react-toastify";

const Signup = () => {
  const [firstname, setFN] = useState("");
  const [last_name, setLN] = useState("");
  const [done , setDone] = useState({status : null}); 
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [loading , setLoading] = useState(false);
  
  //FN
  const handleFNChange = (e) => {
    setFN(e.target.value);
  };

  //LN
  const handleLNChange = (e) => {
    setLN(e.target.value);
  };

  //age
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  //email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //confirm password
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  // when click on submit button .
  const handleSubmit = (e) => {
   
    e.preventDefault();

    const UserData = {
      firstname,
      last_name,
      email,
      age,
      password,
    };

    setLoading(true);
    axios
    .post("http://localhost:8080/signup", UserData)
    .then((res) => {
      
      setLoading(false); 
      toast.success("Successfuly Registered!");
      setAge("");
      setFN("");
      setConfPassword("");
      setLN("");
      setPassword("");
      setEmail("");  
      setDone({status : 'Done'})
    })
      


    .catch (error => {
      setLoading(false);
      console.log(error.response.data);
      setDone ({status : error.response.data});
      
     
     

  })
        
          










      // sessionStorage.setItem("USER", JSON.stringify(res.data));
      // var user = JSON.parse(sessionStorage.getItem("USER"));
      // console.log(user.last_name);
      // //   sessionStorage.removeItem('USER')
      // //   const  h = useNavigate ();
      // //   h('/')
      clear();
 
   
  };
  

  const showH = async () => {
    const res = await axios.get("http://localhost:8080/ok");

    console.log(res.data);
  };
  const clear = () =>{
    setDone({status:null})
  }

  return (
    <div className="we">
   
      <header className="we-header">
      <Fader/>
        {/* {done.status === 'Done' && (
        
          <Success text = "Successfuly Registered!" />
    
        )}
        {
          done.status && done.status !== 'Done' && (
            <Error text={done.status} />
        
          )} */}
        
        {/* <img className="IMG" src={Signupimg}></img> */}
       
      
        <form
          className="form1"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
         
          <h1 className="t"> Sign Up </h1>

          <div className="containerx">
            <div className="labelss">
              <label> First Name: </label>
              <input
                type="text"
               
                className="input1"
                required
                 value={firstname}
                onChange={(e) => {
                  handleFNChange(e);
                }}
              />
            </div>

            <div className="labelss">
              <label>Last Name:</label>
              <input
                type="text"
                value={last_name}
                required
                onChange={(e) => {
                  handleLNChange(e);
                }}
              />
            </div>

            <div className="labelss">
              <label> Email:</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>
            <div className="labelss">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
            </div>
            <div className="labelss">
              <label>Confirm Password: </label>
              <input
                type="password"
                value={confPassword}
                required
                onChange={(e) => {
                  handleConfPasswordChange(e);
                }}
              />
            </div>
            <div className="labelss">
              <label> Age: </label>
              <input
                type="Date"
                value={age}
                required
                onChange={(e) => {
                  handleAgeChange(e);
                }}
              />
            </div>
          </div>

          {loading &&  <p className="loadtitle"><LoadingSpinner /></p>}
           {!loading && <button className="xd" type="submit">
           
         Submit
          </button>

}
        </form>
      </header>
    </div>
  );
};

export default Signup;
