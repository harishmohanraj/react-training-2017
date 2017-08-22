import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItemsGenerator from '../NavItemsGenerator/NavItemsGenerator';
import './Navigation.css';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
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