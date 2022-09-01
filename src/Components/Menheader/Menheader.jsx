import React from "react";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt, FaLessThan, FaGreaterThan } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdLegendToggle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../Assets/Logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Menheader.css";
function Menheader() {
  const [myshow, mysetShow] = useState(false);

  const myhandleClose = () => mysetShow(false);
  const myhandleShow = () => mysetShow(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [show2, setShow2] = useState(false);

  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);

  // const [show3, setShow3] = useState(false);

  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  return (
    <div>
      {/* <div className="row headerd  m-0 mx-lg-5">
        <div className="col-2 d-block d-md-none">
          <Button
            variant="toggle"
            className="d-lg-none p-0 border-0"
            onClick={handleShow2}
          >
            <MdLegendToggle className="toggleicon" />
          </Button>
          <Offcanvas show={show2} onHide={handleClose2} responsive="lg">
            <Offcanvas.Header className="" closeButton>
              <div class="breadcrumb row mx-3 mt-2">
                <Link to="/Menpage" className="col-3 btn btn-danger mx-1">MEN</Link>
                <Link to="/Womenpage" className="col-4 btn btn-danger  mx-1">WOMEN</Link>
                <Link to="/Kidspage" className="col-3 btn btn-danger mx-1">KIDS</Link>
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="row justify-content-center d-block px-3 py-3 ">
                <div className="col-1 ps-0 py-2">
                  {" "}
                  <a href="#">Summer'22</a>{" "}
                </div>
                <hr className="w-100  m-0 py-0" />
                <div className="col-12 ps-0 py-2 m-0 row dropdown">
                  <a
                    className="Navlink col-11 ps-0 d-flex-inline"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={handleShow3}
                  >
                    Shoes
                  </a>
                  <FaGreaterThan className="col-1 p-0 d-flex justify-content-end my-1 canvasicons" />
                  <Offcanvas show={show3} onHide={handleClose3}>
                    <Offcanvas.Header closeButton>
                      <FaLessThan className="my-1 canvasicons" />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <ul class=" px-3" aria-labelledby="dropdownMenuButton">
                        <li class="  py-0 mb-2 m-0 " href="#">
                          Casual Shoes / Sneakers
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Athleisure / Sports Shoes
                        </li>
                        <hr className="m-0 py-0" />
                        <li class="  py-0 my-2 m-0" href="#">
                          Loafers / Slip-Ons
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Formal Shoes
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Boots
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Chappals
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Sandals
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Peshawari Chappal
                        </li>
                      </ul>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                <hr className="w-100 m-0 py-0" />
                <div className="col-12  ps-0 py-2 m-0 row dropdown">
                  <a
                    className="Navlink col-11 ps-0 d-flex-inline"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={handleShow3}
                  >
                    Clothes
                  </a>
                  <FaGreaterThan className="col-1 p-0 d-flex justify-content-end my-1 canvasicons" />
                  <Offcanvas show={show3} onHide={handleClose3}>
                    <Offcanvas.Header closeButton>
                      <FaLessThan className="my-1 canvasicons" />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <ul class=" px-3" aria-labelledby="dropdownMenuButton">
                        <li class="  py-0 mb-2 m-0 " href="#">
                          Atheletic Wear
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Tees
                        </li>
                        <hr className="m-0 py-0" />
                        <li class="  py-0 my-2 m-0" href="#">
                          Hoodies & Sweats
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Jackets
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Trousers
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Shorts
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Track Suits
                        </li>
                        <hr className="m-0 py-0" />
                        <li class=" py-0 my-2 m-0" href="#">
                          Accessories
                        </li>
                      </ul>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                <hr className="w-100 m-0 py-0" />
                <div className="col-1 ps-0 py-2">
                  <a href="#">Accessories</a>
                </div>
                <hr className="w-100 m-0 py-0" />
                <div className="col-1 ps-0 py-2">
                  <a href="#">Sale</a>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div> */}
        <div class="container">
          {/* First Navbar */}
          <div className="row m-0 py-3">    
            <ul class="col-md-3 breadcrumb col-lg-4 m-0 py-2 d-none d-md-block d-lg-block d-inline-flex position-relative">
              <li>
                <Link to="/Menpage" className="men active mx-2" aria-current="page">
                  MEN
                </Link>
              </li>
              <li>
                <Link className="mx-2" to="/Womenpage">
                  WOMEN
                </Link>
              </li>
              <li>
                <Link to="/Kidspage">KIDS</Link>
              </li>
            </ul>
            <Link className="col-6 col-md-3 col-lg-4" to='../'>
              <img src={Logo} alt="wait for internet" title="logo" />
            </Link>

            <div className="col-4 col-md-6 col-lg-4 d-inline-flex justify-content-end p-0 ">
              <div className="searchdiv">
                <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="searchinp"
                    aria-label="Search"
                  />
                  <BsSearch className="searchic" />
                </Form>
              </div>
              <a className="user px-2" onClick={handleShow}>
                <FaUserAlt />
              </a>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                responsive=""
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h3>Customer Login:</h3>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form className="mx-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email Address:</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="offcanvasbtn w-100">Login</Button>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <p className="forgettext">Forget Your Password?</p>
                    </Form.Group>
                    <Link to='../Createaccountmen' className="offcanvasbtn2 btn w-100">Create Account</Link>
                  </Form>
                </Offcanvas.Body>
              </Offcanvas>
              <FiHeart className="mx-2 my-2" />
              <a className="cartlink px-2" onClick={myhandleShow}>
                <AiOutlineShoppingCart title="Cart icon" />
              </a>
              <Offcanvas
                show={myshow}
                onHide={myhandleClose}
                placement="end"
                responsive=""
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h3>Your Cart</h3>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form className="mx-3">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <p className="carttext">Your Cart is Currently empty.</p>
                    </Form.Group>
                    <Button className="offcanvasbtn1 w-100">
                      Continue Shopping
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>

        <hr className="W-100 m-0" /> 
        <div className="container-fluid Secondnavbar  mb-2">
        <div className="row justify-content-center d-none d-md-flex d-lg-flex py-3 m-0">
        <div className="col-1 navitem ps-0">
          <a href="#">Summer'22</a>
        </div>

        <div className="col-1 navitem ps-0 dropdown">
          <a
            className="Navlink mx-3"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false" 
          >
            Shoes
          </a>
          <ul class="dropdown-menu px-3" aria-labelledby="dropdownMenuButton">
            <li class="dropdown-item  py-0 mb-2 m-0 " href="#">
              Casual Shoes / Sneakers
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Athleisure / Sports Shoes
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0" href="#">
              Loafers / Slip-Ons
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Formal Shoes
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Boots
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Chappals
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Sandals
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Peshawari Chappal
            </li>
          </ul>
        </div>
        <div className="col-1 navitem dropdown ps-0">
          <a
            className="Navlink"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Clothing
          </a>
          <ul class="dropdown-menu px-2" aria-labelledby="dropdownMenuButton">
            <li class="dropdown-item  py-0 mb-2 m-0 " href="#">
              Athletic Wear
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Tees
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Hoodies & Sweats
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Jackets
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Trousers
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Shorts
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Track Suits
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Accessories
            </li>
          </ul>
        </div>
        <div className="col-1 navitem ps-0">
          <a href="#">Accessories</a>
        </div>
        <div className="col-1 navitem ps-0">
          <a href="#">Sale</a>
        </div>
      </div>
        </div>



        {/* main div */}
      </div> 
  );
}

export default Menheader;
