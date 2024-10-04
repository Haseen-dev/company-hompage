import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingImage from './components/LandingImage';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingImage/>
      <Services/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
