import React from 'react'
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
 import Img6 from '../Assets/slideimg(1).jpg' 
 import Img7 from '../Assets/slideimg(2).jpg' 
import Img8 from '../Assets/slideimg(3).jpg' 
 import Img9 from '../Assets/slideimg(4).jpg' 
 import Img10 from '../Assets/slideimg(5).jpg' 
 import { Autoplay,Pagination, Navigation } from "swiper";
import "./Landing.css";

function Landing() {
  return (

        <div>
       <Swiper
        spaceBetween={50}
        hashNavigation={{
          watchState: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay ,Pagination, Navigation]}
        className="mySwiper mb-5 position-relative"
      >
       <div className='row m-0 justify-content-center justify-content-end btnpos'>
        <div className="swiperbuttons row col-12 col-lg-5 col-md-8 gap-md-2 mx-0 gap-lg-2 align-items-center justify-content-center p-0">
                <Button className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">MEN</Button>
                <Button className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">WOMEN</Button>
                <Button className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">KIDS</Button>
        </div> 
       </div>

       
       
        <SwiperSlide className="swiperslide1 d-none d-md-block" data-hash="slide1"><img src={Img1} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide2 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img6} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide3 d-none d-md-block" data-hash="slide2"><img src={Img2} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide4 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img7} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide5 d-none d-md-block" data-hash="slide3"><img src={Img3} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide6 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img8} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide7 d-none d-md-block" data-hash="slide4"><img src={Img4} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide8 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img9} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide9 d-none d-md-block" data-hash="slide5"><img src={Img5} alt="wait for internet"/></SwiperSlide>
        <SwiperSlide className="swiperslide10 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img10} alt="wait for internet"/></SwiperSlide>
       
      </Swiper>
     
      </div>
      

      
   
  )
}

export default Landing
