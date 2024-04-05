'use client'
import React from 'react';
import AddContent from '../AddContent';
import withAuth from '../WithAuth';

function App() {
  return (
    <div> 
      <AddContent />
    </div>
  );
}

export default withAuth(App);
