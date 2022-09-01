import React from 'react'
import Secheader from './Menheader/Menheader';
import MenLanding from './Menlandingpage/MenLanding';
import Mencategories from './Mencategories/Mencategories';
import Secondnavbar from './Secondnavbar/Secondnavbar';
function Menpage() {
  return (
    <div>
        <Secheader/>
        <Secondnavbar/>
        <MenLanding/>
        <Mencategories/>
    </div>
  )
}

export default Menpage