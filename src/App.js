import React from 'react';
import Home from './pages/Home/Home';
import Kmain from './pages/Buildings/Kashyap/Kmain';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/KS/Floor-2' element={<Kmain />} />
      </Routes>
    </div>
  );
}

export default App;
