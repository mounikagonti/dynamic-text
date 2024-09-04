import React, {ReactNode} from 'react'

interface VideoPlayerProps {
  children: ReactNode
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({children}) => {
  return (
    <div className='relative'>
      <video className='w-full h-auto' controls>
        <source src='/videos/newViewcut.mp4' type='video/mp4' />
      </video>
      {children}
    </div>
  )
}

export default VideoPlayer
