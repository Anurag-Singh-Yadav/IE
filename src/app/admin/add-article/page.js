'use client'
import React from 'react';
import AddContent from '../AddContent';

function App() {
  return (
    <div> 
      <AddContent />
    </div>
  );
}

export default withAuth(App);
