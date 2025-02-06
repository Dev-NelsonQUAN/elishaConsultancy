import React from 'react'

const ServicesCard = ({img, titleTxt, pTxt }) => {
  return (
    <div className='rounded-[5px] w-92 mb-2'>
        <div className=''>
            <img 
            className='size-full object-cover'
            src={img} alt='Images' />
        </div>

        <div className='bg-white py-6 px-4 flex flex-col 
        items-center rounded-b-[5px] mb-10
        h-40
        '>
            <h1 className='font-bold text-center text-[22px]'>{titleTxt}</h1>
            <p className='font-medium text-center w-60 '> {pTxt} </p>
        </div>
    </div>
  )
}

export default ServicesCard