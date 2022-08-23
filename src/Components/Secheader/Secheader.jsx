import React from 'react'
import Form from 'react-bootstrap/Form'
import {BsSearch} from 'react-icons/bs' 
import {FaUserAlt} from 'react-icons/fa' 
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai' 
import Logo from '../Assets/Logo.webp'
import {Link} from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Homepage from '../Homepage';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Secheader.css"
function Secheader() {


    const [myshow,mysetShow] = useState(false);

    const myhandleClose = () => mysetShow(false);
    const myhandleShow = () => mysetShow(true);

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <div className="row py-3 headerd m-0">
  <ol class="breadcrumb col-md-2 m-0">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
        <Link className="col-6 col-md-3" to={<Homepage/>}><img src={Logo} alt='wait for internet' title='logo'/> </Link> 

        <div className="col-5 col-md-3 ">
     <div className="searchdiv">
     <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchinp"
              aria-label="Search"
           /><BsSearch className='searchic'/>
          </Form> 
           </div>
           <a className="user px-2" onClick={handleShow}>
        <FaUserAlt/>
      </a>
      <Offcanvas show={show} onHide={handleClose}  placement="end" responsive="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Customer Login:</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form className='mx-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className='offcanvasbtn w-100' type="submit">
       Login
      </Button>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <p className="forgettext">
          Forget Your Password?
          </p>
      </Form.Group>
      <Button className='offcanvasbtn2 w-100' type="submit">
       Create Account
      </Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
           <FiHeart className='mx-2'/> 
           <a className="px-2" onClick={myhandleShow}>
           <AiOutlineShoppingCart/>
      </a>
      <Offcanvas show={myshow} onHide={myhandleClose}  placement="end" responsive="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Your Cart</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form className='mx-3'>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <p className="carttext">
          Your Cart is Currently empty.
          </p>
      </Form.Group>
      <Button className='offcanvasbtn1 w-100'>
       Continue Shopping
      </Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
          
        </div>
      </div>
    </div>
  )
}

export default Secheader
