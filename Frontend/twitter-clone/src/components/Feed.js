import React from 'react'
import Tweet from './Tweet' ;
import PostTweet from './PostTweet';

function Feed() {
  return (
    <div className='w-[50%]  border border-grey-200'>
      <Tweet/>
      <PostTweet/>
      {/* <PostTweet/>
      <PostTweet/>
      <PostTweet/>
      <PostTweet/> */}
    </div>
  )
}

export default Feed
