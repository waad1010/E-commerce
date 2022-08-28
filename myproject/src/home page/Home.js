import React from "react";
import Mid from "./Mid";
import Cats from "./Cats";


const Home = ({isAdmin}) => { 
    return ( <>

    
    <Mid />
    <main>
         <Cats></Cats>
    </main>                   
 
    </>);  

}
export default Home;