import React from 'react'

function AppliedJobCardComponent( {appliedJobs} ) {
    console.log(appliedJobs);
    

  return (
    <div className='flex flex-row gap-8 w-full md:w-3/4 lg:w-1/2 bg-slate-100 rounded-lg'>
            <div className='flex flex-row p-4 gap-4 items-start'>
                <img className='w-12 h-12 bg-gray-200 rounded-full' src="" alt="logo" />
                <div className='flex flex-col items-start'>
                    <div>
                        <a href="#" className='text-lg text-blue-600 hover:underline'>Job Title</a>
                    </div>
                    <span className='text-sm text-gray-600 mt-1'>Job descriptions</span>
                    <div className='text-sm text-blue-500 hover:text-blue-700 mt-2 cursor-pointer'>more...</div>
                </div>
            </div>
            <div className='flex flex-col p-4 items-start'>
                <div>
                    <a href="#" className='text-lg text-blue-600 hover:underline'>Company name</a>
                </div>
                <span className='text-sm text-gray-600 mt-1'>Location</span>
                <div className='text-sm text-gray-500 mt-2'>date...</div>
            </div>
        </div>
  )
}

export default AppliedJobCardComponent
