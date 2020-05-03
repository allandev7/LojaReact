import React from 'react';
import './App.css';
import Routes from './routes';
import Header from './core/navbar'
import Footer from './core/footer'

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
