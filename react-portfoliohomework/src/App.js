import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/footer/footer';
import { Link, useLocation } from "react-router-dom";
import Projectlist from "./Components/projectList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Projectlist/>
      <Footer/>
    </div>
  );
}

export default App;
