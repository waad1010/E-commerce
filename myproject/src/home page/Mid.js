import React from "react";
import { useEffect } from "react";
import IMG2 from "../pictures/Cats/2.jpg"
import "./home.css";
import IMG3 from "../pictures/Cats/3.jpg"
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
<<<<<<< HEAD

    </>

  );
}

=======
     
      </>
      
    );
  }
  
>>>>>>> 6d40071f84dd3b4b4ba81354a9142f57646a9006
const Mid = () => {

  return (

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
<<<<<<< HEAD
      speed={5000}
      pagination={{ clickable: true }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
=======
      speed={4000}
      pagination={{ clickable: true }}
    >

    {createSlide() }
    {createSlide() }
    {createSlide() } 
    {createSlide() }
   
     
>>>>>>> 6d40071f84dd3b4b4ba81354a9142f57646a9006
    </Swiper>
  );
}

export default Mid;