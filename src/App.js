import React, { Component } from 'react';

import './App.css';
import TopNavigation from './Components/TopNavigation';
import Content from './Components/Content';
import Footer from './Components/Footer';

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
