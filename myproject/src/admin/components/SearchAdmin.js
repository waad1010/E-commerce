import React, {useState} from "react";

import "./Table.css";

const SearchAdmin = (props) =>{
    

  const { onSearch, data  } = props;

  const [Searched ,setSearch] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {

    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        const tos = value.title ? (value.title) : value.Name;
      console.log(value.title + " vs " + searchWord);
      console.log("here e" + tos.toLowerCase().includes(searchWord.toLowerCase()));
   
      return tos.toLowerCase().includes(searchWord.toLowerCase());
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
    
  
   
  }
 


  const x = "title";
 

    return (  <div class="search-ui">
    <label for="search">Search</label>
    <div class="search-container">
      <form onSubmit={subHandler}>
        <input
          type="text"
          placeholder={` Search ... `} 
          name="search"
          value={wordEntered}
        
         onChange={handleFilter}
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>)

}


export default SearchAdmin;