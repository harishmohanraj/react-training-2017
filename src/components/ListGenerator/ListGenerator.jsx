import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

const ListGenerator = ({item, selectedItem, clickHandler}) => {
  return (
    <li
        className = {item === selectedItem ? 'item selected': 'item'}
        onClick={clickHandler.bind(null, item)}
        >
          <Link to={`/${item}`}>{item}</Link>
      </li>
  )
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

export default ListGenerator;