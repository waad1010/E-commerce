import React, { useState } from "react";
import styles from './Input.module.css'
const Input = React.forwardRef ((props,ref) => {
  

    const [c , setC] = useState(0);


    const HandleChange = (e) => { 
        setC (+e.target.value);
    }
    return ( <>

    

        <span className={styles.input}> <label  htmlFor ={props.input.id }>{props.label}: </label>
        <input ref={ref} {...props.input}/> </span>
        
  
      
 
    
    </>
    );      

}
);
export default Input;