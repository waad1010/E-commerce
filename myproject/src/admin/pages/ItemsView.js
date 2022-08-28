import React from 'react'

import { useState , useRef, useEffect } from 'react';
import axios from "axios";
import ProductsTable from '../components/ProductsTable'
import LoadingSpinner from '../../UI/LoadingSpinner';
import { toast } from "react-toastify";
const ItemsView = () => {
  
  const [AllProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  const ref = useRef(null);

const heads = ["ID"  , "Title" , "Price" ,"Description" ,"IN stock" , "CategoryID","IMG" ];
  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/all");
      
      console.log(res.data);
      const Data = res.data;

      const loaded = [];

      console.log("HERE  : ");
      for (const k in Data) {
        console.log(Data[k].ID);
        loaded.push({
          Id: Data[k].Id,
          title: Data[k].title,
          price:Data[k].price,
          description: Data[k].description,
          count : Data[k].count,
          cat_id : Data[k].cat_id,
          img: Data[k].pic,
        
        });
      }
      setFiltered(loaded);
      setAllProducts(loaded);
      setLoading(false);
    };

    fetchM().catch((e) => {
      setLoading(false);
      setError(e.message);
    });
  }, []);

  if (Error) {
    return <p>{Error}</p>;
  }
 

  const SwitchData = (data) => {
    if (data.length) setAllProducts(data);
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const DeleteProd = (proId) => {
    const Filtredd = AllProducts.filter((item) => +item.Id != +proId); 
    const filterF = Filtred.filter((item) => +item.Id != +proId); 
    axios
      .delete(`http://localhost:8080/products/${proId}`)
      .then((res) => {
        toast.success("A Product has been deleted!");
        setAllProducts(Filtredd);
        setFiltered(filterF)
        
    
      })

      .catch((error) => {

        toast.error(error.response.data);
      });
     


  };
  return (
   
    <>
            <header>
                <h2 class="heading" id="dashboard">
                    <label for="nav-toggle">
                        <span class="las la-bars"></span>
                    </label>
                    Managing Products
                </h2>
            </header>
            <main>
              {loading ? <LoadingSpinner /> : 
          <ProductsTable FData = {Filtred}
          SwitchData = {SwitchData}
          DeleteProd = {DeleteProd} data = {AllProducts} heads= {heads}/>
  }
            </main>
   </>
  )
}

export default ItemsView;