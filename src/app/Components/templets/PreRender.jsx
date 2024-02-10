import React from 'react';
import './PreRender.css'; // Make sure to import the CSS file

const PreRender = ({ count }) => {
    return (
        <div className='flex flex-col w-full'>
            {Array.from({ length: count }, (_, index) => (
                <div key={index} className="loading-placeholder my-3"></div>
            ))}
        </div>
    );
};

export default PreRender;
