import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Header } from './Components/Header';
import { Route, Routes } from 'react-router';
import { MainContainer } from './Components/MainContainer';
import { CreateContainer } from './Components/CreateContainer';

function App() {

   
  return (
    <div className="App">
     <Header/>

     <Routes>
       <Route path="/"  element={<MainContainer/>}/>
       <Route path="/create" element={<CreateContainer/>}/>
     </Routes>
    </div>
  );
}

export default App;
