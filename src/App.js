import React from 'react';
import Home from './pages/Home/Home';
import Kmain from './pages/Buildings/Kashyap/Kmain';
import { Routes, Route } from 'react-router-dom';
import CampusMap from './pages/CampusMap/Cmap';
import Class from './components/classroom/Kashyap/Class';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/class' element={<Class />} />
        <Route path='/ks/floor-2' element={<Kmain />} />
        <Route path='/campus-map' element={<CampusMap />} />
      </Routes>
    </div>
  );
}

export default App;
