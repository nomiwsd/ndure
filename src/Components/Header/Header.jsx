import React from 'react'
import Form from 'react-bootstrap/Form'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import Logo from '../Assets/Logo.webp'
import { Link } from 'react-router-dom'
import "./Header.css"
import Homepage from '../Homepage'
function Header() {
  return (
    <div className='container-fluid p-0 m-0'>
    <div className="row py-3 p-0 m-0">

        <div className="col-lg-6 col-md-6 col-4 d-flex justify-content-md-end align-items-center">
            <img src={Logo} alt='wait for internet' title='logo' />
        </div>
        <div className="col-8 col-md-4 d-flex d-xl-none">
            <AiOutlineClose className='closebtn d-none' onClick={()=>{
               let hdsearch=document.querySelector('.hiddensearch')
               hdsearch.classList.remove('d-flex')
               hdsearch.classList.add('d-none')
              
               let searchicons=document.querySelector('.searchicon1')
               searchicons.classList.remove('d-none')
               searchicons.classList.add('d-flex')
              
               let closebtns=document.querySelector('.closebtn')
               closebtns.classList.remove('d-flex')
               closebtns.classList.add('d-none')
                
            }}/>
            <BsSearch className='searchicon1 d-flex'  onClick={()=>{
            let hdsearch=document.querySelector('.hiddensearch')
            hdsearch.classList.remove('d-none')
            hdsearch.classList.add('d-flex')
           
            let searchicons=document.querySelector('.searchicon1')
            searchicons.classList.remove('d-flex')
            searchicons.classList.add('d-none')
           
            let closebtns=document.querySelector('.closebtn')
            closebtns.classList.remove('d-none')
            closebtns.classList.add('d-flex')
           
           }}/>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
            <div className="searchdiv d-none d-xl-flex">
                <Form>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="searchinput1"
                        aria-label="Search"
                    />
                    <BsSearch className='searchicon2' />
                </Form>
            </div>

        </div>
    </div>
    <Form className='hiddensearch d-none'>
        <Form.Control
            type="search"
            placeholder="Search"
            className="searchinput2"
            aria-label="Search"/>
        <BsSearch className='searchicon3' />
    </Form>

    </div>
  )
}

export default Header
