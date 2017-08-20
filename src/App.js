import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx'
import fetchData from './utils/service';
import appData from './app-data/appData.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: null
    }
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users'
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
    const navItems = appData.navItems;
    return (
      <div className="App">
        <Header headerLogo={logo} navItems={navItems}/>
        {this.state.loading ? <p>Loading...</p> : <UserDetails userData={this.state.userData}/>}
      </div>
    );
  }
}

export default App;
