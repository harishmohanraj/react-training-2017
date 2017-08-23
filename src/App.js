import React, { Component } from 'react';
import Header from './components/Header/Header';
import TableGenerator from './components/TableGenerator/TableGenerator.jsx';
import logo from './logo.svg';
import appData from './app-data/appData.json';
import './App.css';

class App extends Component {
  render() {
    const navItems = appData.navItems;
    return (
      <div className="App">
        <Header
          headerLogo = {logo}
          text="App-logo"
          navItems = {navItems}
          />
        <TableGenerator />
      </div>
    );
  }
}

export default App;
