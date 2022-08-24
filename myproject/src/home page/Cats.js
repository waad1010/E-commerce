import React from "react";

import { useState, useEffect, useRef } from "react";

import axios from "axios";
import Cat from "./Cat";
import "./Cat.css";
import Search from "../Search/Search";
import Spinner from "./Spinner";
import LoadingSpinner from "../UI/LoadingSpinner";

const Cats = () => {
  const [Cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/allcats");

      console.log(res.data);
      const Data = res.data;

      // const Data  = [{
      //     Id : 1,
      //     title : "Dresses",
      //     description : "AA"

      //   },
      //   {
      //     Id : 20,
      //     title : "jumps",
      //     description : "AA"

      //   },
      //   {
      //     Id : 11,
      //     title : "But",
      //     description : "AA"

      //   },
      //   {
      //     Id : 20,
      //     title : "jumps",
      //     description : "AA"

      //   },
      //   {
      //     Id : 2,
      //     title : "Skirts",
      //     description : "AA"

      //   },
      //   {
      //     Id : 3,
      //     title : "Caps",
      //     description : "AA"

      //   }
      // ]
      const loaded = [];

      console.log("HERE  : ");
      for (const k in Data) {
        console.log(Data[k].Id);
        loaded.push({
          id: Data[k].Id,
          title: Data[k].title,
          description: Data[k].description,
          img: Data[k].img,
        });
      }
      setFiltered(loaded);
      setCats(loaded);
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
    return(<LoadingSpinner />);
  }

  const SwitchData = (data) => {
    if (data.length) setCats(data);
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={ref}>
      <p className="p1">
        {" "}
        Shop By Category
        <span>
          <Search
            handleClick={handleClick}
            onSearch={SwitchData}
            data={Filtred}
          />
          <br></br>
        </span>
      </p>

      <div class="box">
        {Cats.map((c) => (
            console.log(c.img),
          <Cat id={c.id} title={c.title} desc={c.description} img ={c.img} />
        ))}
      </div>
    </div>
  );
};

export default Cats;
