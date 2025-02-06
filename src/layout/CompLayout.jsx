import React from 'react'

const CompLayout = ({children}) => {
  return (
    <div className='flex items-center justify-center max-w-[1600px]'>
        <div className='w-[82%]'>{children}</div>
    </div>
  )
}

export default CompLayout