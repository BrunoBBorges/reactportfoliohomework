import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserTourter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <switch>
          <Route path="/" exact />
        </switch>
      </Router>
    </div>
  );
}

export default App;
