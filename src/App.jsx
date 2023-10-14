import React from 'react';
//react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Men from './pages/Men';
import Women from './pages/Women';
//components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Men' element = {<Men/>} />
        <Route path='/Women' element = {<Women/>} />
        <Route path = 'product/:id' element = 
        {<ProductDetails/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
