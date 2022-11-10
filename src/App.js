import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(<Home/>);

  return (
    <div className="app">
      <Header/>
      {currentPage}
      <Footer/>
    </div>
  );
}

export default App;
