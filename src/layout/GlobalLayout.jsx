import React from 'react'

const GlobalLayout = ({children}) => {
  return (
    <div className='flex justify-center items-center '>
        <div className='max-w-[1600px] w-full'>{children}</div>
    </div>
  )
}

export default GlobalLayout