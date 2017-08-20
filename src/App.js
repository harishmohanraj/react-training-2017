import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import {BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import appData from './app-data/appData.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const navItems = appData.navItems;
    return (
      <Router>
        <div className="App">
          <Header headerLogo={logo} navItems={navItems}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/results' component={UserDetails} />
            <Route render={function() {
              return <p>404 Page Not Found!</p>
            }} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
