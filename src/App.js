import React from 'react';
import Home from './pages/Home/Home';
import Kmain from './pages/Buildings/Kashyap/Kmain';
import KS102 from './pages/Buildings/Kashyap/staffroom/ks102';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/KS/Floor-2' element={<Kmain />} />
        <Route path='/KS/staffroom/ks102' element={<KS102 />} />
      </Routes>
    </div>
  );
}

export default App;
