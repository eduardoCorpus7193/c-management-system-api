import React from 'react';

import '../styles/header.css';
import '../styles/help.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppHelp from '../components/Help.jsx';
import AppFooter from '../components/Footer.jsx';

function Help() {
  return (
      <>
        <AppHeader />
        <AppHelp /> 
        <AppFooter />
      </>
  );
}

export default Help;