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
