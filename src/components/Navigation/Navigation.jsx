import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <ul className='nav-list'>
      {this.props.navItems.map(items => {
        return <li key={items}>{items}</li>
      })}
      </ul>
    )
  }
}

export default Navigation;