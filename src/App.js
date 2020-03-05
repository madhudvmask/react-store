import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'


// function App() {
//   return (
//    <React.Fragment>
//       <h3>hello from app</h3>
//    </React.Fragment>
//   );
// }



class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Switch> 
          <Route exact path="/" component={ProductList} />         
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />          
          <Route component={Default} />          
        </Switch>
        <Modal />
      </div>
      
    );
  }
}


export default App;
