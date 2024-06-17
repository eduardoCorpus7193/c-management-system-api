import React from 'react';

import '../styles/header.css';
import '../styles/password.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppPassword from '../components/Password.jsx';
import AppFooter from '../components/Footer.jsx';

function Password() {
  return (
      <>
        <AppHeader />
        <AppPassword /> 
        <AppFooter />
      </>
  );
}

export default Password;