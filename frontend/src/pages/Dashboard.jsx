import React from 'react'

function Dashboard() {
  return (
     <div>

    <div className='flex justify-center items-center h-[600px]'>
        <div className='bg-green-200 p-8 rounded text-green-800 font-bold'>
            <h1 className='text-2xl'>Welcome to Dashboard</h1>
            <p className='text-md'>You're successfully logged in</p>
        </div>

    </div>
    <div className='p-6'>
        <button  className='bg-red-200 text-red-500 font-semibold px-3 py-2 rounded cursor-pointer'>Logout</button>
    </div>
    </div>
  )
}

export default Dashboard