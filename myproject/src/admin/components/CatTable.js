import React, { useState } from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Addcat from "./Addcat";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import SearchAdmin from "./SearchAdmin";

const CatTable = (props) => {
  const { data, heads, DeleteCat, FData , SwitchData} = props;
  const [Clicked, setClicked] = useState(false);
  const [filtred, setFiltred] = useState();

  
  const AddCatHandler = () => {
    setClicked(!Clicked);
  };
  
  return Clicked ? (
    <Addcat notClicked={AddCatHandler} />
  ) : (
    <div class="Tablecontainer">
      <section class="filterBar">

        <SearchAdmin  
            onSearch={SwitchData}
            data={FData}/>
      

        <div class="createbtn-container">
          <button class="btn2 createbtn" id="btn2" onClick={AddCatHandler}>
            + Create{" "}
          </button>
        </div>
      </section>

      <table>
        <tr class="table-header">
          {heads.map((h) => (
            <th>{h}</th>
          ))}
          <th class="statusHead">Actions</th>
        </tr>

        {data.map((d) => (
          <tr>
     
            <td class="username">{d.Id}</td>
            <td class="username">{d.title}</td>
            <td>{d.description}</td>
            <td>{d.img}</td>
            <td>
              <span className="btn-edit">
                <button type="button" className="btn btn-sm btn-edit">
                  <i class="fa fa-edit" aria-hidden="true"></i>
                </button>
              </span>
              <span className="btn-danger">
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() => {DeleteCat(d.Id)}}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CatTable;
