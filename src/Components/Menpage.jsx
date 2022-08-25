import React from 'react'
import Secheader from './Menheader/Menheader';
import MenLanding from './Menlandingpage/MenLanding';
import Mencategories from './Mencategories/Mencategories';
function Menpage() {
  return (
    <div>
        <Secheader/>
        <MenLanding/>
        <Mencategories/>
    </div>
  )
}

export default Menpage