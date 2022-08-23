import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Secheader from './Components/Secheader/Secheader';
function App() {
  return (
    <div className="App">
      <Router>
        <Secheader/>
        <Routes>
        {/* <Route exact path="/" element={<Homepage/>}/> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
