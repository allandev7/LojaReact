import React from 'react';
import './App.css';
import Routes from './routes';
import Header from './core/navbar/index';
import Footer from './core/footer/index';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer/>
    </>
  );
}

export default App;
