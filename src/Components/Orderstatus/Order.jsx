import React from 'react'
import Kidsheader from '../Kidsheader/Kidsheader'

function Order() {
  return (
    <div>
      <Kidsheader />

      <h1 className='text-start mx-5 mb-3'>Order Status</h1>
      <p className='text-start mx-5 fs-5'>For Leopards, Please click here to check the delivery status of your order by providing the valid nine (09) digit tracking number.
        i.e; 123456789
          <br />
          <br />
        For Swyft, Please click here to check the delivery status of your order by providing the valid Fifteen (15) digit tracking number.
        i.e; LHR123456789123</p>
    </div>
  )
}

export default Order
