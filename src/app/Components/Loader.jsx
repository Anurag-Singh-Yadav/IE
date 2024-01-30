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
    <div className='fixed screen-dark h-[100vh] w-[100vw] z-[300] overflow-hidden flex justify-center items-center'>
        
    </div>
  )
}

export default Loader
