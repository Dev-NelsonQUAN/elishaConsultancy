// import React from 'react'
import elishaOne from "../../assets/elishaHeroPageOne.svg"
import Header from '../static/Header'
import CompLayout from '../../layout/CompLayout'

const Heropage = () => {
  return (
    <div className='bg-[url(./assets/elishaHeroPageOne.svg)] 
    bg-repeat
    bg-cover
     w-[100vw] 
     h-[100vh]
     relative 
     '
    >
      <div className='absolute 
      inset-0
      left-0
      w-[100vw] h-[100vh]
      bg-[#0d0dd298]
      px-0
      py-8
      '>

        <CompLayout>
          <Header />

          <div className='flex flex-col justify-center items-center
          mt-40 gap-10 text-center
          '>
            <h1 className='text-white w-160 text-[50px] 
            font-bold '> Welcome To Elisha Consultancy Services </h1>
            <p className='text-white
            text-3xl w-200 text-center
            '> This platform aims in helping clients process their visa and passport application. We also help in booking flight tickets</p>
          </div>
        </CompLayout>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Heropage
