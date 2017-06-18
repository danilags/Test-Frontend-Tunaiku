import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';

import section1 from '../../../public/section-1-image01.png';

const FirstContent = () => (
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
)

export default FirstContent