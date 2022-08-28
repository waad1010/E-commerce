import React from "react";
import Table from "../components/Table";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingSpinner from "../../UI/LoadingSpinner";
const Users = () => {
  const [Allusers, setAllusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [Filtred, setFiltered] = useState([]);
  const ref = useRef(null);
  const heads = ["ID", "Name", "Email", "Password"];
  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/allusers");

      console.log(res.data);
      const Data = res.data;

      const loaded = [];

      console.log("HERE  : ");
      for (const k in Data) {
        console.log(Data[k].ID);
        loaded.push({
          ID: Data[k].ID,
          Name: Data[k].FName,
          Password: Data[k].Password,
          Email: Data[k].Email,
          DOB: Data[k].DateOfBirth,
        });
      }
      setFiltered(loaded);
      setAllusers(loaded);
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
    if (data.length) setAllusers(data);
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  
  const DeleteUser = (UserId) => {
    const Filtredd = Allusers.filter((item) => +item.ID != +UserId); 
    const filterF = Filtred.filter((item) => +item.ID != +UserId); 

    axios
      .delete(`http://localhost:8080/users/${UserId}`)
      .then((res) => {
        toast.success("A User has been deleted!");
        
    
      })

      .catch((error) => {

        toast.error(error.response.data);
      });
      setAllusers(Filtredd);
      setFiltered(filterF);


  };
  return (
    <>
      <header>
        <h2 class="heading" id="dashboard">
          <label for="nav-toggle">
            <span class="las la-bars"></span>
          </label>
          Managing Users
        </h2>
      </header>
      <main>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <Table SwitchData ={SwitchData} FData = {Filtred}
           data={Allusers} heads={heads} DeleteUser ={DeleteUser} />
        )}
      </main>
    </>
  );
};

export default Users;
