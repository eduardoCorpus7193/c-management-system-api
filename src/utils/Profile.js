import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/header.css';
import '../styles/profile.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppProfile from '../components/Profile.jsx';
import AppFooter from '../components/Footer.jsx';

import AppHome from '../components/Home.jsx';

function Profile() {
  return (
      <>
        <AppHeader />
        <BrowserRouter>
          <Routes>

            <Route path="/" >
              
              <Route path="AppHome" element={<Home />} />

            </Route>

          </Routes>
        </BrowserRouter>
        <AppFooter />
      </>
  );
}

export default Profile;

