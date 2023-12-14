// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage2 from './MainPage2';
import Women from './Women';
import Men from './Men';
import Sales from './Sales';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage2 />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Sales" element={<Sales />} />
      </Routes>
    </Router>
  );
};

export default App;