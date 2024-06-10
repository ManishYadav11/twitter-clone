import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBookmarks } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function LeftSidebar() {
  return (
    <div className='w-[20%]'>
      <div>
        {/* Logo for Twitter */}
        <div>
          <img width="45px" src="https://wp.inews.co.uk/wp-content/uploads/2023/07/SEI_165641405.jpg?w=2048" alt="Logo" />
        </div>
        <div>
          <Link to="/home" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
            <FaHome size='24px' />
            <h1 className='ml-2 font-bold text-lg'>Home</h1>
          </Link>

          <Link to="/explore" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
            <CiHashtag size='24px' />
            <h1 className='ml-2 font-bold text-lg'>Explore</h1>
          </Link>

          <Link to="/notifications" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
            <IoIosNotificationsOutline size='24px' />
            <h1 className='ml-2 font-bold text-lg'>Notifications</h1>
          </Link>

          <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
            <CgProfile size='24px' />
            <h1 className='ml-2 font-bold text-lg'>Profile</h1>
          </Link>

          <Link to="/favorites" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
            <IoBookmarks size='24px' />
            <h1 className='ml-2 font-bold text-lg'>Favorites</h1>
          </Link>

          <Link to="/logout" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-full'>
            <IoIosLogOut size='24px' />
            <h1 className='ml-2 font-bold text-lg'>LogOut</h1>
          </Link>

          {/* Post button */}
          <Link to="/post" className='block px-4 py-2 w-full bg-blue-500 rounded-full text-white font-bold text-base hover:cursor-pointer'>
            Post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
