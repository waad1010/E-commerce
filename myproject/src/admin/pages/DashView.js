import React from "react";
import '../Adminhome.css'
import { useState , useRef, useEffect } from 'react';
import axios from "axios";
import LoadingSpinner from '../../UI/LoadingSpinner';

const DashView = () =>{
    
  const [lastest, setLatest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);


  useEffect(() => {
    const fetchM = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/getlast");

      console.log("WHER"  ,res.data);
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
          DOB : Data[k].DateOfBirth
        });
      }
     
      setLatest(loaded);
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



    return (
        <>
            <header>
                <h2 class="heading" id="dashboard">
                    <label for="nav-toggle">
                        <span class="las la-bars"></span>
                    </label>
                    Dashboard
                </h2>
            </header>
            <main>
                <div id="pop-wrap">
            <h1 class="pop-up">Light Mode Activated</h1>
        </div>
        {/* <div class="switch" id="switch">
            <div id="toggle">
                
                <i class="indicator"></i>
                    
                </div>
            </div> */}
                <div class="cards">
                    <div class="card-single">
                        <div>
                            <h1 id="customer"></h1>
                            <span>Registered Users !</span>
                        </div>
                        <div>
                            <span class="fas fa-users"></span>
                        </div> 
                    </div>
                    <div class="card-single">
                        <div>
                            <h1 id="project"></h1>
                            <span>Products we have !</span>
                            </div>
                        <div>
                        <span class="fas fa-tshirt"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div>
                            <h1 id="order"></h1>
                            <span>Confirmed Orders</span>
                            </div>
                        <div>
                            <span class="fas fa-shopping-bag"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div>
                            <h1><sup>$</sup><p id="income"><b>k</b></p></h1>
                            <span>Income so far!</span>
                            </div>
                        <div>
                            <span class="fab fa-google-wallet"></span>
                        </div>
                    </div>
                </div>
                <div class="recent-grid">
                    <div class="projects">
                        <div class="cardrecent">
                            <div class="card-header">
                                <h3 class="heading">Latest Users</h3>
                                <button>See all <span class="las la-arrow-right"></span></button>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>Name</td>

                                         
                                            <td>Email</td>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lastest.map(user =>(
  <tr>
  <td>{user.ID}</td>
  <td>{user.Name}</td>
  <td>
{user.Email}
  </td>
</tr>
                                        ))
                                      
}
                                       
                                
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
                
            </main>
            
        </  >)


}

export default DashView ;