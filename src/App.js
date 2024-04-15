import React from 'react';
import Home from './pages/Home/Home';
// import Kmain from './pages/Buildings/Kashyap/Kmain';
// import KS102 from './pages/Buildings/Kashyap/staffroom/ks102';
import { Routes, Route } from 'react-router-dom';
import CampusMap from './pages/CampusMap/Cmap';
import Class from './components/classroom/Kashyap/Class';
import Floor3 from './pages/Buildings/Kashyap/Floor3';
import Floor2 from './pages/Buildings/Kashyap/Floor2';
import Floor4 from './pages/Buildings/Kashyap/Floor4';
import Floor5 from './pages/Buildings/Kashyap/Floor5';
import Floor6 from './pages/Buildings/Kashyap/Floor6';
import Floor1 from './pages/Buildings/Kashyap/Floor1';
import Floor0 from './pages/Buildings/Kashyap/Floor0';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/class' element={<Class />} />
        <Route path='/ks/floor-2' element={<Floor2 />} />
        <Route path='/ks/floor-3' element={<Floor3 />} />
        <Route path='/ks/floor-4' element={<Floor4 />} />
        <Route path='/ks/floor-5' element={<Floor5 />} />
        <Route path='/ks/floor-6' element={<Floor6 />} />
        <Route path='/ks/floor-1' element={<Floor1 />} />
        <Route path='/ks/floor-0' element={<Floor0 />} />
        <Route path='/campus-map' element={<CampusMap />} />
      </Routes>
    </div>
  );
}

export default App;
