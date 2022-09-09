import React from 'react'
import { Helmet } from 'react-helmet'
import Kidsheader from './Kidsheader/Kidsheader'
import Kidslanding from './Kidslanding/Kidslanding'
import Kidssecondnavbar from './KidsSecondnavbar/Kidssecondnavbar'

function Kidspage() {
  return (
    <div>
      <Helmet>
        <title>Kids Shoes|Kids Apparel|Kids Accessories - Ndure.com </title>
      </Helmet>
        <Kidsheader/>
        <Kidssecondnavbar/>
        <Kidslanding/>
    </div>
  )
}

export default Kidspage