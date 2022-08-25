import React from 'react'
import CatTable from '../components/CatTable';
import { useState , useRef, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Addcat from '../components/Addcat';
import LoadingSpinner from '../../UI/LoadingSpinner';
import { toast } from "react-toastify";
const CatView = () => {
  
  const [AllCats, setAllCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  const ref = useRef(null);

const heads = ["ID"  , "Title" , "Description" , "IMG" ];
  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/allcats");
      
      console.log(res.data);
      const Data = res.data;

      const loaded = [];

      console.log("HERE  : ");
      for (const k in Data) {
        console.log(Data[k].ID);
        loaded.push({
          Id: Data[k].Id,
          title: Data[k].title,
          description: Data[k].description,
          img: Data[k].img,
        
        });
      }
      setFiltered(loaded);
      setAllCats(loaded);
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
    if (data.length) setAllCats(data);
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const DeleteCat = (catId) => {
    const Filtred = AllCats.filter((item) => +item.Id != +catId); 

    axios
      .delete(`http://localhost:8080/cats/${catId}`)
      .then((res) => {
        toast.success("A category has been deleted!");
        
    
      })

      .catch((error) => {

        toast.error(error.response.data);
      });
      setAllCats(Filtred);


  };
  return (
   
    <>
    
            <header>
                <h2 class="heading" id="dashboard">
                    <label for="nav-toggle">
                        <span class="las la-bars"></span>
                    </label>
                    Managing categories
                </h2>
            </header>
            
            <main>
              {loading ? <LoadingSpinner /> : 
              
          <CatTable DeleteCat = {DeleteCat} data = {AllCats} heads= {heads}/>
  }
 
            </main>
   </>
  )
}

export default CatView;