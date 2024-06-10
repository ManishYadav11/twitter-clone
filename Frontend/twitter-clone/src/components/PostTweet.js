import React from 'react';
import Avatar from 'react-avatar';
import { AiOutlineHeart, AiOutlineComment, AiOutlineSave } from "react-icons/ai";

function PostTweet() {
  return (
    <div className='p-4 border-b border-gray-200'>
      <div className='flex'>
        <Avatar
          src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          size="45"
          round={true}
        />
        <div className='ml-4 w-full'>
          <div className='flex items-center'>
            <h1 className='font-bold'>Manish Yadav</h1>
            <p className='text-gray-500 text-sm ml-2'>manishyadav@gmail.com • 1m</p>
          </div>
          {/* Tweet content */}
          <div className='mt-2'>
            <p>Exciting Developers Update!</p>
          </div>
          {/* Icons for like, comment, save */}
          <div className='flex justify-between mt-4 text-gray-500'>
            <div className='flex items-center cursor-pointer hover:text-blue-500'>
              <AiOutlineHeart className='mr-1' />
              <span>Like</span>
              <p className='ml-1'>0</p>
            </div>
            <div className='flex items-center cursor-pointer hover:text-blue-500'>
              <AiOutlineComment className='mr-1' />
              <span>Comment</span>
              <p className='ml-1'>0</p>
            </div>
            <div className='flex items-center cursor-pointer hover:text-blue-500'>
              <AiOutlineSave className='mr-1' />
              <span>Save</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostTweet;
