import React from 'react';
import logo from '../../../public/logo.png';

import '../../App.css';

const FirstFooter = () => (
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
)

export default FirstFooter