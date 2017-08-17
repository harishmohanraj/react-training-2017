import React from 'react';
import PropTypes from 'prop-types';
import ListGenerator from '../ListGenerator/ListGenerator';

const NavItemsGenerator = ({navItems, selectedItem, clickHandler}) => {
  return(
    <ul className='nav-list'>
        {navItems.map(item => {
          return (
            <ListGenerator
              item={item}
              selectedItem={selectedItem}
              clickHandler = {clickHandler}
              key = {item}
            />
          )
        })}
      </ul>
  )
}

NavItemsGenerator.PropTypes = {
  navItems: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

NavItemsGenerator.defaultProps = {
  navItems: ['Default Prop'],
  selectedItem: 'Home',
  clickHandler: () => {}
}

export default NavItemsGenerator;