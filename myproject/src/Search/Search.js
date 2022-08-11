import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../home page/MyIcon";
import "./Search.css";
import { Link }  from 'react-router-dom'
import Cat from "../home page/Cat";
import {BiSearch} from "react-icons/bi"
import {useRef} from 'react';
import Searchcont from "./Searchcont";

function Search(props) {

  const navigate = useNavigate();
  const { onSearch, data , handleClick } = props;
  const [Searched ,setSearch] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
 
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {

    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().startsWith(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    onSearch(newFilter)
  };

  const subHandler = ( e ) => {
    e.preventDefault();
    setSearch(true);
    navigate('/searched' , {state : wordEntered});
  
   
  }
 


  return (
    <form onSubmit={subHandler}>
      <div class="searchBox">
        <input 
        class="searchInput"
         type="text" 
         name=""
         value={wordEntered}
         onClick ={ () => {handleClick()}}
        onChange={handleFilter}
        placeholder="Search for a product..." />
        
        <button class="searchButton" >
         
          <i class="material-icons">
          <BiSearch />
                </i>
        </button>
      </div>
      {
        
      
      }
        
    </form>
  );
}

export default Search;
