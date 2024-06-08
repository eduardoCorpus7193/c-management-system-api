import React from 'react';

import '../styles/header.css';
import '../styles/loguin.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppLogin from '../components/Loguin.jsx';
import AppFooter from '../components/Footer.jsx';

function Login() {
  return (
      <>
        <AppHeader />
        <AppLogin /> 
        <AppFooter />
      </>
  );
}

export default Login;

