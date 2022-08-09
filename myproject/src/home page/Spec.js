import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Main from '../card/Main';



const Spec = () => {
    const {category} = useParams(); 
    console.log(category);
    const [products, setProducts] = useState ( [] ) ;
    const [loading , setLoading] = useState (false);
    const [Error , setError] = useState (null);
    
    useEffect(() => {
        const fetchM = async () => {
           const res = await axios.get(`http://localhost:8080/all`);
           const Data = await res.data;
           
      //     const Data = [
      //       {
      //           id : 112,
      //           title : "Dress3" ,
      //           description : "aa",
      //           price : 1500,
      //           cat_id : 1
    
      //         },
      //         {
      //           id : 112,
      //           title : "Dress4" ,
      //           description : "ha t you dcan buy for foreeeeeee",
      //           price : 1500,
      //           cat_id : 1
    
      //         },
      //         {
      //           id : 112,
      //           title : "Dress4" ,
      //           description : "aa",
      //           price : 1500,
      //           cat_id : 1
    
      //         },{
      //       id : 1,
      //       title : "Dress1" ,
      //       description : "aa",
      //       price : 1500,
      //       cat_id : 1

      //     },
      //     {
      //       id : 3,
      //       title : "Dress2" ,
      //       description : "aa",
      //       price : 500,
      //       cat_id : 1

      //     },
      //     {
      //       id : 4,
      //       title : "Top2" ,
      //       description : "aa",
      //       price : 800,
      //       cat_id : 3

      //     },
      //     {
      //       id : 7,
      //       title : "Top3" ,
      //       description : "aa",
      //       price : 850,
      //       cat_id : 3

      //     },
      //     {
      //       id : 2,

      //       cat_id : 2,
      //       title : "top1" ,
      //       description : "aa",
      //       price : 2500,
           

      //     }
      //  ]
            const categoryItems = Data.filter(item => +item.cat_id === +category);
          //  console.log(categoryItems)
          //  console.log(res.data);


    
                const loaded = [];

                for (const k in categoryItems){
                    loaded.push ({
                        id : categoryItems[k].Id,
                        title : categoryItems[k].title,
                        price : categoryItems[k].price,
                        description : categoryItems[k].description,
                    })
                }
                console.log(loaded);
                setProducts(loaded);
                setLoading(false);

          
        }
        fetchM().catch ( e =>{
            setLoading(false);
            setError (e.message)
        });
    }, [category])


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
        
        </div>
      </div>
    )
}

export default Spec;