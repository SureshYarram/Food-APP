import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Navbar } from './Components/Header';
import { Route, Routes } from 'react-router';

import { AllRoutes } from './AllRoutes/AllRoutes';
import { MainContainer } from './Components/MainContainer';

function App() {

   
  return (
    <div className="App">
    <Navbar/>
    <MainContainer/>
    </div>
  );
}

export default App;
