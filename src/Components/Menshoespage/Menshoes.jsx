import React from 'react'
import Menheader from '../Menheader/Menheader'
import Shoes1 from '../Assets/Menpage/MenShoesPage/First(1).jpg'
import Shoes2 from '../Assets/Menpage/MenShoesPage/First(2).jpg'
import './Menshoes.css'
function Menshoes() {
    return (
        <div>
            <Menheader />
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
