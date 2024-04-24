'use client'
import React from 'react'

function ReadOrWriteMessage({action , text , setText , posting , submitHandler , userInfo}) {

return (
    <div className='fixed flex justify-center items-center h-[100vh] w-[100vw] bg-opacity-50 bg-gray-500'>
        {
            action === 'read' && 
            <div>
                <div>
                    <p>{userInfo?.name}</p>
                    <p>{userInfo?.email}</p>
                </div>
                <p>{text}</p>
                <div>
                    <button className='btn-gradient-2 px-3 py-1 rounded-md'>Reply</button>
                </div>
            </div>
        }
    </div>
)
}

export default ReadOrWriteMessage
