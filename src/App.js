import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Menpage from './Components/Menpage';
import Womenpage from './Components/Womenpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Menpage" element={<Menpage/>}/>
        <Route exact path="/Womenpage" element={<Womenpage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
