import React from 'react'
import Mctimg9 from '../Assets/Menpage/Tees.jpg'
import Mctimg10 from '../Assets/Menpage/Athletic.jpg'
import Mctimg11 from '../Assets/Menpage/Trousers.jpg'
import Mctimg12 from '../Assets/Menpage/Tracksuit.jpg'
import Mctimg13 from '../Assets/Menpage/Hoodies.png'
import Mctimg14 from '../Assets/Menpage/Jackets.jpg'
import './Menapparel.css'
function Menapparel() {
  return (
    <div>
      <h4 className='text-start mx-3 '>MEN APPAREL</h4>
      <div className="m-0 p-0 d-flex flex-row d-flex d-md-none d-lg-none d-xl-flex oversm ">
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg9} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Tees</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg10} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Athletics</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg11} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Trouesers</p>
        </div>
        <div className="  p-0 col-6 col-lg-2">
          <img src={Mctimg12} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Track Suit</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg13} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Hoodies & Sweats</p>
        </div>
        <div className=" p-0 col-6 col-lg-2">
          <img src={Mctimg14} className="col-10 p-0" alt="wait for internet" />
          <p className='fwp col-12 p-0'>Jackets</p>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
    </div>
  )
}

export default Menapparel