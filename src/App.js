import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Cart from './Components/Cart';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';
import { StateProvider } from './Components/State';
const App = () =>{

  return(
    <Router>
      <Switch>
        <div className="app">
          <StateProvider>
            <Navbar/>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/admin" exact component={Admin}/>
          </StateProvider>
        </div>
      </Switch>
    </Router>
    
  );
}

export default App;