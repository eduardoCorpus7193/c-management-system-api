import React from 'react';

import '../styles/header.css';
import '../styles/profile.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppProfile from '../components/Profile.jsx';
import AppFooter from '../components/Footer.jsx';

function Profile() {
  return (
      <>
        <AppHeader />
        <AppProfile />
        <AppFooter />
      </>
  );
}

export default Profile;

