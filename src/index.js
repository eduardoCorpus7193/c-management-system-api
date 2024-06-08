import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AppLoguin from '../src/utils/Loguin.js';
import AppHome from '../src/utils/Home.js';
import AppProfile from '../src/utils/Profile.js';
import AppSports from '../src/utils/Sports.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<AppHome />} />
        <Route path="/loguin" element={<AppLoguin />} />
        <Route path="/profile" element={<AppProfile />} />
        <Route path="/sports" element={<AppSports />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();