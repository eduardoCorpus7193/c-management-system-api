import React from 'react';

import '../styles/header.css';
import '../styles/home.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppHome from '../components/Home.jsx';
import AppFooter from '../components/Footer.jsx';

function Home() {
  return (
      <>
        <AppHeader />
        <AppHome /> 
        <AppFooter />
      </>
  );
}

export default Home;