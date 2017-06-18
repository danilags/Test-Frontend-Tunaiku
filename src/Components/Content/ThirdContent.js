import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';


const ThirdContent = () => (
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
)

export default ThirdContent