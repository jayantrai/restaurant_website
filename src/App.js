import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar.js'
import MenuList from './Components/MenuList.js'
import AboutUs from './Components/AboutUs.js'
import Cart from './Components/Cart/Cart'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


class App extends React.Component {


  render() {
  return (
    <div>
     
            <Router>
            <NavBar />
              <Switch>
                  
                    <Route path="/menu" component={MenuList} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/cart" component={Cart} />
              </Switch>
            
            </Router> 
           
      </div>

          

  );
}}

export default App;
