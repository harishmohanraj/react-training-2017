import React from 'react';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: null
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(item) {
    this.setState({
      selectedTab: item
    });
  }

  render() {
    return(
      <ul className='nav-list'>
        {this.props.listItems.map((item) => {
          return (
            <li
              className={item === this.state.selectedTab ? "item selected" : "item"}
              key={item}
              onClick={this.clickHandler.bind(null, item)}
              >
              <a>{item}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Navigation;