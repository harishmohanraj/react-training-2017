import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

// ListGenerator Component
class ListGenerator extends Component {
  render() {
    return(
      <li
        className = {this.props.item === this.props.selectedItem ? 'item selected': 'item'}
        onClick={this.props.clickHandler.bind(null, this.props.item)}
        >
          {this.props.item}
      </li>
    )
  }
}

ListGenerator.PropTypes = {
  item: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

ListGenerator.defaultProps = {
  item: 'Home',
  selectedItem: 'Home',
  clickHandler: () => {}
}

// NavItemsGenerator Component
class NavItemsGenerator extends Component {
  render() {
    return (
      <ul className='nav-list'>
        {this.props.navItems.map(item => {
          return (
            <ListGenerator
              item={item}
              selectedItem={this.props.selectedItem}
              clickHandler = {this.props.clickHandler}
              key = {item}
            />
          )
        })}
      </ul>
    )
  }
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

// Navigation Component
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: null
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(selectedItem) {
    this.setState({
      selectedItem: selectedItem
    })
  }

  render() {
    return (
      <NavItemsGenerator
        navItems = {this.props.navItems}
        selectedItem = {this.state.selectedItem}
        clickHandler = {this.clickHandler}
      />
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