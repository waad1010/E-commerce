import React from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SearchAdmin from "./SearchAdmin";

const Table = (props) => {
  const { data, heads, FData , SwitchData,DeleteUser} = props;
  // console.log("uses are " , data[0].ID);

  return (
    <div class="Tablecontainer">
      <section class="filterBar">
      <SearchAdmin  
            onSearch={SwitchData}
            data={FData}/>
      </section>

      <table>
        <tr class="table-header">
          {heads.map((h) => (
            <th>{h}</th>
          ))}

          {/* <th class="roleHead">Role</th> */}
          <th class="statusHead">Actions</th>
        </tr>

        {data.map((d) => (
          <tr>
            {console.log(d.ID)}
            <td class="username">{d.ID}</td>
            <td class="username">{d.Name}</td>
            {
                
             <td class="email">
              <a href="mailto:email@email.com">{d.Email}</a>
             </td>
            
}
            

            <td>{d.Password}</td>

            <td>
              <span className="btn-edit">
                <button type="button" className="btn btn-sm btn-edit">
                  <i class="fa fa-edit" aria-hidden="true"></i>
                </button>
              </span>
              <span className="btn-danger">
                <button onClick={() => {DeleteUser(d.ID)}} type="button" className="btn btn-sm">
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

export default Table;
