import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img3 from '../Assets/slideimg(9).jpg'
import Img4 from '../Assets/slideimg(2).jpg'
import Img5 from '../Assets/Kidspage/slideimgkids.jpg'
import Img6 from '../Assets/Kidspage/slideimg2d.jpg'
import Img1 from '../Assets/Kidspage/Kidsshopshoes.jpg'
import Img2 from '../Assets/Kidspage/Kidsshopapparel.jpg'
import Mctimg1 from '../Assets/Kidspage/Sandalsboys.png'
import Mctimg2 from '../Assets/Kidspage/Chappalboys.png'
import Mctimg3 from '../Assets/Kidspage/AthleisureBoys.png'
import Mctimg4 from '../Assets/Kidspage/Casualboys.jpg'
import Mctimg5 from '../Assets/Kidspage/FormalBoys.png'
import Mctimg6 from '../Assets/Kidspage/PeshawariBoys.png'
import Mctimg7 from '../Assets/Kidspage/Bootsboys.png'
import Mctimg8 from '../Assets/Kidspage/SlipOns.png'
import Mctimg9 from '../Assets/Kidspage/Chappalsgirls.png'
import Mctimg10 from '../Assets/Kidspage/Sandalsgirls.png'
import Mctimg11 from '../Assets/Kidspage/Athleisuregirls.png'
import Mctimg12 from '../Assets/Kidspage/Pumpsgirls.png'
import Mctimg13 from '../Assets/Kidspage/Schoolgirls.png'
import Mctimg14 from '../Assets/Kidspage/Casualgirls.jpg'
import Bannerimg from '../Assets/Kidspage/banner.jpg'
import "swiper/css/free-mode";
import "./kidslanding.css"
import { Autoplay, Navigation } from "swiper";
import { FreeMode, Pagination } from "swiper";
import { Link } from 'react-router-dom';
function Kidslanding() {
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
                modules={[Autoplay, Navigation]}
                className="mySwiper mb-3  pb-md-0 pb-lg-0 position-relative">
                <div className='row m-0 justify-content-center justify-content-end btnpos'>
                    <div className="swiperbuttons row col-12 col-lg-5 col-md-8 gap-md-2 mx-0 gap-lg-2 align-items-center justify-content-center p-0">
                        <Link to='/Boysshoespage' className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">BOYS</Link>
                        <Link to='/Girlsshoespage' className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">GIRLS</Link>
                        <Link to='/Kidsaccessoriespage' className="col-lg-3 col-4 col-md-3 p-0 py-2 swiperbtn">ACCESSORIES</Link>
                    </div>
                </div>

                <SwiperSlide className="swiperslide5 d-none d-md-block" data-hash="slide3">
                    <img src={Img3} alt="wait for internet" /></SwiperSlide>
                <SwiperSlide className="swiperslide6 d-block d-md-none d-lg-none d-xlg-none" data-hash="slide1"><img src={Img4} alt="wait for internet" /></SwiperSlide>
                <SwiperSlide
                    className="swiperslide3 d-none d-md-block"
                    data-hash="slide2">
                    <img src={Img5} alt="wait for internet" />
                </SwiperSlide>
                <SwiperSlide
                    className="swiperslide4 d-block d-md-none d-lg-none d-xlg-none"
                    data-hash="slide1">
                    <img src={Img6} alt="wait for internet" />
                </SwiperSlide>

            </Swiper>

            <div className="row p-0 m-0 ">
                <img src={Img1} className="col-12 col-lg-6 col-md-6 my-2" alt="wait for internet" />
                <img src={Img2} className="col-12 col-lg-6 col-md-6 my-2" alt="wait for internet" />
            </div>

            <h4 className='text-start mx-3 '>BOYS FOOTWEAR</h4>
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
                        <p className='fwp  p-0'>Athleisure</p>
                    </div>
                    <div className=" mx-1 d-none d-md-block col-md-3 col-lg-2">
                        <img src={Mctimg4} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Casual</p>
                    </div>
                    <div className=" mx-1  d-none d-md-none d-lg-block  col-lg-2">
                        <img src={Mctimg5} className=" p-0" alt="wait for internet" />
                        <p className='fwp p-0'>Formal</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-4 ms-4 px-lg-0'>
                    <div className=" mx-1 row col-4 d-md-none d-lg-none col-lg-2">
                        <img src={Mctimg4} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Casual</p>
                    </div>
                    <div className=" mx-1 row col-4 col-md-3 d-lg-none col-lg-2">
                        <img src={Mctimg5} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Formal</p>
                    </div>
                    <div className="mx-1 row col-4 col-md-3 col-lg-2">
                        <img src={Mctimg6} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Peshawari</p>
                    </div>
                    <div className="mx-1 row col-md-3 d-none d-md-block col-lg-2">
                        <img src={Mctimg7} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Boots</p>
                    </div>
                    <div className="mx-1 row col-md-3 d-none d-md-block col-lg-2">
                        <img src={Mctimg8} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>SlipOns</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='d-md-none px-3'>
                    <div className="mx-1 row col-4 col-lg-2">
                        <img src={Mctimg6} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Peshawari</p>
                    </div>
                    <div className="mx-1 row col-4 d-lg-none col-lg-2">
                        <img src={Mctimg7} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Boots</p>
                    </div>
       cj             <div className="mx-1 row col-4 d-lg-none col-lg-2">
                        <img src={Mctimg8} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>SlipOns</p>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="row my-4 overflow-hidden">
                <div className="d-inline-flex flex-row  d-none d-md-none d-lg-none d-xl-flex px-5">
                    <div className="mx-1 row col-6 p-0 col-lg-2">
                        <img src={Mctimg1} className="col-10  p-0" alt="" />
                        <p className='fwp col-10 p-0'>SANDALS</p>
                    </div>
                    <div className=" mx-1 row col-6 col-lg-2 p-0">
                        <img src={Mctimg2} className="col-10 p-0" alt="wait for internet" />
                        <p className='fwp col-10 p-0'>CHAPPALS</p>
                    </div>
                    <div className=" mx-1 row col-6 col-lg-2 p-0">
                        <img src={Mctimg3} className="col-10 p-0" alt="wait for internet" />
                        <p className='fwp col-10 p-0'>ATHLEISURE</p>
                    </div>
                    <div className=" mx-1 row col-6  col-lg-2">
                        <img src={Mctimg4} className="col-10 p-0" alt="wait for internet" />
                        <p className='fwp col-10 p-0'>Casual SHOES</p>
                    </div>
                    <div className=" mx-1 row col-6  col-lg-2">
                        <img src={Mctimg5} className="col-10 p-0" alt="wait for internet" />
                        <p className='fwp col-10 p-0'>FORMAL SHOES</p>
                    </div>
                    <div className="mx-1 row col-6 col-lg-2">
                        <img src={Mctimg6} className="col-10 p-0" alt="wait for internet" />
                        <p className='fwp col-10 p-0'>PESHAWARI CHAPPALS</p>
                    </div>
                </div>
            </div>
            <div className='girlsfootwear d-none d-xl-block my-5'>
                <h4 className='text-start  mx-4 '>GIRLS FOOTWEARS</h4>
                <div className="m-0 p-0 d-flex flex-row d-flex d-none d-md-none d-lg-none d-xl-flex oversm ">
                    <div className='col-6  col-lg-2 px-2 py-2'>
                        <div className="card p-0" >
                            <figure class="hover-img">
                                <img src={Mctimg9} className="col-10 p-0 py-1" alt="wait for internet" />
                            </figure>
                            <div class="card-body px-0">
                                <p class="card-text fwp text-center p-0">CHAPPALS</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-lg-2 px-2 py-2'>
                        <div className="card p-0" >
                            <figure class="hover-img">
                                <img src={Mctimg10} className="col-10 p-0 py-1" alt="wait for internet" />
                            </figure>
                            <div class="card-body px-0">
                                <p class="card-text fwp text-center p-0">Sandals</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-lg-2 px-2 py-2'>
                        <div className="card p-0" >
                            <figure class="hover-img">
                                <img src={Mctimg11} className="col-10 p-0 py-1" alt="wait for internet" />
                            </figure>
                            <div class="card-body px-0">
                                <p class="card-text fwp text-center p-0">Athleisure</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-lg-2 px-2 py-2'>
                        <div className="card p-0" >
                            <figure class="hover-img">
                                <img src={Mctimg12} className="col-10 p-0 py-1" alt="wait for internet" />
                            </figure>
                            <div class="card-body px-0">
                                <p class="card-text fwp text-center p-0">Pumps</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-lg-2 px-2 py-2'>
                        <div className="card p-0" >
                            <figure class="hover-img">
                                <img src={Mctimg13} className="col-10 p-0 py-1" alt="wait for internet" />
                            </figure>
                            <div class="card-body px-0">
                                <p class="card-text text-center fwp  p-0">School Shoes</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-lg-2 px-2 py-2'>
                        <div className="card p-0" >
                            <figure class="hover-img">
                                <img src={Mctimg14} className="col-10 p-0 py-1" alt="wait for internet" />
                            </figure>
                            <div class="card-body px-0">
                                <p class="card-text fwp text-center p-0">Casual Sneakers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='text-start  mx-4 '>GIRLS FOOTWEARS</h4>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper boysswiper d-block d-md-block d-lg-block d-xl-none p-3  m-0">
                <SwiperSlide className='me-1 me-md-0 mb-4 pb-3 px-lg-0'>
                    <div className="mx-1 mx-lg-3 col-md-3 p-0 col-lg-2 ">
                        <img src={Mctimg9} className=" p-0" alt="" />
                        <p className='fwp p-0'>CHAPPALS</p>
                    </div>
                    <div className="mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
                        <img src={Mctimg10} className=" p-0" alt="wait for internet" />
                        <p className='fwp p-0'>Sandals</p>
                    </div>
                    <div className="mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
                        <img src={Mctimg11} className="p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Athleisure</p>
                    </div>
                    <div className="mx-1 mx-lg-3 d-none d-md-block col-md-3 col-lg-2">
                        <img src={Mctimg12} className=" p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Pumps</p>
                    </div>
                    <div className="mx-1 mx-lg-3  d-none d-md-none d-lg-block  col-lg-2">
                        <img src={Mctimg13} className=" p-0" alt="wait for internet" />
                        <p className='fwp p-0'>School Shoes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='ms-4 px-md-4 pb-5 px-lg-0'>
                    <div className=" mx-1 mx-lg-3 d-none d-md-none d-lg-block col-lg-2 p-0">
                        <img src={Mctimg10} className=" p-0" alt="wait for internet" />
                        <p className='fwp p-0'>Sanadals</p>
                    </div>
                    <div className=" mx-1 mx-lg-3 d-none d-md-block col-md-3 col-lg-2 p-0">
                        <img src={Mctimg11} className="p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Athleisure</p>
                    </div>
                    <div className="mx-1 mx-lg-3 col-md-3 p-0 col-lg-2 ">
                        <img src={Mctimg12} className=" p-0" alt="" />
                        <p className='fwp p-0'>Pumps</p>
                    </div>
                    <div className="mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
                        <img src={Mctimg13} className=" p-0" alt="wait for internet" />
                        <p className='fwp p-0'>School</p>
                    </div>
                    <div className="mx-1 mx-lg-3  col-md-3 col-lg-2 p-0">
                        <img src={Mctimg14} className="p-0" alt="wait for internet" />
                        <p className='fwp  p-0'>Casual</p>
                    </div>
                </SwiperSlide>
            </Swiper>


            <img src={Bannerimg} className="bannerimg" alt="wait for internet" />
        </div>
    )
}

export default Kidslanding