import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Searched.module.css";
import Item from "./Item";
import Card from "../UI/Card";
import Search from "./Search";
import Spinner from "../home page/Spinner";
import LoadingSpinner from "../UI/LoadingSpinner";
const Searchcont = (props) => {
  const location = useLocation();
  console.log("stating "  ,location.state.toLowerCase());
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const fetchM = async () => {
         const res = await axios.get(`http://localhost:8080/all`);
         const Data = await res.data;
         console.log("sub")

    //   const Data = [
    //     {
    //       Id: 112,
    //       title: "Dress3",
    //       description: "aa",
    //       price: 1500,
    //       cat_id: 1,
    //     },
    //     {
    //       Id: 112,
    //       title: "Dress4",
    //       description: "ha t you dcan buy for foreeeeeee",
    //       price: 1500,
    //       cat_id: 1,
    //     },
    //     {
    //       Id: 112,
    //       title: "Dress4",
    //       description: "aa",
    //       price: 1500,
    //       cat_id: 1,
    //     },
    //     {
    //       Id: 1,
    //       title: "Dress1",
    //       description: "aa",
    //       price: 1500,
    //       cat_id: 1,
    //     },
    //     {
    //       Id: 3,
    //       title: "Dress2",
    //       description: "aa",
    //       price: 500,
    //       cat_id: 1,
    //     },
    //     {
    //       Id: 4,
    //       title: "Top2",
    //       description: "aa",
    //       price: 800,
    //       cat_id: 3,
    //     },
    //     {
    //       Id: 7,
    //       title: "Top3",
    //       description: "aa",
    //       price: 850,
    //       cat_id: 3,
    //     },
    //     {
    //       Id: 2,

    //       cat_id: 2,
    //       title: "top1",
    //       description: "aa",
    //       price: 2500,
    //     },
    //   ];

    //console.log("NEWING " , location.state.toLowerCase());
   
      const categoryItems = Data.filter((item) =>
        item.title.toLowerCase().includes(location.state.toLowerCase())
      );
        console.log("here is " ,  categoryItems)
      //  console.log(res.data);

      const loaded = [];

      for (const k in categoryItems) {
        loaded.push({
          id: categoryItems[k].Id,
          title: categoryItems[k].title,
          price: categoryItems[k].price,
          description: categoryItems[k].description,
          pic : categoryItems[k].pic,
          cid : categoryItems[k].cat_id,
          rates:categoryItems[k].rates,
          count : categoryItems[k].count,
          number : categoryItems[k].number,
        });
      }
      console.log(loaded);
      setProducts(loaded);
      setFiltered(loaded);
      setLoading(false);
    };
    fetchM().catch((e) => {
      setLoading(false);
      setError(e.message);
    });
  }, [location.state.toLowerCase()]);

  if (Error) {
    return <p>{Error}</p>;
  }
  if (loading) {
    return <LoadingSpinner />
  }
  // console.log("from s " + location.state);
  console.log(products);

  const SwitchData = (data) => {
    if (data.length) setProducts(data);
  };
  return (
    <section className={styles.meals}>
        <Search 
                    onSearch={SwitchData}
                    data={Filtred}/>
        <br></br>
        <br></br>
      <Card>
      
        <ul>
          {products.map((m) => (
            
            <Item
              key={m.id}
              id={m.id}
              title={m.title}
              price={m.price}
              des={m.description}
              pic={m.pic}
              cid={m.cid}
              count={m.count}
            ></Item>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Searchcont;
