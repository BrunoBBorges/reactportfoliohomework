import './App.css';
import Navbar from './Components/Navbar';
import footer from './Components/footer/footer';
import { Link, useLocation } from "react-router-dom";
import projectList from "./Components/projectList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <projectList/>
      <footer/>
    </div>
  );
}

export default App;
