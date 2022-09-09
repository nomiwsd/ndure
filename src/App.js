import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Menpage from './Components/Menpage';
import Womenpage from './Components/Womenpage';
import Kidspage from './Components/Kidspage';
import Createaccountmen from './Components/Createaccountmen';
import Createaccountwomen from './Components/Createaccountwomen';
import Createaccountkids from './Components/Createaccountkids';
import Menshoes from './Components/Menshoespage/Menshoes';
import Shoeinfo from './Components/Shoesinfo/Shoeinfo';
import Aboutndure from './Components/Whatisndure/Aboutndure';
import Career from './Components/Careers/Career';
import Order from './Components/Orderstatus/Order';
import Shipping from './Components/Shipping/Shipping';
import Exchange from './Components/Exchange/Exchange';
import Faqs from './Components/Faqs/Faqs';
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';
import MenApparel from './Components/MenApparelpage/MenApparel';
import MenAccessories from './Components/MenAccessories/MenAccessories';
import Womenshoespage from './Components/WomenShoesPage/Womenshoespage';
import Womenapparelpage from './Components/WomenApparelPage/Womenapparelpage';
import Womenaccessoriespage from './Components/WomenAccessoriespage/Womenaccessoriespage';
import Boysshoespage from './Components/BoysShoesPage/Boysshoespage';
import Girlsshoespage from './Components/GirlsShoesPage/Girlsshoespage';
import Kidsaccessoriespage from './Components/KidsAccessories/Kidsaccessoriespage';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
        
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Homepage" element={<Homepage/>}/>
        <Route exact path="/Createaccountmen" element={<Createaccountmen/>}/>
        <Route exact path="/Createaccountwomen" element={<Createaccountwomen/>}/>
        <Route exact path="/Createaccountkids" element={<Createaccountkids/>}/>
        <Route exact path="/Menpage" element={<Menpage/>}/>
        <Route exact path="/Womenpage" element={<Womenpage/>}/>
        <Route exact path="/Kidspage" element={<Kidspage/>}/>
        <Route exact path="/Menshoes" element={<Menshoes/>}/>
        <Route exact path="/MenApparel" element={<MenApparel/>}/>
        <Route exact path="/MenAccessories" element={<MenAccessories/>}/>
        <Route exact path="/Womenshoespage" element={<Womenshoespage/>}/>
        <Route exact path="/Womenapparelpage" element={<Womenapparelpage/>}/>
        <Route exact path="/Womenaccessoriespage" element={<Womenaccessoriespage/>}/>
        <Route exact path="/Boysshoespage" element={<Boysshoespage/>}/>
        <Route exact path="/Girlsshoespage" element={<Girlsshoespage/>}/>
        <Route exact path="/Kidsaccessoriespage" element={<Kidsaccessoriespage/>}/>
        <Route exact path="/Shoeinfo" element={<Shoeinfo/>}/>
        <Route exact path="/Aboutndure" element={<Aboutndure/>}/>
        <Route exact path="/Career" element={<Career/>}/>
        <Route exact path="/Order" element={<Order/>}/>
         <Route exact path="/Shipping" element={<Shipping/>}/>
        <Route exact path="/Exchange" element={<Exchange/>}/>
         <Route exact path="/Faqs" element={<Faqs/>}/>
        <Route exact path="/Privacy" element={<Privacy/>}/>
        <Route exact path="/Terms" element={<Terms/>}/> 
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
