import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';


import React from 'react'

function createSlide() {
    return (
        <SwiperSlide>
            <div className="div2">
                <h2> New Summer Collection!! </h2>
                <label> The largest range of LUXURY</label>
            </div>
        </SwiperSlide>
    );
}

const Slider = () => {
    return (
        <div className='d'>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
            >
                {createSlide()}
                {createSlide()}
                {createSlide()}
                {createSlide()}

            </Swiper>

        </div>
    )
}

export default Slider
