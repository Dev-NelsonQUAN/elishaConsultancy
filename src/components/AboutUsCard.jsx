import React from 'react'

const AboutUsCard = ({img, title, content}) => {
  return (
    <div className='rounded-[5px] shadow-2xl 
    gap-10
    flex py-10 px-5 bg-[#EC6401]
    pb-20
    '>
        <div className='w-15'>
            <img 
            className='size-full object-contain'
            src={img} alt="Icons" />
        </div>

        <div>
            <h2 className='text-[30px] font-bold 

            '>{title}</h2>
            <p className='text-[20px] w-120 font-medium'>{content}</p>
        </div>
    </div>
  )
}

export default AboutUsCard