import './App.css';
import { useState, useEffect} from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
