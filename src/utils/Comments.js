import React from 'react';

import '../styles/header.css';
import '../styles/comments.css';
import '../styles/footer.css';

import AppHeader from '../components/Header.jsx';
import AppComments from '../components/Comments.jsx';
import AppFooter from '../components/Footer.jsx';

function Comments() {
  return (
      <>
        <AppHeader />
        <AppComments /> 
        <AppFooter />
      </>
  );
}

export default Comments;