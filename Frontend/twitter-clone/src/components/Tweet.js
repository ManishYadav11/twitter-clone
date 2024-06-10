import React from 'react';
import Avatar from 'react-avatar';
import { AiFillPicture } from "react-icons/ai";

function Tweet() {
  return (
    <div className='w-full mx-auto'>

      {/* First horizontal section */}
      <div>
        <div className='flex items-center justify-between border-b border-gray-200'>
          <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
            <h1 className='font-semibold text-blue-400 text-lg'>For You</h1>
          </div>
          <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
            <h1 className='font-semibold text-blue-400 text-lg'>Following</h1>
          </div>
        </div>

        {/* Second horizontal section */}
        <div className='mt-4'>
          <div className='flex items-center p-4'>
            <Avatar
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              size="45"
              round={true}
            />
            <input
              className='ml-2 p-2 border border-gray-300 rounded w-full'
              type="text"
              placeholder="What's happening?"
              aria-label="Tweet input"
            />
          </div>

          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <div className='text-xl cursor-pointer'>
              <AiFillPicture />
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 px-4 py-1 text-lg text-white rounded-full'>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
