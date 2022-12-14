import React from 'react'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="container-fluid px-0">
                <span className="signhead">SUBSCRIBE TO OUR NEWSLETTER</span>
                <div className=" align-items-start py-4">
                    <div className='row justify-content-lg-center justify-content-md-center justify-content-sm-center px-4 align-items-center  m-0'>
                        <div className="col-lg-5 col-md-8 col-8 subscribesect row m-0 p-0 justify-content-center">
                            <AiOutlineMail className='emailic col-lg-2 col-xlg-1 col-3 col-md-1 ' />
                            <input className="inputemail py-3 col-md-10 col-lg-9 col-7" type="email" placeholder="ENTER EMAIL ADDRESS" />
                        </div>

                        <Button variant="" size="sm" className="col-lg-1 col-4 col-md-2 mx-0 btncl py-3">SUBSCRIBE</Button>{' '}
                    </div>
                </div>

                <footer className="text-center text-lg-start ">
                    <div className="container">
                        <section className="">
                            <div className="row">
                                <hr className="w-100 clearfix d-md-none" />
                                <Accordion className="accordian accordianfooter col-12 d-block d-md-none d-lg-none d-xlg-none">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header ><h5 className="accordianheader">About Ndure</h5></Accordion.Header>
                                        <Accordion.Body className="accordianbody">
                                            <ul className='List'>
                                                <li className='footerli my-2'>
                                                    <Link to="/Aboutndure" className="footertxt text-dark ">What is Ndure?</Link>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <a href="http://www.sscbrands.com/" className="footertxt text-dark">Corporate News</a>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <a href="#" className="footertxt text-dark">Customer Reviews</a>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <a href="#" className="footertxt text-dark">Find a Store</a>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <Link to="/Career" className="footertxt text-dark">Careers</Link>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="col-md-6 col-lg-4  col-xl-4 d-none text-start d-md-block d-lg-block d-xlg-block mt-3">
                                    <ul className='p-0'>
                                        <li className="text-uppercase footerhead">About Ndure</li>
                                        <li className='footerli my-2'>
                                            <Link to="/Aboutndure"  className="footertxt text-dark ">What is Ndure?</Link>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="http://www.sscbrands.com/" className="footertxt text-dark">Corporate News</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Customer Reviews</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <a href="#" className="footertxt text-dark">Find a Store</a>
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Career" className="footertxt text-dark">Careers</Link>
                                        </li>
                                    </ul>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />
                                <Accordion className="accordian accordianfooter col-12 d-block d-md-none px-xl-5 d-lg-none d-xlg-none">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><h5 className="accordianheader">Help</h5></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='List'>
                                                <li className='footerli my-2'>
                                                    <Link to="/Order" className="footertxt text-dark">Order Status</Link>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <Link to="/Shipping" className="footertxt text-dark">Shipping and Delivery</Link>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <Link to="/Exchange" className="footertxt text-dark">Return and Exchange Policy</Link>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <Link to="/Faqs" className="footertxt text-dark">FAQS</Link>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <Link to="/Privacy" className="footertxt text-dark">Privacy Policy</Link>
                                                </li>
                                                <li className='footerli my-2'>
                                                    <Link to="/Terms" className="footertxt text-dark">Terms & Conditions</Link>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="col-md-6 col-lg-4 col-xl-5 text-start d-none d-md-block d-lg-block d-xlg-block mt-3">
                                    <ul >
                                        <li className="text-uppercase footerhead">
                                            Help
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Order" className="footertxt text-dark">Order Status</Link>
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Shipping" className="footertxt text-dark">Shipping and Delivery</Link>
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Exchange" className="footertxt text-dark">Return and Exchange Policy</Link>
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Faqs" className="footertxt text-dark">FAQS</Link>
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Privacy" className="footertxt text-dark">Privacy Policy</Link>
                                        </li>
                                        <li className='footerli my-2'>
                                            <Link to="/Terms" className="footertxt text-dark">Terms & Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="w-100 clearfix d-md-none" />
                                <div className="col-md-3 col-lg-2 col-xl-2  mt-3">
                                    <h6 className="d-flex text-uppercase footerhead">Connect with Us</h6>
                                    <div className="row justify-content-between">
                                        <div className='position-relative col-3'>
                                            <div className='circle-icon-blue'></div>
                                            <TiSocialFacebook className="linkicon fs-4" />
                                        </div>
                                        <div className='position-relative col-3'>
                                            <FaInstagram className="linkicon fs-4" />
                                            <div className='circle-icon-blue'></div>
                                        </div>
                                        <div className='position-relative col-3'>
                                            <ImYoutube2 className="linkicon1 fs-4" />
                                            <div className='circle-icon-red'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </footer>
                <section className="copyright">
                    <div className="row d-flex align-items-center justify-content-between m-0">

                        <p className=" col-6 text-start  pt-1 pb-2 m-0"> ALL RIGHTS RESERVED TO NDURE</p>
                        <p className=" col-4 d-flex justify-content-end text-end pt-1 pb-2 m-0">Designed by Ozeefy</p>
                    </div>

                </section>
            </div>



        </div>
    )

}


export default Footer