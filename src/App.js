import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Categories from './Components/Categories/Categories';

function App() {
  return (
    <div className="App">
    <Header/>
     <Landing/>
     <Categories/>
     <Footer/>
    </div>
  );
}

export default App;
