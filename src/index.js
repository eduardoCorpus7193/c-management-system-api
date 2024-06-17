import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AppLogin from '../src/utils/Login.js';
import AppHome from '../src/utils/Home.js';
import AppProfile from '../src/utils/Profile.js';
import AppSports from '../src/utils/Sports.js';
import AppNotifications from '../src/utils/Notifications.js';
import AppPassword from '../src/utils/Password.js';
import AppPrivacy from '../src/utils/Privacy.js';
import AppHelp from '../src/utils/Help.js';
import AppComments from '../src/utils/Comments.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AppHome />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/profile" element={<AppProfile />} />
        <Route path="/sports" element={<AppSports />} />
        <Route path="/notifications" element={<AppNotifications />} />
        <Route path="/password" element={<AppPassword />} />
        <Route path="/privacy" element={<AppPrivacy />} />
        <Route path="/help" element={<AppHelp />} />
        <Route path="/comments" element={<AppComments />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();