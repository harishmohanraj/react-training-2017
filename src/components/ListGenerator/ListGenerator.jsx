import React from 'react';
import PropTypes from 'prop-types';

const ListGenerator = ({item, selectedItem, clickHandler}) => {
  return (
    <li
        className = {item === selectedItem ? 'item selected': 'item'}
        onClick={clickHandler.bind(null, item)}
        >
          {item}
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