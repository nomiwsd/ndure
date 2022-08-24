import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img3 from '../Assets/slideimg(7).jpg'
import Img8 from '../Assets/slideimg(3).jpg'
import Img1 from '../Assets/Shopshoes.jpg'
import Img2 from '../Assets/Shopapparel.jpg'
import './MenLanding.css'
function MenLanding() {
    return (
        <div>
            <Swiper className="mySwiper mb-3  pb-md-0 pb-lg-0 position-relative">
                <div className='row m-0 justify-content-center justify-content-end btnpos'>
                    <div className="swiperbuttons row col-12 col-lg-5 col-md-8 gap-md-2 mx-0 gap-lg-2 align-items-center justify-content-center p-0">
                        <button className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">SHOES</button>
                        <button className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">APPAREL</button>
                        <button className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">ACCESSORIES</button>
                    </div>
                </div>

                <SwiperSlide className="swiperslide5 d-none d-md-block" data-hash="slide3"><img src={Img3} alt="wait for internet" /></SwiperSlide>
                <SwiperSlide className="swiperslide6 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img8} alt="wait for internet" /></SwiperSlide>

            </Swiper>

            <div className="row p-0 m-0 ">
                <img src={Img1} className="col-12 col-lg-6 col-md-6 my-2" alt="wait for internet" />
                <img src={Img2} className="col-12 col-lg-6 col-md-6 my-2" alt="wait for internet" />
            </div>
        </div>
    )
}

export default MenLanding
