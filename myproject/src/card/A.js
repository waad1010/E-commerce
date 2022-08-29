import Header from "./header";
import Main from "./Main";
import data from "../Data";
import { useState, useEffect, useRef } from "react";
import Search from "../Search/Search";
import axios from "axios";
import LoadingSpinner from "../UI/LoadingSpinner";

function A() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/all");

      console.log(res.data);

      const Data = await res.data;
      //   const Data  = [{
      //     id : 1,
      //     title : "Dresses",
      //     description : "AA"

      //   },
      //   {
      //     id : 2,
      //     title : "Top",
      //     description : "AA"

      //   }
      // ]
      const loaded = [];

      for (const k in Data) {
        console.log("zz : " + Data[k].number);
        loaded.push({
          id: Data[k].Id,
          title: Data[k].title,
          price: Data[k].price,
          description: Data[k].description,
          pic : Data[k].pic,
          cid : Data[k].cat_id,
          rates : Data[k].rates,
          number : Data[k].number,
          count : Data[k].count,
        });
      }
      setFiltered(loaded);
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
    return <LoadingSpinner />
  }
  const SwitchData = (data) => {
    if (data.length) setProducts(data);
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log("OK" , products);
  return (
    <div ref={ref}>
      <h2 className="title">Products</h2>
      <Search handleClick={handleClick}
       onSearch={SwitchData} 
       data={Filtred} />
      <Main products={products}></Main>
    </div>
  );
}

export default A;
