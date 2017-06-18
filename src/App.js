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

        <div className="wrap-kedua">
          <Container style={{ paddingLeft: 0, paddingRigth: 0 }}>
            <Row className="baris-kedua">
              <Col md={6} className="wrap-image-left">
                <h1 style={{ margin: 0, fontWeight: 100}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam maximus iaculis commodo.
                Cras pellentesque cursus ex, ac elementum purus dignissim vitae.
                </h1>
                <p style={{ padding: '10px 0px' }}>consectetur adipiscing elit.
                Nullam maximus iaculis commodo.</p>
                  <a href="#"><div className="infomation">
                    <p>For More Information</p>
                  </div></a>
              </Col>
              <Col md={6} className="wrap-image-right">
                <div className="image-right">
                  <img src={section1} alt="money" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="baris-ketiga">
          <Container>
            <Row className="center-text">
              <Col md={12}>
                <h1 style={{ margin: 0, fontWeight: 100}}>Cupidatat Non Proident Sunt</h1>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="image-icon">
                  <img src={section1a} alt="koin" />
                </div>
                <div className="description">
                  <h2>Cupidatat Non Proident Sunt</h2>
                  <p>laboris nisi utaliquip ex ea commodo consequat
                    irure dolor in reprehenderit in voluptate
                    dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="image-icon">
                  <img src={section1b} alt="koin" />
                </div>
                <div className="description">
                  <h2>Cupidatat Non Proident Sunt</h2>
                  <p>laboris nisi utaliquip ex ea commodo consequat
                    irure dolor in reprehenderit in voluptate
                    dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="image-icon">
                  <img src={section1c} alt="koin" />
                </div>
                <div className="description">
                  <h2>Cupidatat Non Proident Sunt</h2>
                  <p>laboris nisi utaliquip ex ea commodo consequat
                    irure dolor in reprehenderit in voluptate
                    dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="baris-empat">
          <Container>
            <Row className="center-text custom-text-input">
              <Col md={12}>
                <h1 style={{ margin: 0, fontWeight: 100}}>Quis nostrum exercitationum ullam corporis
                    suscipit laborisisasimu, nisi ut aliquid?
                </h1>
              </Col>
            </Row>
            <Row className="center-form">
              <Col md={2} />
              <Col md={8} className="form-custom">
                <div className="input-email">
                  <input type="text" placeholder="front-end@tunaiku.com"/>
                </div>
                <div className="submit-button">
                  <input type="submit" value="SEND" />
                </div>
              </Col>
              <Col md={2} />
            </Row>
          </Container>
        </div>

        <div className="footer-wrap">
          <div className="footer-one">
            <ul className="navigation">
              <li>
                <img src={logo} alt="logo" />
              </li>
              <li className="right"><a href="#menu">Menu 4</a></li>
              <li className="right"><a href="#menu">Menu 3</a>
              </li>
              <li className="right"><a href="#menu">Menu 2</a></li>
              <li className="right"><a href="#menu">Menu 1</a></li>
            </ul>
          </div>
          <div className="footer-two">
            <ul className="navigation">
              <li>
                <p style={{ color: '#fff', width: 300, margin: 0 }}>laboris nisi utaliquip ex ea commodo consequat
                  irure dolor in reprehenderit in voluptate
                  dolore eu fugiat nulla pariatur</p>
              </li>
              <li className="right"><a href="#menu">
                <img src={youtube} alt="logo" />
              </a></li>
              <li className="right"><a href="#menu">
                <img src={twitter} alt="logo" />
              </a></li>
              <li className="right"><a href="#menu">
                <img src={instagram} alt="logo" />
              </a></li>
              <li className="right"><a href="#menu">
                <img src={facebook} alt="logo" />
              </a></li>
            </ul>
          </div>
          <div className="footer-three">
            <ul className="navigation">
              <li className="right"><a href="#menu">
                <p>magnan aliquam quaerat voluptatem. Ut enim</p>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
