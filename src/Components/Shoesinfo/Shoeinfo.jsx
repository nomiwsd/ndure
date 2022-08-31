import React from 'react'
import ReactTooltip from "react-tooltip";
import Accordion from 'react-bootstrap/Accordion';
import { FaRegHeart } from 'react-icons/fa'
import slideimg1 from '../Assets/Menpage/MenShoesPage/First(1).jpg'
import slideimg2 from '../Assets/Menpage/MenShoesPage/First(2).jpg'
import slideimg3 from '../Assets/Menpage/MenShoesPage/First(3).jpg'
import slideimg4 from '../Assets/Menpage/MenShoesPage/First(4).jpg'
import slideimg5 from '../Assets/Menpage/MenShoesPage/First(5).jpg'
import Logoimg1 from '../Assets/Menpage/MenShoesPage/shoeslogo1.jpg'
import Logoimg2 from '../Assets/Menpage/MenShoesPage/shoeslogo2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay } from "swiper";

import './Shoeinfo.css'
import Menheader from '../Menheader/Menheader'
function Shoeinfo() {

    
  return (
    <div>
      <Menheader />
      <div className="row mx-lg-3 mx-2">      {/*//Main row Started */}
        <div className="col-xl-7 col-lg-7 col-md-6 ms-lg-3 me-lg-5 p-0 d-none d-md-block" > {/*first 8 column div*/}
          <div>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={2}
              spaceBetween={10}
              modules={[Autoplay]}
              className="mySwiper shoesslider"
            >
              <SwiperSlide className='imgwidth'><img src={slideimg1} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg2} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg3} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg4} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg5} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div> {/*end of first 8 column div*/}
        
        <div className="col-12 ms-lg-3 me-lg-5 p-0 d-block d-md-none d-lg-none" > {/*first 8 column div*/}
          <div>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              modules={[Autoplay]}
              className="mySwiper shoesslider"
            >
              <SwiperSlide className='imgwidth'><img src={slideimg1} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg2} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg3} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg4} alt="" /></SwiperSlide>
              <SwiperSlide className='imgwidth'><img src={slideimg5} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div> {/*end of first 8 column div*/}


        <div className="col-lg-3 col-xl-4 col-10 col-md-4 text-start p-0 mx-3 mt-3"> {/*Start of second 4 column div*/}
                
              <p className='Mainhead p-0 m-0 '>MEN'S TRENDY PESHAWARI SANDAL</p>
              <p className='text-muted'>SKU: M-PE-KAP-0001:BROWN:41/7</p>
              <p className=''><del>Rs.2,199.00</del><span className='text-danger'> Rs.1,979.00</span></p>

              <hr />

              <div className='d-flex'>
                      <p className='me-3'>Quantity:</p>
                      <a href="#"><button className='btn minbtn py-0 px-3'>-</button></a>
                      <input className='quantitybox' type="number" name="quantity" min='0' max='9' />
                      <a href="#"><button className='btn minbtn py-0 px-3'>+</button></a>
              </div>

              <hr />
              <p className='me-3'>Color:</p>

              <div className="row d-inline-flex">

              <ReactTooltip className="col-1 text-center px-1 py-2" id="registerTip" place="bottom" effect="solid">
                MEN'S TRENDY PESHAWARI SANDAL
              </ReactTooltip>
              <img src={Logoimg1} className="logoimg col-4 p-0 me-2" data-tip data-for="registerTip" alt="wait for internet" />
              <img src={Logoimg2} className="logoimg col-4 p-0" data-tip data-for="registerTip" alt="wait for internet" />

              </div>

              <div className="row mt-3  mb-3">
                  <div className="col-1"><p className=''>Size:</p></div>
                  <div className="col-1 px-4 "><button type="button" class="btn sizebtns text-start col-1 p-0">39/5</button></div>
                  <div className="col-1 px-4 "><button type="button" class="btn sizebtns text-start col-1 p-0">40/6</button></div>
                  <div className="col-1 px-4"><button type="button" class="btn sizebtns text-start col-1 p-0">41/7</button></div>
                  <div className="col-1 px-4"><button type="button" class="btn sizebtns text-start col-1 p-0">42/8</button></div>
                  <div className="col-1 px-4"><button type="button" class="btn sizebtns text-start col-1 p-0">43/9</button></div>
                  <div className="col-1 px-4"><button type="button" class="btn sizebtns text-start col-1 p-0">44/10</button></div>
                  <div className="col-1 px-4"> <button type="button" class="btn sizebtns text-start col-1 p-0">45/11</button></div>
                  <div className="col-1 px-4"> <button type="button" class="btn sizebtns text-start col-1 p-0">46/12</button></div>
              </div>

              <div className="row mb-3">
                  <button type="button" className="col-8 btn btn-outline-dark cartbtns mx-2">ADD TO CART</button>
                  <div className="col-1 mx-3 p-0 px-2 py-2 hearticon"><FaRegHeart className='heartic' /></div>
              </div>
                
             <div className="description">
             <Accordion>
      <Accordion.Item eventKey="0">
      
        <Accordion.Header>Description</Accordion.Header>
        <hr className='accordhr'/>
        <Accordion.Body className='text-dark'>
         <p> Add a charm to your ethnic look by adding Men's Trendy Peshawari Sandals by Ndure your footwear collection.</p>

       <p>They have been made with 100% Genuine Leather which makes them durable and provide you with the luxe finish.</p> 

       <p> These are designed with Classic round toe and cushioned insoles, making it perfect for wearing it all day.</p>

        <p> The PU outsole provides grip and a good resistance to slip. </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

             </div>
        </div> {/*End of second 4 column*/}

      </div>
    </div>

  )
}

export default Shoeinfo
