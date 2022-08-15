import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Searched.module.css";
import Item from "./Item";
import Card from "../UI/Card";
const Searchcont = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchM = async () => {
         const res = await axios.get(`http://localhost:8080/all`);
         const Data = await res.data;

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
      const categoryItems = Data.filter((item) =>
        item.title.toLowerCase().includes(location.state.toLowerCase())
      );
      //  console.log(categoryItems)
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
        });
      }
      console.log(loaded);
      setProducts(loaded);
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
  if (loading) {
    return <p>is Loading...</p>;
  }
  // console.log("from s " + location.state);
  console.log(products);
  return (
    <section className={styles.meals}>
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
            ></Item>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Searchcont;
