import React, { Component } from 'react';
import './App.css';
import logo from '../public/logo.png';
import iconSearch from '../public/icon-search.png';
import section1 from '../public/section-1-image01.png';

import { Container, Row, Col } from 'react-grid-system';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrap-nav">
          <ul className="navigation">
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li className="right"><a href="#about">
              <img src={iconSearch} alt="search" />
            </a></li>
            <li className="right"><a href="#menu">Menu 4</a></li>
            <li className="right dropdown"><a href="#menu">Menu 3</a>
              <div className="dropdown-content">
                <a href="#">Sub-menu-3-number 1</a>
                <a href="#">Sub-menu-3-2</a>
              </div>
            </li>
            <li className="right"><a href="#menu">Menu 2</a></li>
            <li className="right"><a href="#menu">Menu 1</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
