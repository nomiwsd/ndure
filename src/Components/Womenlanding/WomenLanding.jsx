import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img3 from '../Assets/slideimg(8).jpg'
import Img8 from '../Assets/slideimg(4).jpg'
import Img1 from '../Assets/Womenpage/Womenshopshoes.jpg'
import Img2 from '../Assets/Womenpage/Womenshopapparel.jpg'
import Mctimg1 from '../Assets/Womenpage/Sandals.png'
import Mctimg2 from '../Assets/Womenpage/Chappals.png'
import Mctimg3 from '../Assets/Womenpage/Pumps.png'
import Mctimg4 from '../Assets/Womenpage/Casual.png'
import Mctimg5 from '../Assets/Womenpage/Athleisure.png'
import Mctimg6 from '../Assets/Womenpage/Heels.png'
import Mctimg9 from '../Assets/Womenpage/Sportswear.jpg'
import Mctimg10 from '../Assets/Womenpage/Yogatights.jpg'
import Mctimg11 from '../Assets/Womenpage/Trousers.jpg'
import Mctimg12 from '../Assets/Womenpage/Hoodies.jpg'
import Mctimg13 from '../Assets/Womenpage/Jackets.jpg'
import Mctimg14 from '../Assets/Womenpage/Coat.jpg'
import Mctimg15 from '../Assets/Womenpage/SportsBra.jpg'
import Bannerimg from '../Assets/Womenpage/womenbanner.jpg'
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
function WomenLanding() {
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

      <h4 className='text-start mx-3 '>WOMEN FOOTWEAR</h4>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper d-xl-none p-0 m-0"
      >

        <SwiperSlide className='px-3 me-1 me-md-0'>
          <div className="col-4 col-md-3 p-0 col-lg-2">
            <img src={Mctimg1} className=" p-0" alt="" />
            <p className='fwp p-0'>Sandals</p>
          </div>
          <div className=" mx-1 col-4 col-md-3 col-lg-2 p-0">
            <img src={Mctimg2} className=" p-0" alt="wait for internet" />
            <p className='fwp p-0'>Chappals</p>
          </div>
          <div className=" mx-1 col-4 col-md-3 col-lg-2 p-0">
            <img src={Mctimg3} className="p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Pumps</p>
          </div>
          <div className=" mx-1 d-none d-md-block col-md-3 col-lg-2">
            <img src={Mctimg4} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Casual</p>
          </div>
          <div className=" mx-1  d-none d-md-none d-lg-block  col-lg-2">
            <img src={Mctimg5} className=" p-0" alt="wait for internet" />
            <p className='fwp p-0'>Athleisure</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='px-3 ms-4 px-lg-0'>
          <div className=" mx-1 row col-4 d-md-none d-lg-none col-lg-2">
            <img src={Mctimg4} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Casual</p>
          </div>
          <div className=" mx-1 row col-4 col-md-3 d-lg-none col-lg-2">
            <img src={Mctimg5} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Athleisure</p>
          </div>
          <div className="mx-1 row col-4 col-md-3 col-lg-2">
            <img src={Mctimg6} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Heels</p>
          </div>

        </SwiperSlide>

      </Swiper>
      <div className="row my-4 overflow-hidden">
        <div className="d-inline-flex flex-row  d-none d-md-none d-lg-none d-xl-flex px-5">
          <div className="mx-1 row col-6 p-0 col-lg-2">
            <img src={Mctimg1} className="col-10  p-0" alt="" />
            <p className='fwp col-10 p-0'>Sandals</p>
          </div>
          <div className=" mx-1 row col-6 col-lg-2 p-0">
            <img src={Mctimg2} className="col-10 p-0" alt="wait for internet" />
            <p className='fwp col-10 p-0'>Chappals</p>
          </div>
          <div className=" mx-1 row col-6 col-lg-2 p-0">
            <img src={Mctimg3} className="col-10 p-0" alt="wait for internet" />
            <p className='fwp col-10 p-0'>Pumps</p>
          </div>
          <div className=" mx-1 row col-6  col-lg-2">
            <img src={Mctimg4} className="col-10 p-0" alt="wait for internet" />
            <p className='fwp col-10 p-0'>Casual</p>
          </div>
          <div className=" mx-1 row col-6  col-lg-2">
            <img src={Mctimg5} className="col-10 p-0" alt="wait for internet" />
            <p className='fwp col-10 p-0'>Athleisure</p>
          </div>
          <div className="mx-1 row col-6 col-lg-2">
            <img src={Mctimg6} className="col-10 p-0" alt="wait for internet" />
            <p className='fwp col-10 p-0'>Heels</p>
          </div>
        </div>
      </div>
      <h4 className='text-start mx-3 '>WOMEN APPAREL</h4>
      <div className="m-0 p-0 d-flex flex-row d-flex d-md-none d-lg-none d-xl-flex oversm ">
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg9} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Sports Wear</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg10} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Yoga Pants</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg11} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Trousers</p>
        </div>
        <div className="  p-0 col-6 col-lg-2">
          <img src={Mctimg12} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Hoodies & Sweats</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg13} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Jackets</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg14} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Coats</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg15} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Sports Bra</p>
        </div>
        <div className="scroll"></div>
      </div>
      <Swiper
        spaceBetween={30}
        freeMode={true}

        modules={[FreeMode]}
        className="mySwiper d-none d-md-block d-lg-block d-xl-none p-0 m-0"
      >

        <SwiperSlide className='px-4 me-1 me-md-0 px-lg-0'>
          <div className="mx-1 mx-lg-3 col-md-3 p-0 col-lg-2 ">
            <img src={Mctimg9} className=" p-0" alt="" />
            <p className='fwp p-0'>Tees</p>
          </div>
          <div className="mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
            <img src={Mctimg10} className=" p-0" alt="wait for internet" />
            <p className='fwp p-0'>Athletics</p>
          </div>
          <div className="mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
            <img src={Mctimg11} className="p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Trousers</p>
          </div>
          <div className="mx-1 mx-lg-3 d-none d-md-block col-md-3 col-lg-2">
            <img src={Mctimg12} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Track Suit</p>
          </div>
          <div className="mx-1 mx-lg-3  d-none d-md-none d-lg-block  col-lg-2">
            <img src={Mctimg13} className=" p-0" alt="wait for internet" />
            <p className='fwp p-0'>Hoodies & Sweats</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='ms-md-4 px-md-4 me-1 px-4 px-lg-0'>
          <div className=" mx-1 mx-lg-3  d-md-none d-lg-block col-lg-2 p-0">
            <img src={Mctimg10} className=" p-0" alt="wait for internet" />
            <p className='fwp p-0'>Athletics</p>
          </div>
          <div className=" mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
            <img src={Mctimg11} className="p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Trousers</p>
          </div>
          <div className=" mx-1 mx-lg-3 row   d-lg-block col-md-3 col-lg-2">
            <img src={Mctimg12} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Track Suit</p>
          </div>
          <div className=" mx-1 mx-lg-3 row  col-md-3 col-lg-2">
            <img src={Mctimg13} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Hoodies & Sweats</p>
          </div>
          <div className="mx-1 mx-lg-3 row  col-md-3 col-lg-2">
            <img src={Mctimg14} className=" p-0" alt="wait for internet" />
            <p className='fwp  p-0'>Jackets</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <img src={Bannerimg} className="bannerimg" alt="wait for internet" />
    </div>
  )
}

export default WomenLanding