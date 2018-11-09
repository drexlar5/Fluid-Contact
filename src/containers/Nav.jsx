import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';

class Nav extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar navbar-expand-lg ">
          <div className="col-md-3">
            <i className="fa fa-bars icon-bar"></i>
            <p className="brand-name">Fluid Contacts</p>   
          </div>       
          <div className="col-md-8 search-form"> 
            <i className="fa fa-search search-icon"></i>
            <input  className="form-control search " type="search" placeholder="Search" aria-label="Search"/>
          </div>
          <div className="col-md-1">
            <img className="fit " src={logo} alt=""/>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;