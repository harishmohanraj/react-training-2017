import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <ul className='nav-list'>
      {this.props.navItems.map(item => {
        return (<li
        key={item}
        className = {item === this.state.selectedItem ? 'item selected': 'item'}
        onClick={this.clickHandler.bind(null, item)}
        >
          {item}
        </li>)
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