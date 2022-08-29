import React from 'react'
import Menheader from '../Menheader/Menheader'
import Shoes1 from '../Assets/Menpage/MenShoesPage/First(1).jpg'
import Shoes2 from '../Assets/Menpage/MenShoesPage/First(2).jpg'
import { BiFilterAlt } from 'react-icons/bi'
import { Scrollbars } from 'react-custom-scrollbars';
import './Menshoes.css'
function Menshoes() {

    return (
        <div>
            <Menheader />
            <div className="container">
                <div className="row d-none d-md-none d-lg-none d-xl-flex  mt-3 mb-5">
                    <div className="col-2 d-flex">
                        <BiFilterAlt className='mt-1' />
                        <p className='refinetxt'>Refine By</p>
                    </div>
                    <div className="col-2 categorybar d-flex ">
                        <p className='col-6 m-0 mt-1 p-0'>Categories</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a  
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>
                            
         <ul className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">
         <Scrollbars  style={{ width: 200, height: 170 ,overflowX:'hidden'}}>
                                <li className="dropdown-item" href="#">
                                    Winter Collection
                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">
                                    <div class="accordion" id="ListNo1">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="Headingone">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter1" aria-expanded="true" aria-controls="chapter1">
                                                    <p className='px-3'>Men</p>
                                                </button>
                                            </h2>
                                            <div id="chapter1" class="accordion-collapse collapse p-0 m-0" aria-labelledby="Headingone" data-bs-parent="#ListNo1">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3 ' >
                                                        <li className='py-2'>Chappals</li>
                                                        <li className='py-2'>Sandals</li>
                                                        <li className='py-2'>Peshawari Chappals</li>
                                                        <li className='py-2'>Formal Shoes</li>
                                                        <li className='py-2'>Casual Shoes/Sneakers</li>
                                                        <li className='py-2'>Athleisure/Sports Shoes</li>
                                                        <li className='py-2'>Loafers /SlipOns</li>
                                                        <li className='py-2'>Boots</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">
                                    <div class="accordion" id="ListNo2">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="Headingtwo">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter2" aria-expanded="true" aria-controls="chapter2">
                                                    <p className='px-3'>Women</p>
                                                </button>
                                            </h2>
                                            <div id="chapter2" class="accordion-collapse collapse p-0 m-0" aria-labelledby="Headingtwo" data-bs-parent="#ListNo2">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3'>
                                                        <li className='py-2'>Chappal/Flats</li>
                                                        <li className='py-2'>Sandals</li>
                                                        <li className='py-2'>Casual Shoes / Sneakers</li>
                                                        <li className='py-2'>Heels</li>
                                                        <li className='py-2'>Athleisure/Sports Shoes</li>
                                                        <li className='py-2'>Pumps</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                    <div class="accordion" id="ListNo3">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="Headingthree">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter3" aria-expanded="true" aria-controls="chapter3">
                                                    <p className='px-3'>Kids</p>
                                                </button>
                                            </h2>
                                            <div id="chapter3" class="accordion-collapse collapse p-0 m-0" aria-labelledby="Headingthree" data-bs-parent="#ListNo3">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3'>
                                                        <li className='py-2'>Boys</li>
                                                        <li className='py-2'>Girls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                    <div class="accordion" id="ListNo4">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="HeadingFour">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter4" aria-expanded="true" aria-controls="chapter4">
                                                    <p className='px-3'>Apparel</p>
                                                </button>
                                            </h2>
                                            <div id="chapter4" class="accordion-collapse collapse p-0 m-0" aria-labelledby="HeadingFour" data-bs-parent="#ListNo4">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3'>
                                                        <li className='py-2'>
                                                        <div class="accordion" id="ListNo5">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="Headingfive">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter5" aria-expanded="true" aria-controls="chapter5">
                                                    <p className='px-3'>Men</p>
                                                </button>
                                            </h2>
                                            <div id="chapter5" class="accordion-collapse collapse p-0 m-0" aria-labelledby="Headingfive" data-bs-parent="#ListNo5">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3 ' >
                                                        <li className='py-2'>Jackets</li>
                                                        <li className='py-2'>Hoodies & Sweats</li>
                                                        <li className='py-2'>Tousers</li>
                                                        <li className='py-2'>Track Suits</li>
                                                        <li className='py-2'>Sports Wear</li>
                                                        <li className='py-2'>Tees</li>
                                                        <li className='py-2'>Shorts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                                        </li>

                                                        <li className='py-2'>



                                                        <div class="accordion" id="ListNo6">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="HeadingSIX">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter6" aria-expanded="true" aria-controls="chapter6">
                                                    <p className='px-3'>Women</p>
                                                </button>
                                            </h2>
                                            <div id="chapter6" class="accordion-collapse collapse p-0 m-0" aria-labelledby="HeadingSIX" data-bs-parent="#ListNo6">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3 '>
                                                        <li className='py-2'>Hoodies & Sweats</li>
                                                        <li className='py-2'>Jackets</li>
                                                        <li className='py-2'>Tousers</li>
                                                        <li className='py-2'>Track Suits</li>
                                                        <li className='py-2'>Sports Bra</li>
                                                        <li className='py-2'>Sports Wear</li>
                                                        <li className='py-2'>Tees</li>
                                                        <li className='py-2'>Yoga Pants</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                                        </li>
                                                        <li className='py-2'>

                                                        <div class="accordion" id="ListNo7">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="Heading7">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter7" aria-expanded="true" aria-controls="chapter7">
                                                    <p className='px-3'>Boys</p>
                                                </button>
                                            </h2>
                                            <div id="chapter7" class="accordion-collapse collapse p-0 m-0" aria-labelledby="Heading7" data-bs-parent="#ListNo7">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3 '>
                                                        <li className='py-2'>Junior(3-8 Years)</li>
                                                        <li className='py-2'>Senior(9-14 Years)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                                        </li>
                                                        <li className='py-2'>

                                                        <div class="accordion" id="ListNo8">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="Heading8">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter8" aria-expanded="true" aria-controls="chapter8">
                                                    <p className='px-3'>Girls</p>
                                                </button>
                                            </h2>
                                            <div id="chapter8" class="accordion-collapse collapse p-0 m-0" aria-labelledby="Heading8" data-bs-parent="#ListNo8">
                                                <div class="accordion-body text-dark">
                                                    <ul className='px-3 '>
                                                        <li className='py-2'>Junior(3-8 Years)</li>
                                                        <li className='py-2'>Senior(9-14 Years)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </div>   


                                                        </li>
                                                        <li className='py-2'>Accessories</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className="dropdown-item " href="#">
                                    Sale
                                </li>
                                </Scrollbars>
                            </ul>
                            
                        </div>
                        
                    </div>
                    
                    <div className="col-2 d-flex categorybar mx-2">
                    <p className='col-6 m-0 mt-1 p-0'>Price</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a  
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>
                            
         <ul className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">
       
                                <li className="dropdown-item" href="#">
                                    
                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">
                                   
                                </li>
                                <li className="dropdown-item p-0 m-0 " href="#">
                                  
                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                  
                                </li>
                                <li className="dropdown-item p-0 m-0" href="#">
                                    </li>
                                
                            </ul>
                            
                        </div>
                        
                    </div>
                    <div className="col-2 d-flex categorybar">
                    <p className='col-6 m-0 mt-1 p-0'>Size</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a  
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>
                            
                    <div className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">39/5</button>
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">40/6</button>
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">41/7</button>
                    <br />
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">42/8</button>
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2 py-1">43/9</button>
                    <br />
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">44/10</button>
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">45/11</button>
                    <br />
                    <button type="button" class="btn btn-light sizebtn mx-1 mb-2  py-1">46/12</button>     
                        </div>
                                        
                                    </div>
                    </div>
                    <div className="col-2 d-flex categorybar ms-2">
                    <p className='col-6 m-0 mt-1 p-0'>Featured</p>
                        <div className="col-6 mt-1 ps-0 dropdown  dropdown-toggle">
                            <a  
                                className="Maindropdown"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            </a>
                            
         <ul className="dropdown-menu" id='menudropdown' aria-labelledby="dropdownMenuButton">
        <Scrollbars  style={{ width:200, height: 170 }}>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Featured 
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                   Best Selling
                                </li>
                                <li className="dropdown-item p-0 m-0  px-3" href="#">
                                  Alphabetically,A-Z
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                Alphabetically ,Z-A
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Price ,low to high
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Price ,high to low
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Date ,old to new
                                </li>
                                <li className="dropdown-item p-0 m-0 px-3" href="#">
                                    Date ,new to old
                                </li>
                                </Scrollbars>
                            </ul>
                            
                        </div>
                    </div>
                  
                </div>
            </div>

            <h1 className='menpagehead text-start mx-5'>MEN - ALL SHOES</h1>
            <div className="row mx-3 py-3 justify-content-center align-items-center">
               <div className="col-3"> <div className="card  p-0 my-3 m-0">
                <div class="thumbnail">
                <div class="picture1">
                <img src={Shoes1} className="col-12" alt="" />
                </div>
                <div class="picture2">
                <img src={Shoes2} className="col-12" alt="" />
                </div>
                </div>    
                <div class="card-body">
                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                </div>
                </div>
                </div>
                <div className='col-3'><div className="card  p-0 my-3 m-0">
                <div class="thumbnail">
                <div class="picture1">
                <img src={Shoes1} className="col-12" alt="" />
                </div>
                <div class="picture2">
                <img src={Shoes2} className="col-12" alt="" />
                </div>
                </div>    
                <div class="card-body">
                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                </div>
                </div></div>
                <div className='col-3'> 
                <div className="card  p-0 my-3 m-0">
                <div class="thumbnail">
                <div class="picture1">
                <img src={Shoes1} className="col-12" alt="" />
                </div>
                <div class="picture2">
                <img src={Shoes2} className="col-12" alt="" />
                </div>
                </div>    
                <div class="card-body">
                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                </div>
                </div></div>
                <div className='col-3'>
                <div className="card  p-0 my-3 m-0">
                <div class="thumbnail">
                <div class="picture1">
                <img src={Shoes1} className="col-12" alt="" />
                </div>
                <div class="picture2">
                <img src={Shoes2} className="col-12" alt="" />
                </div>
                </div>    
                <div class="card-body">
                <p class="card-text shoespagetxt">Men's Trendy Peshawari Sandal <br />
                <del>RS.2,199.00</del> <span className='text-danger'>RS.1,979.00</span> </p>
                </div>
                </div>
                </div>
                
               
                
            </div>

        </div>
    )
}

export default Menshoes
