import React from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../../UI/LoadingSpinner";

const OrderTable = (props) => {
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

        </tr>

        {data.map((d) => (
          <tr>
            {console.log(d.ID)}
            <td class="username">{d.Id}</td>
            <td class="username">${d.total_price}</td>
            <td>{d.user_id}</td>
            <td>{d.country}</td>
            <td>{d.cardnum}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default OrderTable;
