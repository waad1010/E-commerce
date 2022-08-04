import Main from './Main';
import data from '../Data';
import { useState , useEffect } from 'react';
import Basket from '../Basket';
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
                const loaded = [];

                for (const k in Data){
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
    <div className="App">
     
      <div className="row">
        <Main products={products} ></Main>
        {/* <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket> */}
      </div>
    </div>
  );


  
}

export default A;