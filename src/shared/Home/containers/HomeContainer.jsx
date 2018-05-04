import React, { Component } from 'react';
import { Header } from '../../common/components/Header.jsx';
import { Content } from '../components/Content.jsx';

class HomeContainer extends Component {
  render() {
    return (
        <div>
            <Header />
            <Content/>
        </div>
    );
  }
}

export default HomeContainer;