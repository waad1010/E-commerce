import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";  
import SigninPic from "../staticpic/Cats/13.webp";

import axios from "axios";
import AuthContext from "../store/auth-context";

import Success from "../Flash/Success";
import Error from "../Flash/Error";
import { Typewriter } from 'react-simple-typewriter'
import { toast } from "react-toastify";
import LoadingSpinner from "../UI/LoadingSpinner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState({ status: null });
  const nav = useNavigate();
  const AuthSign = useContext(AuthContext);
  //email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  //password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const SubH = (e) => {
    e.preventDefault();


    //email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    //password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const UserData = {
      email,
      password,
    };

    axios
      .post("http://localhost:8080/signin", UserData)
      .then((res) => { 
        setPassword("");
        setEmail("");
        console.log(res.data.Id);
        AuthSign.login(res.data);
        // localStorage.setItem("USER", JSON.stringify(res.data));
        toast.success("Successfuly Logged in!");
      
       setDone({ status: 'Done' });
       
       
         nav("/", { replace: true });
    
       
       
       
      })
      .catch((e) => {
        setDone({ status: e.response.data });
        toast.error(e.response.data);
        console.log(e);
      });
      clear();
  };
  const clear = () =>{
    console.log
    (done.status)
    setDone({status:null})
  }


  return (
    <div className="Main">
      
      <header>
       
        <img className="IMG1" src={SigninPic}></img>
       
        <div className="hey">
        {/* {done.status === 'Done' && (
          
            <Success text="Successfuly Logged in!" />
      
        )}
        {done.status && done.status !== "Done" && (
      
            <Error text={done.status} />
         
        )} */}
         <strong className="titlex">
                    <Typewriter
                        words={['Welcome Again!']}
                        typeSpeed={180}
                        
                    // loop={1000}
                    // cursor
                    // cursorStyle='.'
                    // deleteSpeed={50}   
                    // delaySpeed={10000}
                    />
                </strong> 
        </div>

        <form className="form2" onSubmit={SubH}>
          <label className="signinlabel" id="l1">
            Email:
          </label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmail(e);
            }}
          />
          <label className="signinlabel" id="l2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePassword(e);
            }}
          />{" "}
          <br />
          <button type="submit" className="b1">
            {" "}
            Submit
          </button>
       
          <Link to="/Signup">Create new account?</Link>
        </form>
      </header>
    </div>
  );
};
export default Signin;
