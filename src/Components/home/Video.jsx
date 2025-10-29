import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://videos.pexels.com/video-files/2047965/2047965-hd_1280_720_30fps.mp4"></video>
    </div>
  )
}

export default Video