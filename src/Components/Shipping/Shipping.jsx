import React from 'react'
import Kidsheader from '../Kidsheader/Kidsheader'

function Shipping() {
    return (
        <div>
            <Kidsheader />
            <h1 className='text-start mx-5 mb-3'>Shipping & Deleivery</h1>
            <ul className='text-start listship mx-5'>
                <li>Free Shipping on all orders above Rs.2,000</li>
                <li>Fixed Shipping on all orders below Rs.2,000</li>
                <li>Rs. 200 will be additionally charged for orders value Rs. 2,000 or below</li>
                <li>The delivery time will be 03-05 working days </li>
                <li>The parcel will be sent though a registered courier company.</li>
                <li>Customers are supposed to pay before receiving the parcel due to security concerns.</li>
                <li>Customer should simply reject the parcel in case its opened or damaged at the time of delivery.</li>
            </ul>
        </div>
    )
}

export default Shipping
