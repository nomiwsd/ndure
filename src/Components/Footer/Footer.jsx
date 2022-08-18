import React from 'react'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="container-fluid px-0">
                <span className="signhead">SUBSCRIBE TO OUR NEWSLETTER</span>
                <div className="row d-flex justify-content-center align-items-start py-4">
                   
                    <AiOutlineMail className='emailic'/><input className="inputemail col-5 py-2 mx-5" type="email" placeholder="ENTER EMAIL ADDRESS" />
                   
                    
                        <Button variant="" size="sm" className="col-1 mx-0 my-1 py-2">SUBSCRIBE</Button>{' '}
                </div>

                <footer className="text-center text-lg-start ">
                    <div className="container">
                        <section className="">
                            <div className="row">
                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-3 col-xl-3  mt-3">
                                    <ul>
                                        <li className="text-uppercase footerhead">About Ndure</li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark ">What is Ndure?</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Corporate News</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Customer Reviews</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Find a Store</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Careers</a>
                                        </li>
                                    </ul>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />


                                <div className="col-md-3 col-lg-4 col-xl-4 mx-5 px-5 mt-3">
                                    <ul>
                                        <li className="text-uppercase footerhead">
                                            Help
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Order Status</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Shipping and Delivery</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Return and Exchange Policy</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">FAQS</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Privacy Policy</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-4 col-lg-2 col-xl-2  mt-3">
                                    <h6 className="d-flex text-uppercase footerhead">Connect with Us</h6>
                                    <div className="row d-flex-inline gap-3">
                                        <div class="col-2 content1 ">
                                            <div class="content-overlay1"></div>
                                            <a href="" alt=""><TiSocialFacebook className="linkicon1" /></a>
                                            <div class="fadeIn-left">
                                            </div>
                                        </div>
                                        <div class="col-2 content2">
                                            <div class="content-overlay2"></div>
                                            <a href="" alt=""><FaInstagram className="linkicon1" /></a>
                                            <div class="fadeIn-left">
                                            </div>
                                        </div>
                                        <div class="col-2 content3">
                                            <div class="content-overlay3"></div>
                                            <a href="" alt=""><ImYoutube2 className="linkicon" /></a>
                                            <div class="fadeIn-left">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </footer>
                <section className="copyright">
                    <div className="row d-flex align-items-center justify-content-between">

                        <p className=" col-4 text-start px-5 pt-1 pb-2 m-0"> ALL RIGHTS RESERVED TO NDURE</p>
                        <p className=" col-8 d-flex justify-content-end text-end px-5 pt-1 pb-2 m-0">Designed by Ozeefy</p>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Footer
