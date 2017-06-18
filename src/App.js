import React, { Component } from 'react';
import './App.css';
import logo from '../public/logo.png';
import iconSearch from '../public/icon-search.png';
import section1 from '../public/section-1-image01.png';

import section1a from '../public/section-2-image01.png';
import section1b from '../public/section-2-image02.png';
import section1c from '../public/section-2-image03.png';

import facebook from '../public/icon-facebook.png';
import instagram from '../public/icon-instagram.png';
import twitter from '../public/icon-twitter.png';
import youtube from '../public/icon-youtube.png';

import TopNavigation from './Components/TopNavigation';
import Content from './Components/Content';
import Footer from './Components/Footer';

import { Container, Row, Col } from 'react-grid-system';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
