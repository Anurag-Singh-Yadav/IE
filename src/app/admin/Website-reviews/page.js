'use client'
import React,{useEffect, useState} from 'react'
import { fetchReviews } from '../../fetchDetails/fetchReviews'
import withAuth from '../WithAuth';
function Page() {
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchReviews(false);
            setReviews(data);
        };
        fetchData();
    }, []);
    
  return (
    <div>
      
      
    </div>
  )
}

export default withAuth(Page);
