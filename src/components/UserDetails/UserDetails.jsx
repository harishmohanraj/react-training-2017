import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableGenerator from '../TableGenerator/TableGenerator';
import fetchData from '../../utils/service.js';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: null
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetchData(url)
      .then((res) => {
        const userData = res.data;
        this.setState({
          loading: false,
          userData: userData
        })
      })
      .catch(e => console.log(e))
  }
  render() {
    return(
      <div className="user-details">
        {this.state.loading ? <p>Loading...</p> : <TableGenerator userData={this.state.userData}/>}
      </div>
    )
  }

}

export default UserDetails;