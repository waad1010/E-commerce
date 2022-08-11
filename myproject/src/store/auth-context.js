import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
 token : '',
 isLoggedIn : false,
 login : (token) => {},
 logout : () => {}, 
 

}); 

export const AuthContextProvider = (props) => {
   
   const intialToken = localStorage.getItem('USER'); 
    const [token, setToken] = useState(intialToken);

    const userIsLoggedIn = token===null?false : true;

 
    const loginHandler = (token) => {
        
        setToken(token);
       localStorage.setItem('USER' , JSON.stringify(token));

      


    }

    const logoutHandler = () =>{

        setToken(null);
        localStorage.removeItem('USER');


    }


    const ContextValue = {
        token : token,
        isLoggedIn : userIsLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }



    return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
