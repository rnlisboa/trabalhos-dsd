import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mens from './component/Mens';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Cons from './consumidorComp/Cons';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mens />} />
          <Route path='/menssagens' element={<Cons/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
