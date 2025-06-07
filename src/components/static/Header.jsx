import React, { useEffect, useState } from 'react'
import elishaLogo from '../../assets/elishaConsultancy.svg'
import GlobalBtn from '../ui/GlobalBtn'

const Header = ({ bg }) => {
  const [theBg, setTheBg] = useState('transparent')
  const [theFixed, setFixed] = useState('null')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setTheBg('bg-white text-black')
        setFixed('sticky top-4 z-99999 w-70')
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <div className={`${bg} w-full flex items-center h-10 justify-between`}>
    // <div className='relative'>
      <header className={`${theBg} ${theFixed} w-full flex items-center h-10 justify-between p-8 rounded-2xl`}>
        <div className='w-[210px]'>
          <img src={elishaLogo} alt="Elisha Consultancy" />
        </div>

        <nav className='flex items-center'>
          <ul className={`flex items-center  gap-18`}>
            <li className='text-white text-[16px] font-bold cursor-pointer'
              onClick={() => scrollToSection('home')}
            >HOME</li>
            <li className='text-white text-[16px] font-bold cursor-pointer'
              onClick={() => scrollToSection('about')}
            >ABOUT</li>
            <li className='text-white text-[16px] font-bold cursor-pointer'
              onClick={() => scrollToSection('services')}
            >SERVICES</li>
            <li className='text-white text-[16px] font-bold cursor-pointer'
              onClick={() => scrollToSection('contact')}
            >CONTACT</li>
          </ul>
        </nav>

        <GlobalBtn
          textBtn='LOGIN'
          bg='bg-[#EC6401]'
          paddingX='px-4'
          borderRadius='rounded-[5px]'
          border='border-none'
          paddingY='py-2'
          color='text-white'
          fontWeight='font-medium'
          fontSize='text-[16px]'
        />
      </header>
    // </div>
  )
}

export default Header