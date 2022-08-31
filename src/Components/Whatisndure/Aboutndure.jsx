import React from 'react'
import img1 from '../Assets/aboutpageimg1.jpg'
import img2 from '../Assets/aboutpageimg2.jpg'
import './Aboutndure.css'
import Kidsheader from '../Kidsheader/Kidsheader'
function Aboutndure() {
  return (
    <div>
      <Kidsheader/>
      <div className="container m-0 mx-4 p-0">
      <h2 className='aboutmainhead text-start'>What is Ndure?</h2>
      <p className='mt-4 text-start mb-5'>Fashion is unique to not just you but also to every front of your personality. Live it Up. Live out Loud. Live it Proud.</p>
      <div className='mx-5 px-5 d-flex justify-content-center'>
      <img src={img1} alt="wait for internet"  className=''/>
      </div>
      <p className='text-center'>The universe has been designed to constantly be on the move. Be it our planet, the people or time, nothing is meant to stop or wait for you.</p>
      </div>
      <div className='px-3 d-flex justify-content-start'>
      <img src={img2} alt="wait for internet"  className=''/>
      </div>
      <p className='text-start mx-3 mb-3'>Hustling is our generation’s buzzword and the minute you are born, you have the millennial burden to try everything.</p>
      <p className='text-center'>Amidst all this edginess and erratic lifestyle, one has to be quick, adaptable and ever evolving.
    </p>
    <p className='text-center'>This holds truest for fashion</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0rFl257FA9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p className='text-start mx-3 px-3 fs-5'>We believe in being ahead of our time – Immutable and diverse; embodied by our range of shoes that fit the multifaceted, multitasking youth of today. For each side of you, be it corporately cultured or funky fashioned, there is a shoe waiting in our stores. With us, you can change the world <span className='text-center'>at your own pace.</span></p>
    <p className='fs-5'>NDURE makes sure that you Live it up, live it out and live it proud.</p>
    

    </div>
  )
}

export default Aboutndure
