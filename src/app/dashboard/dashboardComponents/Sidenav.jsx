import React from 'react'

function Sidenav({setSelectedMode}) {

  return (
    <div className='mt-4 w-[94%] md:w-[20%] mx-auto md:mx-0 flex justify-center'>

            <div className=" w-full rounded-md overflow-hidden bg-primary  flex min-h-[100vh]">
                <div className=" w-full flex flex-col">
                    <div className="">
                        <h1 className="text-2xl font-bold bg-green-bg rounded-md py-2 text-center text-white">Sidenav</h1>
                    </div>
                    <div className="flex-grow my-6">
                        <ul className="space-y-2">
                            <li className="p-4 hover:bg-gray-200" onClick={() => setSelectedMode('dashboard')}>Item 1</li>
                            <li className="p-4 hover:bg-gray-200" onClick={() => setSelectedMode('dashboard')}>Item 2</li>
                            <li className="p-4 hover:bg-gray-200" onClick={() => setSelectedMode('dashboard')}>Item 3</li>
                            <li className="p-4 hover:bg-gray-200" onClick={() => setSelectedMode('dashboard')}>Item 4</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Sidenav
