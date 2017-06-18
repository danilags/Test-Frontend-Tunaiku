import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../../App.css';

import facebook from '../../../public/icon-facebook.png';
import instagram from '../../../public/icon-instagram.png';
import twitter from '../../../public/icon-twitter.png';
import youtube from '../../../public/icon-youtube.png';


const SecondFooter = () => (
  <div className="footer-two">
    <ul className="navigation">
      <li className="text-footer">
        <p style={{ color: '#fff', width: 300}}>laboris nisi utaliquip ex ea commodo consequat
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
)

export default SecondFooter