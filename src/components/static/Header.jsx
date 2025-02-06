import React from 'react'
import elishaLogo from '../../assets/elishaConsultancy.svg'
import GlobalBtn from '../ui/GlobalBtn'

const Header = ({ bg }) => {
  return (
    <div className={`${bg} w-full flex items-center h-10 justify-between`}>
      <div className='w-[240px]'>
        <img src={elishaLogo} alt="Elisha Consultancy" />
      </div>

      <nav className='flex items-center'>
        <ul className='flex items-center gap-18'>
          <li className='text-white text-[16px] font-bold cursor-pointer'>HOME</li>
          <li className='text-white text-[16px] font-bold cursor-pointer'>ABOUT</li>
          <li className='text-white text-[16px] font-bold cursor-pointer'>SERVICES</li>
          <li className='text-white text-[16px] font-bold cursor-pointer'>CONTACT</li>
        </ul>
      </nav>

      <GlobalBtn
        textBtn='Login'
        bg='bg-[#EC6401]'
        paddingX='px-8'
        borderRadius='rounded-[5px]'
        border='border-none'
        paddingY='py-3'
        color='text-white'
        fontWeight='font-medium'
      />
    </div>
  )
}

export default Header