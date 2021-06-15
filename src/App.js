import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents'


class App extends Component {
  render (){
    return (
    <div>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href ="/">Comida App</NavbarBrand>
      </div>
    </Navbar>
    <Menu/>
    </div>
  );
  }
}

export default App;