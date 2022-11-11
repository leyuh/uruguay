import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FastFacts from './components/Page1';
import Navidad from './components/Page2';
import Geo from './components/Page3';
import Demo from './components/Page4';


import './styles/App.css';

function App() {
  const SECTIONS = ["HOME", "FAST FACTS", "NAVIDAD", "GEOGRAPHY & ECOLOGY", "DEMOGRAPHICS & SOCIOLOGY"];

  const [currentPage, setCurrentPage] = useState(SECTIONS[0]);

  function displayCurrentPage () {
    if (currentPage == "HOME") {
      return <Home setCurrentPage={setCurrentPage}/>
    } else if (currentPage == "FAST FACTS") {
      return <FastFacts setCurrentPage={setCurrentPage}/>
    } else if (currentPage == "NAVIDAD") {
      return <Navidad setCurrentPage={setCurrentPage}/>
    } else if (currentPage == "GEOGRAPHY & ECOLOGY") {
      return <Geo setCurrentPage={setCurrentPage}/>
    } else if (currentPage == "DEMOGRAPHICS & SOCIOLOGY") {
      return <Demo setCurrentPage={setCurrentPage}/>
    }
  }

  return (
    <div className="app">
      <Header sections={SECTIONS} setCurrentPage={setCurrentPage}/>
      {displayCurrentPage()}
      <Footer/>
    </div>
  );
}

export default App;
