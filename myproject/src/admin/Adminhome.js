import React from 'react';

import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './Adminhome.css'
import { NavLink } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashView from './pages/DashView';
import Users from './pages/Users';
import CatView from './pages/CatView'
import Orders from './pages/Orders';
import ItemsView from './pages/ItemsView';
import Addcat from './components/Addcat';


const Adminhome = () => {
  return (
 
 
  <>
  
  

<div className='adminpage'>
  <Sidebar />
  <div class="main-content">
  <Routes>
    <Route path ='' element = {<DashView />} ></Route> 
    <Route path ='users' element = {<Users />} ></Route> 
    <Route path ='products' element = {<ItemsView />} ></Route> 
    <Route path ='orders' element = {<Orders />} ></Route> 
    <Route path ='categories' element = {<CatView />} ></Route> 
  </Routes>

</div>

</div>
<footer id="footer">

</footer>
  </>

  
  )
}

export default Adminhome;
