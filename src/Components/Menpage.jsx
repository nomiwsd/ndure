import React from 'react'
import {Helmet} from 'react-helmet'
import Secheader from './Menheader/Menheader';
import MenLanding from './Menlandingpage/MenLanding';
import Mencategories from './Mencategories/Mencategories';
import Secondnavbar from './Secondnavbar/Secondnavbar';
function Menpage() {
  return (
    <div>
       <Helmet>
        <title>Men Shoes|Men Apparel|Men Accessories - Ndure.com </title>
      </Helmet>
        <Secheader/>
        <Secondnavbar/>
        <MenLanding/>
        <Mencategories/>
    </div>
  )
}

export default Menpage