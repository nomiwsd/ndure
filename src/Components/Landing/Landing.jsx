import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "react-bootstrap/Button"
import Img1 from '../Assets/slideimg(6).jpg' 
 import Img2 from '../Assets/slideimg(9).jpg' 
import Img3 from '../Assets/slideimg(7).jpg' 
 import Img4 from '../Assets/slideimg(8).jpg' 
 import Img5 from '../Assets/slideimg(10).jpg' 
 import { Pagination, Navigation } from "swiper";
import "./Landing.css";

function Landing() {
  return (

        <div>
       <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-5 position-relative"
      >
       <div className='row justify-content-center btnpos'>
        <div className="swiperbuttons row col-5 gap-4 justify-content-center">
                <Button className="p-0 col-3 ">Men</Button>
                <Button className=" p-0 col-3 ">Women</Button>
                <Button className="p-0 col-3 ">Kids</Button>
        </div> 
       </div>

       
       
        <SwiperSlide className="swiperslide1 " data-hash="slide1"><img src={Img1} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide" data-hash="slide2"><img src={Img2} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide" data-hash="slide3"><img src={Img3} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide" data-hash="slide4"><img src={Img4} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide" data-hash="slide5"><img src={Img5} alt="wait for internet"/></SwiperSlide>
       
      </Swiper>
     
      </div>
      

      
   
  )
}

export default Landing
