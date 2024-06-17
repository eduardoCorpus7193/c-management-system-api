import React from 'react';

import '../styles/header.css';
import '../styles/privacy.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppPrivacy from '../components/Privacy.jsx';
import AppFooter from '../components/Footer.jsx';

function Password() {
  return (
      <>
        <AppHeader />
        <AppPrivacy /> 
        <AppFooter />
      </>
  );
}

export default Password;