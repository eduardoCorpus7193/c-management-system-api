import React from 'react';

import '../styles/header.css';
import '../styles/sports.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppSports from './components/sports.jsx';
import AppFooter from '../components/Footer.jsx';

function Sports() {
  return (
      <>
        <AppHeader />
        <AppSports /> 
        <AppFooter />
      </>
  );
}

export default Sports;