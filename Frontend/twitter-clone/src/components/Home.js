import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'



function Home() {
 

  
  return (
    <div className='flex justify-between m-4 p-2 w-[80%] mx-auto'>
      <LeftSidebar/>
      {/* <Feed/> */}
      <Outlet/>
      <RightSidebar/>
    </div>
  )
}
export default Home
