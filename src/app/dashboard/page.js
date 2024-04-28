'use client'
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/navigation' 


function page() {
  const router = useRouter();
  const {userHandle} = useSelector((state) => state.GlobalState.userDetails);

  useEffect(() => {
    if(userHandle){
    router.push(`/dashboard/${userHandle}`);
    window.location.reload();
    }
    else{
      alert('Please login first');
      router.push('/');
      window.location.reload();
    }
  } , [userHandle])

  return (
    <div>
    </div>
  )
}

export default page
