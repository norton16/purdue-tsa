import './App.css';
import { Contact, Home, Navbar, Events } from './Components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>    
          <Route exact path="contact">
            <Contact />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
