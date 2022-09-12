import React from 'react'
import './Categories.css'
import {Link} from 'react-router-dom'

function Categories({data}) {
  return (
    <div>
         <div className="row  align-items-center  justify-content-start  Mainsect m-0 mb-5 ">
        <div className="col-lg-3 col-md-3 col-12 p-0 d-block justify-content-start mb-3">
          <h3 className='categoryhead'>{data.title}</h3>
          <Link className='categorybtn px-2 py-2' to={`${data.linkto}`}>{data.buttontext}</Link>
        </div>
        <div className="col-lg-8 col-md-9 col-12">
          <div className=" justify-content-start overfs m-0 gap-3  d-flex flex-row p-0">
            <div className="col-9 col-md-5 col-lg-4 cimg p-0">
              <div className="card p-0 rounded-0" >
                <figure class="hover-img m-0">
                  <img src={data.image1} className="col-12 p-0" alt="wait for internet" />
                </figure>
              </div>
              <p className='categoryds'>{data.desc1}</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg ">
              <div className="card p-0 rounded-0" >
                <figure class="hover-img m-0">
                  <img src={data.image2} className="col-12 p-0" alt="wait for internet" />
                </figure>
              </div>
              <p className='categoryds'>{data.desc2}</p>
            </div>
            <div className="col-9 col-md-5 col-lg-4 cimg">
              <div className="card p-0 rounded-0" >
                <figure class="hover-img m-0">
                  <img src={data.image3} className="col-12 p-0" alt="wait for internet" />
                </figure>
              </div>
              <p className='categoryds'>{data.desc3}</p>
            </div>
          </div>
        </div>
      </div>

        </div>
  )
}

export default Categories
