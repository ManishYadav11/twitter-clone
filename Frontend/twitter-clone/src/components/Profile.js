import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux'
import useGetProfile from '../hooks/useGetProfile'
function Profile() {
  const {user , profile ,otherUser} = useSelector(store=>store.user) ;
  useGetProfile(user?._id);
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Back button */}
      <div className="flex items-center mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          <IoArrowBackSharp className="text-lg mr-2 cursor-pointer" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Manish Yadav</h1>
          <p className="text-sm text-gray-500">@manishyadav</p>
        </div>
      </div>
      
      {/* Profile cover */}
      <img className="rounded-md w-[75%] mb-4" src='https://libg.s3.us-east-2.amazonaws.com/download/Its-Time-To-Program-Something.jpg' alt='profileCover' />

      {/* Avatar */}
      <div className="flex items-center mb-4">
        <Avatar
          src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          size="100"
          round={true}
          className="mr-4 border-white rounded-lg"
        />
        <div>
          <span className="text-xl font-semibold">Manish Yadav</span>
          <p>@manishyadav</p>
          <div className="flex items-center">
            <span className="mr-2">1 Following</span>
            <span>3 Followers</span>
          </div>
        </div>
      </div>
      
      {/* Profile details */}
      <div className="bg-gray-100 p-4 rounded-lg w-full max-w-lg">
        <div className='text-lg font-semibold mb-4 flex justify-between items-center'>
          <h2>About</h2>
          <button className='border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
            Edit Profile
          </button>
        </div>
        <p className="text-gray-700 mb-4">
          Experienced Full Stack Web Developer with a passion for coding and building applications. Skilled in JavaScript, React, Node.js, and MongoDB. Excited about learning new technologies and contributing to innovative projects. 🚀
        </p>
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-4">
          Email: manishyadav@gmail.com <br />
          Phone: +1234567890
        </p>
      </div>
    </div>
  );
}

export default Profile;