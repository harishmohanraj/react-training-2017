import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
  const listItems = props.navItems;
  return(
    <div className="App-header">
      <img src={props.headerLogo} className={props.text} alt="logo" />
      <h2>Welcome to React</h2>
      <Navigation listItems={listItems} />
    </div>
  )
}

export default Header;