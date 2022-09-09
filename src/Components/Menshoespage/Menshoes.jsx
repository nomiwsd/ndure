import React from 'react'
import { Helmet } from 'react-helmet'
import Menheader from '../Menheader/Menheader'
import Shoes1 from '../Assets/Menpage/MenShoesPage/First(1).jpg'
import Shoes2 from '../Assets/Menpage/MenShoesPage/First(2).jpg'
import { BiFilterAlt } from 'react-icons/bi'
import { useState } from "react";
import { BsFilter } from 'react-icons/bs'
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import './Menshoes.css'
function Menshoes() {

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    return (
        <div>
            <Helmet>
                <title>Buy Shoes Collection Online In Pakistan|Ndure - Ndure.com </title>
            </Helmet>
            <Menheader />
            
    <h1 className='menpagehead text-start mx-5'>MEN- ALL SHOES</h1>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-2 d-none d-md-none d-lg-none d-xl-flex d-flex">
                        <BiFilterAlt className='mt-1' />
                        <p className='refinetxt m-0 d-inline-flex'>Refine By</p>
                    </div>
                    <div className="col-lg-2 categorybar d-none d-md-none d-lg-none d-xl-flex d-inline-flex ">
                        <p className='col-6 m-0 mt-1 p-0'>Categories</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>

                            <ul className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">

                                <li className="dropdown-item" href="#">
                                    Winter Collection
                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">
                                    <Accordion className="accordion col-12">
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header className='px-3'><h6>Men</h6></Accordion.Header>
                                            <Accordion.Body className="accordianbody">
                                                <ul className='List text-dark'>
                                                    <li className='py-2'>Chappals</li>
                                                    <li className='py-2'>Sandals</li>
                                                    <li className='py-2'>Peshawari Chappals</li>
                                                    <li className='py-2'>Formal Shoes</li>
                                                    <li className='py-2'>Casual Shoes/Sneakers</li>
                                                    <li className='py-2'>Athleisure/Sports Shoes</li>
                                                    <li className='py-2'>Loafers /SlipOns</li>
                                                    <li className='py-2'>Boots</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">
                                    <Accordion className="accordion col-12">
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header className='px-3'><h6>Women</h6></Accordion.Header>
                                            <Accordion.Body className="accordianbody">
                                                <ul className='List text-dark'>
                                                    <li className='py-2'>Chappal/Flats</li>
                                                    <li className='py-2'>Sandals</li>
                                                    <li className='py-2'>Casual Shoes / Sneakers</li>
                                                    <li className='py-2'>Heels</li>
                                                    <li className='py-2'>Athleisure/Sports Shoes</li>
                                                    <li className='py-2'>Pumps</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                    <Accordion className="accordion col-12">
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header className='px-3'><h6>Kids</h6></Accordion.Header>
                                            <Accordion.Body className="accordianbody">
                                                <ul className='List text-dark'>
                                                    <li className='py-2'>Boys</li>
                                                    <li className='py-2'>Girls</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                    <Accordion className="accordion col-12">
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header className='px-3'><h6>Apparel</h6></Accordion.Header>
                                            <Accordion.Body className="accordianbody">
                                                <ul className='List text-dark'>
                                                    <li className='py-2'>
                                                        <Accordion className="accordion col-12">
                                                            <Accordion.Item eventKey="6">
                                                                <Accordion.Header className='px-3'><h6>Men</h6></Accordion.Header>
                                                                <Accordion.Body className="accordianbody">
                                                                    <ul className='List text-dark'>
                                                                        <li className='py-2'>Jackets</li>
                                                                        <li className='py-2'>Hoodies & Sweats</li>
                                                                        <li className='py-2'>Tousers</li>
                                                                        <li className='py-2'>Track Suits</li>
                                                                        <li className='py-2'>Sports Wear</li>
                                                                        <li className='py-2'>Tees</li>
                                                                        <li className='py-2'>Shorts</li>

                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='py-2'>
                                                        <Accordion className="accordion col-12">
                                                            <Accordion.Item eventKey="7">
                                                                <Accordion.Header className='px-3'><h6>Women</h6></Accordion.Header>
                                                                <Accordion.Body className="accordianbody">
                                                                    <ul className='List text-dark'>
                                                                        <li className='py-2'>Hoodies & Sweats</li>
                                                                        <li className='py-2'>Jackets</li>
                                                                        <li className='py-2'>Tousers</li>
                                                                        <li className='py-2'>Track Suits</li>
                                                                        <li className='py-2'>Sports Bra</li>
                                                                        <li className='py-2'>Sports Wear</li>
                                                                        <li className='py-2'>Tees</li>
                                                                        <li className='py-2'>Yoga Pants</li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>


                                                    </li>
                                                    <li className='py-2'>
                                                        <Accordion className="accordion col-12">
                                                            <Accordion.Item eventKey="8">
                                                                <Accordion.Header className='px-3'><h6>Boys</h6></Accordion.Header>
                                                                <Accordion.Body className="accordianbody">
                                                                    <ul className='List text-dark'>

                                                                        <li className='py-2'>Junior(3-8 Years)</li>
                                                                        <li className='py-2'>Senior(9-14 Years)</li></ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                    <li className='py-2'>
                                                        <Accordion className="accordion col-12">
                                                            <Accordion.Item eventKey="9">
                                                                <Accordion.Header className='px-3'><h6>Girls</h6></Accordion.Header>
                                                                <Accordion.Body className="accordianbody">
                                                                    <ul className='List text-dark'>
                                                                        <li className='py-2'>Junior(3-8 Years)</li>
                                                                        <li className='py-2'>Senior(9-14 Years)</li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>


                                </li>
                                <li className="dropdown-item " href="#">
                                    Sale
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="col-lg-2 d-inline-flex categorybar d-none d-md-none d-lg-none d-xl-flex mx-2">
                        <p className='col-6 m-0 mt-1 p-0'>Price</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>

                            <ul className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">

                                <li className="dropdown-item" href="#">

                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">

                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">

                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">

                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                </li>

                            </ul>

                        </div>

                    </div>
                    <div className="col-lg-2 d-inline-flex categorybar d-none d-md-none d-lg-none d-xl-flex">
                        <p className='col-6 m-0 mt-1 p-0'>Size</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>

                            <div className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">39/5</button>
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">40/6</button>
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">41/7</button>
                                <br />
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">42/8</button>
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">43/9</button>
                                <br />
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">44/10</button>
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">45/11</button>
                                <br />
                                <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">46/12</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-8 d-flex col-md-4 order-md-2 order-lg-2 order-first p-0 m-0 categorybar ms-2">
                        <p className='col-6 m-0 mt-1 p-0'>Featured</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>

                            <ul className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">

                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Featured
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Best Selling
                                </li>
                                <li className="dropdown-item p-0 m-0  px-3" href="#">
                                    Alphabetically,A-Z
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Alphabetically ,Z-A
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Price ,low to high
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Price ,high to low
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Date ,old to new
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Date ,new to old
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="col-3 col-md-3 col-lg-4 col-xl-4 order-md-1 order-lg-1 order-last d-block d-md-flex d-lg-flex d-xl-none p-0">
                        <Button
                            variant="toggle"
                            className="d-lg-block d-xl-none p-0 border-0"
                            onClick={handleShow4}
                        >   <BsFilter className='toggleicon fs-2' />
                        </Button>
                        <Offcanvas show={show4} onHide={handleClose4} responsive="xl">
                            <Offcanvas.Header className="" closeButton>

                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Accordion className='accordion'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Categories</Accordion.Header>
                                        <Accordion.Body>
                                            <Accordion>
                                                <p className='p-0 text-dark m-0' >Winter Collection</p>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Men</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className='px-3 text-dark'>
                                                            <li className='py-2'>Chappals</li>
                                                            <li className='py-2'>Sandals</li>
                                                            <li className='py-2'>Peshawari Chappals</li>
                                                            <li className='py-2'>Formal Shoes</li>
                                                            <li className='py-2'>Casual Shoes/Sneakers</li>
                                                            <li className='py-2'>Athleisure/Sports Shoes</li>
                                                            <li className='py-2'>Loafers /SlipOns</li>
                                                            <li className='py-2'>Boots</li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Women</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className='px-3 text-dark'>
                                                            <li className='py-2'>Chappal/Flats</li>
                                                            <li className='py-2'>Sandals</li>
                                                            <li className='py-2'>Casual Shoes / Sneakers</li>
                                                            <li className='py-2'>Heels</li>
                                                            <li className='py-2'>Athleisure/Sports Shoes</li>
                                                            <li className='py-2'>Pumps</li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Kids</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className='px-3 text-dark'>
                                                            <li className='py-2'>Boys</li>
                                                            <li className='py-2'>Girls</li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Apparel</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Accordion>
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>Men</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='px-3 text-danger' >
                                                                        <li className='py-2'>Jackets</li>
                                                                        <li className='py-2'>Hoodies & Sweats</li>
                                                                        <li className='py-2'>Tousers</li>
                                                                        <li className='py-2'>Track Suits</li>
                                                                        <li className='py-2'>Sports Wear</li>
                                                                        <li className='py-2'>Tees</li>
                                                                        <li className='py-2'>Shorts</li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>Women</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='px-3 text-danger'>
                                                                        <li className='py-2'>Hoodies & Sweats</li>
                                                                        <li className='py-2'>Jackets</li>
                                                                        <li className='py-2'>Tousers</li>
                                                                        <li className='py-2'>Track Suits</li>
                                                                        <li className='py-2'>Sports Bra</li>
                                                                        <li className='py-2'>Sports Wear</li>
                                                                        <li className='py-2'>Tees</li>
                                                                        <li className='py-2'>Yoga Pants</li>
                                                                    </ul>                                                                                                       </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="2">
                                                                <Accordion.Header>Boys</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='px-3 text-danger'>
                                                                        <li className='py-2'>Junior(3-8 Years)</li>
                                                                        <li className='py-2'>Senior(9-14 Years)</li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            <Accordion.Item eventKey="3">
                                                                <Accordion.Header>Girls</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <ul className='px-3 text-danger'>
                                                                        <li className='py-2'>Junior(3-8 Years)</li>
                                                                        <li className='py-2'>Senior(9-14 Years)</li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>

                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <p className='p-0 text-dark'>SALE</p>
                                            </Accordion>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Price</Accordion.Header>
                                        <Accordion.Body className='text-dark'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Size</Accordion.Header>
                                        <Accordion.Body className="text-dark">
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">39/5</button>
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">40/6</button>
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">41/7</button>
                                            <br />
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">42/8</button>
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">43/9</button>
                                            <br />
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">44/10</button>
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">45/11</button>
                                            <br />
                                            <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">46/12</button>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>

            </div>

            <div className='px-3'>
                <div className="row py-3 m-0  justify-content-between ">
                    <div className="col-lg-3 col-6 m-0 p-0" >
                        <div className="card my-3 mx-1">
                            <div class="thumbnail">
                                <div class="picture1">
                                    <img src={Shoes1} className="col-12" alt="" />
                                </div>
                                <div class="picture2">
                                    <Link to="/Shoeinfo"><img src={Shoes2} className="col-12" alt="" /></Link>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                                    <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 p-0 m-0'>
                        <div className="card my-3 mx-1">
                            <div class="thumbnail">
                                <div class="picture1">
                                    <img src={Shoes1} className="col-12" alt="" />
                                </div>
                                <div class="picture2">
                                    <img src={Shoes2} className="col-12" alt="" />
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                                    <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                            </div>
                        </div></div>
                    <div className='col-lg-3 col-6 p-0'>
                        <div className="card my-3 mx-1">
                            <div class="thumbnail">
                                <div class="picture1">
                                    <img src={Shoes1} className="col-12" alt="" />
                                </div>
                                <div class="picture2">
                                    <img src={Shoes2} className="col-12" alt="" />
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                                    <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                            </div>
                        </div></div>
                    <div className='col-lg-3 col-6 p-0'>
                        <div className="card my-3 mx-1">
                            <div class="thumbnail">
                                <div class="picture1">
                                    <img src={Shoes1} className="col-12" alt="" />
                                </div>
                                <div class="picture2">
                                    <img src={Shoes2} className="col-12" alt="" />
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                                    <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Menshoes

