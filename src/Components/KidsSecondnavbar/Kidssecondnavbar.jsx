import React from 'react'
import { useEffect } from 'react';
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import '../Menheader/Menheader.css'
function Kidssecondnavbar() {
    useEffect(()=>{
       
        window.onscroll = function() {scrollFunction()}
        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
              document.getElementById("navbar").style.top = "0";
            } else {
              document.getElementById("navbar").style.top = "-70px";
            }
          }
    },[])
    const [myshow, mysetShow] = useState(false);

  const myhandleClose = () => mysetShow(false);
  const myhandleShow = () => mysetShow(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div>
       <div id="navbar">
        <div className="row d-none d-md-flex d-lg-flex py-3 p-0 m-0">
       <div className="col-7 d-flex justify-content-end p-0 m-0">
       <div className="col-2 navitem ">
          <a href="#">Summer'22</a>
        </div>

        <div className="col-2 navitem m-0  p-0 dropdown">
          <a
            className="Navlink m-0"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false" 
          >
            Shoes
          </a>
          <ul class="dropdown-menu px-3" aria-labelledby="dropdownMenuButton">
            <li class="dropdown-item  py-0 mb-2 m-0 " href="#">
              Boys
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item py-0 my-2 m-0" href="#">
              Girls
            </li>
           
          </ul>
        </div>
        <div className="col-2 navitem dropdown m-0 p-0">
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
              Boys
            </li>
            <hr className="hrline mx-3 m-0 py-0" />
            <li class="dropdown-item  py-0 my-2 m-0 " href="#">
              Girls
            </li>
        
          </ul>
        </div>
        <div className="col-2 navitem">
          <a href="#">Sale</a>
        </div>

       </div>
        <div className="col-5 navitem p-0 d-inline-flex justify-content-end">
        <div className=" d-flex p-0 ">
            <div className='vl me-2'></div>
                  <BsSearch className="me-3 mt-2" />
            <div className='vl me-2'></div>     
               <a className="cartlink px-2" onClick={myhandleShow}>
                <AiOutlineShoppingCart title="Cart icon" />
              </a>
              <div className='vl me-2'></div>
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
            

        </div>

    </div>
  )
}

export default Kidssecondnavbar
