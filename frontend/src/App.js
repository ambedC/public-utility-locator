import './App.css';
import Navbar from "./components/navbar/Navbar"
import Hero from './components/hero/Hero';
import Maps from './components/maps/Maps';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Maps/>
      
    </div>
  );
}

export default App;
