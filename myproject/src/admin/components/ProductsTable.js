import React from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../../UI/LoadingSpinner";

const ProductsTable = (props) => {
  const { data, heads } = props;
  // console.log("uses are " , data[0].ID);

  return (
    <div class="Tablecontainer">
      <section class="filterBar">
        <div class="search-ui">
          <label for="search">Search</label>
          <div class="search-container">
            <form action="/action_page.php">
              <input
                type="text"
                placeholder="Search by user name or email address..."
                name="search"
              />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="filter-ui">
          <label for="filters">Show me</label>
          <div class="styled-select">
            <select name="accountStatus" id="filters">
              <option value="active">Everyone</option>
              <optgroup label="Audience">
                <option value="commenters">Commenters</option>
              </optgroup>
              <optgroup label="Organization">
                <option value="admins">Admins</option>
                <option value="moderators">Moderators</option>
                <option value="banned">Staff</option>
              </optgroup>
            </select>
          </div>
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
                <button type="button" className="btn btn-sm">
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
