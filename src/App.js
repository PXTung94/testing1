import './App.css';
import React, { useState, useEffect } from 'react';
import Hinh from './container/khunghinh';
import { gethinh } from './api/hinh';
import Route from './Route';
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Route />
      
    </BrowserRouter>
  );
}

export default App;
