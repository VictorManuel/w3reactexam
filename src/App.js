import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeContainer } from './shared/Home/containers/HomeContainer.jsx';

class App extends Component {
  render() {
    return (
      <HomeContainer/>
    );
  }
}

export default HomeContainer;