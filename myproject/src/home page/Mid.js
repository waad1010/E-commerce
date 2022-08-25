import React from "react";
import { useEffect } from "react";
import IMG2 from "../staticpic/Cats/2.jpg"
import "./home.css";
import IMG3 from "../staticpic/Cats/3.jpg"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';



function createSlide() {

  return (
    <>
      <SwiperSlide>

        <header className="K" >
          <form className=" form3">
            <form className="form4">
              <img className='IMG2' src={IMG2} ></img>

              <div className="div2">
                <h2> New Summer Collection!! </h2>
                <label> The largest range of LUXURY</label>
                <Link to="/all"> <button> Shop Now!</button></Link>
              </div>



            </form>
            <img className="IMG3" src={IMG3} />
          </form>


        </header>

      </SwiperSlide>


    </>

  );
}
     
   
  

const Mid = () => {

  return (

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      speed={5000}
      pagination={{ clickable: true }}
    >
     
    {createSlide() }
    {createSlide() }
    {createSlide() } 
    {createSlide() }
   
     

    </Swiper>
  );
}

export default Mid;