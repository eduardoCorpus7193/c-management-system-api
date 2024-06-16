import React from 'react';

import '../styles/header.css';
import '../styles/notifications.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppNotifications from '../components/Notifications.jsx';
import AppFooter from '../components/Footer.jsx';

function Notifications() {
  return (
      <>
        <AppHeader />
        <AppNotifications /> 
        <AppFooter />
      </>
  );
}

export default Notifications;