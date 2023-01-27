import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Selector from './components/Selector';
import Table from './components/Table';

function App() {
  return (
    <div className='App'>
      <Header />
      <Table />
      <Selector />

      <Footer />
    </div>
  );
}

export default App;
