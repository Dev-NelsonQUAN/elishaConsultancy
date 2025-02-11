import React from 'react'

const GlobalLayout = ({children}) => {
  return (
    <div className='flex justify-center items-center overflow-hidden'>
        <div className='max-w-[1600px]'>{children}</div>
    </div>
  )
}

export default GlobalLayout