import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Navigation.PropTypes = {
  navItems: PropTypes.array.isRequired
}

Navigation.defaultProps = {
  navItems: ['Default Prop']
}

export default Navigation;