import React from 'react';
import User from './components/User';
import ReadUser from './components/ReadUser';
import Update from './components/Update';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/readuser" element={<ReadUser/>} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
