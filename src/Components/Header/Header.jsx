import React from 'react'
import Form from 'react-bootstrap/Form'
import { BsSearch } from 'react-icons/bs'
import Logo from '../Assets/Logo.webp'
import { Link } from 'react-router-dom'
import "./Header.css"
import Homepage from '../Homepage'
function Header() {
  return (
    <div className=''>
      <div className="row py-3 headerd m-0">
        <div className="col-6 col-lg-7 d-flex justify-content-end align-items-center ">
          <Link to={<Homepage />}>   <img src={Logo} className='' alt='wait for internet' title='logo' /> </Link>
        </div>
        <div className="col-5 col-lg-4 d-flex justify-content-end align-items-center ">
          <div className="searchdiv">
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                className="searchinp"
                aria-label="Search"
              /><BsSearch className='searchic' />
            </Form>  </div>
        </div>
      </div>

    </div>
  )
}

export default Header
