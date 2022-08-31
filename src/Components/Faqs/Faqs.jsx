import React from 'react'
import Kidsheader from '../Kidsheader/Kidsheader'

function Faqs() {
  return (
    <div>
      <Kidsheader />
      <h1 className='text-start mx-5 mb-3'>FAQS</h1>
      <p className='mx-5 text-start'><strong>How will you deliver my order?</strong></p>
      <p className='text-start mx-5 mb-5'>Your order will be delivered to you through a Registered Courier Service at the address you have mentioned as ship to address in your order. In case of cash-on delivery order, the courier will collect the money in cash from you when he delivers the order.</p>
      <div className='pbgcolor my-4 mx-4 px-4  py-5'>
        <p className='text-start'><strong>How long will my order take to arrive?</strong></p>
        <p className='text-start'>Your order will usually reach your doorstep between 5 to 7 working days from the date of order placed. However, the delivery can take up to 9 working days during holiday season or our mega sales events.</p>

      </div>
      <div className='pbgcolor my-4 mx-4 px-4  py-5'>
        <p className='text-start'><strong>How much do you charge for shipping?</strong></p>
        <ul className='text-start listship'>
          <li>Orders of value Rs. 2000 and above will the delivery free of charge.
          </li>
          <li>
            For orders below Rs.2000 we charge a fix rate of Rs. 200 per order.</li>
          <li>Our system automatically calculates the correct shipping charge when you will place your order</li>
        </ul>
      </div>

      <p className='mx-5 text-start'><strong>How do I use a Gift card or Credit voucher code that was issued to me?</strong></p>
      <p className='text-start mx-5 mb-5'>You will see a field named "Discount Code" during your checkout. Enter the code in this field and you will get the promised discount or credit..</p>

      <div className='pbgcolor my-4 mx-4 px-4  py-5'>
        <p className='text-start'><strong>Can I open Cash on Delivery Package without making the payment to the Courier first?</strong></p>
        <p className='text-start mx-5'>
          No. You can’t open the package without making the payment to the courier, however you will always have an option of exchange in case the delivered product not found up-to your expectations.
        </p>

        <p className='text-start'><strong>Payment Method</strong></p>
        <p className='text-start'><strong>1. What payment options do I have?</strong></p>
        <p className='text-start mx-5'>Cash on Delivery (available nationwide)
          <br /> <br />
          Online payment (Visa Debit/Credit, Master Debit/Credit)
        </p>
        <p className='text-start'><strong>2. Is it safe to use my credit/debit card to make payments?</strong></p>
        <p className='text-start mx-5'>All payment information on our website is processed on a fully encrypted and secure platform and kept confidential with only authorized personnel having access to your information.
        </p>
        <p className='text-start'><strong>3.How to make a payment with debit/credit card?</strong></p>
        <p className='text-start mx-5'>Make sure your card is activated for online transaction. Select pay with credit/debit card during the payment process. A new window opens, you have 10 minutes to complete the payment. Input your card details and click on Confirm payment. You will receive a confirmation SMS and email.
        </p>
        <p className='text-start'><strong> 4.What should I do if my payment fails?</strong></p>
        <p className='text-start mx-5'>
          In case of a payment failure, make sure that the payment information you have provided is accurate. If your account has been debited after a payment failure, it is normally reimbursed to your bank account within 07 business days. You can email us on help@ndure.com or give us a call on  042-35880175 with your order number for any clarification.
        </p>
        <p className='text-start'><strong> 5. Is it safe to pay with credit/debit card on NDURE?</strong></p>
        <p className='text-start mx-5'>
          Fraud detection and prevention are very important to us. We take all steps to ensure that transactions are genuine and that our customers’ details are completely secure .Online payments are monitored continuously for suspicious activity and some transactions are verified manually if we feel that it’s not authorized by the owner of the card.
        </p>
        <p className='text-start'><strong> 6.Would I be charged a fee for paying with my credit/debit card on NDURE?</strong></p>
        <p className='text-start mx-5'>No fees will be charged if you make a payment with your credit/debit card on NDURE.
        </p>
        <p className='text-start'><strong> I have bought an item on promotion or with a Discount Code. What amount will you refund me?</strong></p>
        <ul className='text-start mx-5 listship'>
          <li>Items purchased from sales and promotions are not eligible for refund/exchange.</li>
          <li>Once sale starts the final price at the sale will be the final price for exchange</li>
          <li>
            No cash refunds, only online store coupons available for out of stock items (in case of return).</li>
        </ul>
      </div>

      <div className='pbgcolor my-4 mx-4 px-4  py-5'>
        <p className='text-start'><strong>Do you offer international deliveries?</strong></p>
        <p className='text-start'>No, we do not offer international deliveries and shipments as of now</p>

      </div>
      
      <div className='my-4 mx-4 px-4  py-5'>
        <p className='text-start'><strong>What are your helpline hours?</strong></p>
        <p className='text-start'>  We are available for calls on our helpline between 9AM-5PM, Monday till Friday.</p>

      </div>
      <div className='pbgcolor my-4 mx-4 px-4  py-5'>
        <p className='text-start'><strong>What if your helplines are not working?</strong></p>
        <p className='text-start'>When all our customer service lines are busy or not working, you can email us at help@ndure.com 
        <br /> <br />
        You can contact us on Whatsapp at +92 301 1192898</p>
      </div>
    </div>

  )
}

export default Faqs
