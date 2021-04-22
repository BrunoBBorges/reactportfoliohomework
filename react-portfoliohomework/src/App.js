
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



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
