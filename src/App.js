import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuToolbar from './components/MenuToolbar';
import Footer from './components/Footer';
import Home from './views/Home';

function App() {
  return (
    <div>
      <MenuToolbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
