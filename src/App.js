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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Menshoes/> */}
        <Routes>
        
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Homepage" element={<Homepage/>}/>
        <Route exact path="/Createaccountmen" element={<Createaccountmen/>}/>
        <Route exact path="/Createaccountwomen" element={<Createaccountwomen/>}/>
        <Route exact path="/Createaccountkids" element={<Createaccountkids/>}/>
        <Route exact path="/Menpage" element={<Menpage/>}/>
        <Route exact path="/Womenpage" element={<Womenpage/>}/>
        <Route exact path="/Kidspage" element={<Kidspage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
