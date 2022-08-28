import React, { useState } from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Addprod from "./Addprod";
import SearchAdmin from "./SearchAdmin";

const ProductsTable = (props) => {
  const { data, heads, DeleteProd,  FData , SwitchData } = props;
  const [Clicked, setClicked] = useState(false);

  const AddProdHandler = () => {
    setClicked(!Clicked);
  };
  // console.log("uses are " , data[0].ID);

  return Clicked ? (
    <Addprod notClicked={AddProdHandler} />
  ) : (
    <div class="Tablecontainer">
      <section class="filterBar">
      <SearchAdmin  
            onSearch={SwitchData}
            data={FData}/>
        <div class="createbtn-container">
          <button class="btn2 createbtn" id="btn2" onClick={AddProdHandler}>
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
            {console.log(d.ID)}
            <td class="username">{d.Id}</td>
            <td class="username">{d.title}</td>
            <td class="username">${d.price}</td>
            <td>{d.description}</td>
            <td>{d.count}</td>
            <td>{d.cat_id}</td>
            <td>{d.img}</td>

            <td>
              <span className="btn-edit">
                <button type="button" className="btn btn-sm btn-edit">
                  <i class="fa fa-edit" aria-hidden="true"></i>
                </button>
              </span>
              <span className="btn-danger">
                <button type="button" className="btn btn-sm"  onClick={() => {DeleteProd(d.Id)}}>
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

export default ProductsTable;
