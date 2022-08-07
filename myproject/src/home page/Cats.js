import React from "react";


import { useState , useEffect } from 'react';

import axios from 'axios';
import Cat from "./Cat";
import './Cat.css'

const Cats = () => {

    const [Cats, setCats] = useState ( [] ) ;
    const [loading , setLoading] = useState (false);
    const [Error , setError] = useState (null);


    useEffect ( () => {
            const fetchM = async () => {
                setLoading(true);
                const res = await axios.get('http://localhost:8080');
          
                console.log(res.data);


                const Data = await res.data;

                // const Data  = [{
                //     id : 1,
                //     title : "Dresses",
                //     description : "AA"
  
                //   },
                //   {
                //     id : 2,
                //     title : "Top",
                //     description : "AA"
  
                //   },
                //   {
                //     id : 2,
                //     title : "Top",
                //     description : "AA"
  
                //   },
                //   {
                //     id : 2,
                //     title : "Top",
                //     description : "AA"
  
                //   }
                // ]
                const loaded = [];

                console.log("HERE  : ")
                for (const k in Data){
                    console.log(Data[k].id)
                    loaded.push ({
                        id : Data[k].Id,
                        title : Data[k].title,
                        description : Data[k].description,
                    })
                }
                
                setCats(loaded);
                setLoading(false);

            }

            fetchM().catch ( e =>{
                setLoading(false);
                setError (e.message)
            });
            }
            
        
        
        , []) ;


        if (Error){
            return <p>{Error}</p>
        }
        if (loading){
            return <p>is Loading...</p>
        }
        
    return (<>
       
        <p className="p1"> Shop By Category</p>
        <div class="box">
           {
              
            Cats.map((c) => 
            ( 
            
            
            
            <Cat id ={c.id} title = {c.title} desc = {c.description}/>)
            )
           
           }
           </div>




        
    </>);

}

export default Cats;