import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import './Header.css';

const Header = ({headerLogo, navItems}) => {
  return (
    <div className="App-header">
      <img src={headerLogo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <Navigation navItems={navItems}/>
    </div>
  )
}

export default Header;