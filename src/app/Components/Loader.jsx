import React, { useEffect } from 'react'
import './Loader.css';

function Loader() {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    } , [])

  return (
    <div className='fixed screen-dark h-[100vh] w-[100vw] z-[300] left-0 right-0 top-0 flex justify-center items-center'>
        
    </div>
  )
}

export default Loader
