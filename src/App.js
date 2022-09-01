import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';

/* 
user: user id, email/username, password

x: user id, budget, dates (time frame for move, pickup, dropoff), current location, 
destination, volume of stuff

*/ 

function App() {

  return (
  <div>
      <Header/>
    <div className="main-container">
      <NavBar/>
    </div>
  </div>

);
}

export default App;
