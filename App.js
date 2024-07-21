import React from 'react';
import './App.css';
import Home from './components/Navbar';
import { Button,Modal } from '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Navbar from './components/Navbar';

import Signup from './components/Signup';
// import Modal from './components/Modal';
import About from './components/About';
import Waffle from './components/Waffle';
import Footer from './components/Footer';
import Giftcards from './components/Giftcards';
import Contact from './components/Contact';
import Carrer from './components/Carrer';
import Visitus from './components/Visitus';

import Cake from './components/Cake';

   


function App() {
  return (
    <>
<Router>
<Routes>

<Route path='/' element={<Cake/>} />
  
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Modal" element={<Modal/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Waffle" element={<Waffle/>}/>
  <Route path="/Footer" element={<Footer/>}/>
  <Route path="/Giftcards" element={<Giftcards/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Carrer" element={<Carrer/>}/>
  <Route path="/Visitus" element={<Visitus/>}/>
</Routes>
</Router>
    </>
    
  )
}

export default App;
