import React from 'react';

import AppHeader from '../components/Header.jsx';
import AppProfile from '../components/Profile.jsx';
import AppFooter from '../components/Footer.jsx';

import '../styles/header.css';
import '../styles/profile.css';
import '../styles/footer.css';

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

