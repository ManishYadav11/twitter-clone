import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

function RightSidebar() {
  return (
    <div className='w-[26%] p-3'>
      {/* Search Section */}
      <div className='flex items-center bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition duration-200'>
        <CiSearch size='24px' className='text-gray-500 mr-2' />
        <input
          type='text'
          placeholder='Search Users'
          className='bg-gray-100 outline-none flex-grow'
        />
      </div>

      {/* Who to follow Section */}
      <div className='mt-4 bg-gray-100 p-4 rounded-lg'>
        <h1 className='font-bold text-lg mb-4'>Who to follow</h1>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Avatar
                src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png"
                size="45"
                round={true}
              />
              <div className='ml-4'>
                <h2 className='font-bold'>Cristiano Ronaldo</h2>
                <p className='text-gray-500 text-sm'>@cronaldo</p>
              </div>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full'>
              Follow
            </button>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Avatar
                src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
                size="45"
                round={true}
              />
              <div className='ml-4'>
                <h2 className='font-bold'>Lionel Messi</h2>
                <p className='text-gray-500 text-sm'>@leomessi</p>
              </div>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full'>
              Follow
            </button>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Avatar
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQudfLLk1p5Z0HecLq3BENiUzI46TSBa3am0OU37r2mmppighAg"
                size="45"
                round={true}
              />
              <div className='ml-4'>
                <h2 className='font-bold'>Mark Zukerberg</h2>
                <p className='text-gray-500 text-sm'>@markzukerberg</p>
              </div>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full'>
              Follow
            </button>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjuc8QTQk0dyIsgLfKImBf6aTjdW8YrvAWg&s"
                size="45"
                round={true}
              />
              <div className='ml-4'>
                <h2 className='font-bold'>Sundar Pichai</h2>
                <p className='text-gray-500 text-sm'>@sundarpichai</p>
              </div>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full'>
              Follow
            </button>
          </div>

          {/* Add more users as needed */}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
