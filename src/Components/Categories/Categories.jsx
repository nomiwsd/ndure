import React from 'react'
import './Categories.css'
import Color from "color";
import Men1 from "../Assets/Men(1).jpg"
import Men2 from "../Assets/Men(2).jpg"
import Men3 from "../Assets/Men(3).png"
import Women1 from "../Assets/Women(1).jpg"
import Women2 from "../Assets/Women(2).gif"
import Women3 from "../Assets/Women(3).png"
import Kids1 from "../Assets/Kids(1).png"
import Kids2 from "../Assets/Kids(2).jpg"
import Kids3 from "../Assets/Kids(3).jpg"
import Sale1 from "../Assets/Sale(1).jpg"
import Sale2 from "../Assets/Sale(2).jpg"
import Sale3 from "../Assets/Sale(3).jpg"
function Categories() {
  return (
    <div>

      {/* Men Section */}
      <div className="row  align-items-center  justify-content-start  Mainsect m-0 mb-5 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 d-block justify-content-start mb-3">
          <h3 className='categoryhead'>SHOP MEN</h3>
          <button className='categorybtn px-2 py-2'>VIEW ALL CATEGORIES</button>
        </div>
        <div className="col-lg-8 col-md-9 col-12">
          <div className=" justify-content-start overfs m-0 gap-3  d-flex flex-row p-0">
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Men1} className="col-12  col-md-12 p-0 " alt="" />
              <div className="overlay"></div>
              <p className='categoryds'>SHOES</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg ">
              <img src={Men2} alt="" className="col-12 col-md-12 p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>APPAREL</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Men3} alt="" className="col-12 col-md-12  p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>ACCESSORIES</p>
            </div>
          </div>
        </div>
      </div>
      {/* Women Section */}
      <div className="row  align-items-center  justify-content-start  Mainsect m-0 mb-5 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 d-block justify-content-start mb-3">
          <h3 className='categoryhead'>SHOP WOMEN</h3>
          <button className='categorybtn px-2 py-2'>VIEW ALL CATEGORIES</button>
        </div>
        <div className="col-lg-8 col-md-9 col-12">
          <div className=" justify-content-start overfs m-0 gap-3  d-flex flex-row p-0">
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Women1} className="col-12  col-md-12 p-0 " alt="" />
              <div className="overlay"></div>
              <p className='categoryds'>SHOES</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg ">
              <img src={Women2} alt="" className="col-12 col-md-12 p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>APPAREL</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Women3} alt="" className="col-12 col-md-12  p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>ACCESSORIES</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kids Section */}
      <div className="row  align-items-center  justify-content-start  Mainsect m-0 mb-5 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 d-block justify-content-start mb-3">
          <h3 className='categoryhead'>SHOP KIDS</h3>
          <button className='categorybtn px-2 py-2'>VIEW ALL CATEGORIES</button>
        </div>
        <div className="col-lg-8 col-md-9 col-12">
          <div className=" justify-content-start overfs m-0 gap-3  d-flex flex-row p-0">
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Kids1} className="col-12  col-md-12 p-0 " alt="" />
              <div className="overlay"></div>
              <p className='categoryds'>SHOES</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg ">
              <img src={Kids2} alt="" className="col-12 col-md-12 p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>BOYS</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Kids3} alt="" className="col-12 col-md-12  p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>GIRLS</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sales Section */}
      <div className="row  align-items-center  justify-content-start  Mainsect m-0 mb-5 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 d-block justify-content-start mb-3">
          <h3 className='categoryhead'>SALE</h3>
          <button className='categorybtn px-2 py-2'>EXPLORE THE SALE</button>
        </div>
        <div className="col-lg-8 col-md-9 col-12">
          <div className=" justify-content-start overfs m-0 gap-3  d-flex flex-row p-0">
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Sale1} className="col-12  col-md-12 p-0 " alt="" />
              <div className="overlay"></div>
              <p className='categoryds'>MEN</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg ">
              <img src={Sale2} alt="" className="col-12 col-md-12 p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>WOMEN</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <img src={Sale3} alt="" className="col-12 col-md-12  p-0" />
              <div className="overlay"></div>
              <p className='categoryds'>KIDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
