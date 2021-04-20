import logo from './logo.svg';
import './App.css';
import { Contact, Home, Navbar, Events } from './Components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route>
            <Events />
          </Route>    
          <Route>
            <Contact />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
