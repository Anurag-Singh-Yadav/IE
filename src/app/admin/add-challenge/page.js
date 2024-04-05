'use client'
import React from 'react'
import AddChallenge from '../AddChallenge'
import withAuth from '../WithAuth'

function Page() {
  return (
    <div>
        <AddChallenge />
    </div>
  )
}

export default withAuth(Page);
