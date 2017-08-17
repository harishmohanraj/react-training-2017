import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={this.props.headerLogo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <Navigation navItems={this.props.navItems}/>
      </div>
    )
  }
}

export default Header;