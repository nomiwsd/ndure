import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Secheader from './Components/Secheader/Secheader';
import MenLanding from './Components/Menlandingpage/MenLanding';
import Mencategories from './Components/Mencategories/Mencategories';
function App() {
  return (
    <div className="App">
      <Router>
        <Secheader/>
        <MenLanding/>
        <Mencategories/>
        <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
