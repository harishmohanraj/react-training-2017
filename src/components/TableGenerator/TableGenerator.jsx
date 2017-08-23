import React from 'react';
import axios from 'axios';
import Table from '../Table/Table';

class TableGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    }
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    // Make a request for a user with a given ID
    axios.get(url)
      .then(response => {
        console.log(response)
        this.setState({
          data: response,
          isLoading: false
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="user-details">
          {this.state.isLoading ? <p>Loading!!!!!</p> : <Table userData={this.state.data}/>}
      </div>
    )
  }
}

export default TableGenerator;