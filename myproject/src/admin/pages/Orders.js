import React from 'react'
import OrderTable from '../components/OrderTable';
import { useState , useRef, useEffect } from 'react';
import axios from "axios";
import LoadingSpinner from '../../UI/LoadingSpinner';
const Orders = () => {
  
  const [AllOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  const ref = useRef(null);

const heads = ["ID"  , "TotalPrice" , "UserID" , "Address" , "CardNumber"];
  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/allorders");

      console.log(res.data);
      const Data = res.data;

      const loaded = [];

      console.log("HERE  : ");
      for (const k in Data) {
        console.log(Data[k].ID);
        loaded.push({
          Id: Data[k].Id,
          total_price: Data[k].total_price,
          user_id: Data[k].user_id,
          country: Data[k].country,
          cardnum : Data[k].cardnum
        });
      }
      setFiltered(loaded);
      setAllOrders(loaded);
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
    if (data.length) setAllOrders(data);
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (

  
  <>
            <header>
                <h2 class="heading" id="dashboard">
                    <label for="nav-toggle">
                        <span class="las la-bars"></span>
                    </label>
                    Managing Orders
                </h2>
            </header>
            <main>
              {loading ? <LoadingSpinner />:
              <OrderTable data={AllOrders} heads ={heads} />
  }
              </main>
              </>
  )
}

export default Orders;
