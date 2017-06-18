import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';

import section1a from '../../../public/section-2-image01.png';
import section1b from '../../../public/section-2-image02.png';
import section1c from '../../../public/section-2-image03.png';


const SecondContent = () => (
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
)

export default SecondContent