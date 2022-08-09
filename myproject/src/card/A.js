import Header from './header';
import Main from './Main';
import data from '../Data';
import { useState , useEffect } from 'react';
import Search from '../Search/Search';
import axios from 'axios';

function A() {
  const [products, setProducts] = useState ( [] ) ;
    const [loading , setLoading] = useState (false);
    const [Error , setError] = useState (null);



    useEffect ( 
        () => {
            const fetchM = async () => {
                setLoading(true);
                const res = await axios.get('http://localhost:8080/all');
          
                console.log(res.data);


                const Data = await res.data;
              //   const Data  = [{
              //     id : 1,
              //     title : "Dresses",
              //     description : "AA"

              //   },
              //   {
              //     id : 2,
              //     title : "Top",
              //     description : "AA"

              //   }
              // ]
                const loaded = [];

                for (const k in Data){
                  console.log("zz : " + Data[k].Id)
                    loaded.push ({
                        id : Data[k].Id,
                        title : Data[k].title,
                        price : Data[k].price,
                        description : Data[k].description,
                    })
                }
                setProducts(loaded);
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
  return (
    
       
      <div >
        
        <Main products={products} ></Main>
      </div>
   
  );


  
}

export default A;