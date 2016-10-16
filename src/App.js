import React, { Component } from 'react';
import logo from './logo.svg';
// import Counter from './components/Counter.js'
import './App.css';
// import FilteredList from './components/FilteredList.js';
// import Timer from './components/Timer.js';
// import Menu from './components/Menu.js';
// import ServiceChooser from './components/ServiceChooser.js';
import PictureList from './components/PictureList.js';

class App extends Component {
  render() {
    var services = [
      { name: 'Web Development', price: 300 },
      { name: 'Design', price: 400 },
      { name: 'Integration', price: 250 },
      { name: 'Training', price: 220 }
    ];
    return (
      // <Menu items={ ['Home', 'Services', 'About', 'Contact Us']}/>
      // <ServiceChooser items={ services } />
      <PictureList apiKey="56125738.7f31b3d.5edd0171412042f78cbca5c4ab5f2220" />
    )
  }
}

export default App;
