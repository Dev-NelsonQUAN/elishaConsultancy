import CompLayout from '../../layout/CompLayout'
import GlobalBtn from '../ui/GlobalBtn'
import { IoCall, IoMail } from 'react-icons/io5'
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6'

const Consultancy = () => {
  return (
    <section className='bg-white py-16 sm:py-24' id='contact'>
      <CompLayout>
        <div className='max-w-[1200px] mx-auto px-4 flex flex-col gap-12'>
          
          {/* Section Header */}
          <div className='text-center'>
            <h2 className='text-black text-[32px] sm:text-[40px] font-serif font-bold relative inline-block after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-12 after:h-[3px] after:bg-[#FFAE42]'>
              Contact Us
            </h2>
          </div>

          {/* Main Layout Row */}
          <div className='flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-16 mt-6'>
            
            {/* Left Content Side: Information Details */}
            <div className='w-full lg:w-1/2 flex flex-col text-left'>
              <h3 className='text-black text-[28px] sm:text-[34px] font-bold tracking-tight mb-4'>
                Get In Touch With Us
              </h3>
              <p className='text-gray-600 text-[16px] mb-10 max-w-[460px] leading-relaxed'>
                Reach out today and let us make your travel dreams a reality. We&apos;d love to hear from you.
              </p>

              {/* Info Rows */}
              <div className='flex flex-col gap-8'>
                
                {/* WhatsApp Line */}
                <div className='flex items-center gap-4 text-gray-700'>
                  <FaWhatsapp className='text-[#2B8CC4] shrink-0' />
                  <a href="https://wa.me/2349064056140" target="_blank" rel="noreferrer" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
                    +234 9064 056 140
                  </a>
                </div>

                {/* Call Line */}
                <div className='flex items-center gap-4 text-gray-700'>
                  <IoCall size={24} className='text-[#2B8CC4] shrink-0' />
                  <a href="tel:+2349071372366" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
                    +234 9071 372 366
                  </a>
                </div>

                {/* Mail Line */}
                <div className='flex items-center gap-4 text-gray-700'>
                  <IoMail size={24} className='text-[#2B8CC4] shrink-0' />
                  <a href="mailto:info.empcs@gmail.com" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
                    info.empcs@gmail.com
                  </a>
                </div>

                {/* Address Line */}
                <div className='flex items-start gap-4 text-gray-700'>
                  <FaLocationDot size={24} className='text-[#2B8CC4] mt-1 shrink-0' />
                  <p className='text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[400px]'>
                    2 Market Street, Tolu Road, down floor, shop 5, Olodi-Apapa Lagos, Nigeria
                  </p>
                </div>

              </div>
            </div>

            {/* Right Content Side: Blue Contact Card Box */}
            <form className='w-full lg:w-[540px] bg-[#2B8CC4] p-8 sm:p-10 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[24px] rounded-br-[24px] shadow-xl flex flex-col gap-6 text-left'>
              
              <h4 className='text-white text-[22px] sm:text-[26px] font-semibold tracking-tight'>
                Have a Questions?
              </h4>

              {/* Grid Inputs */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input 
                  type="text" 
                  placeholder='First Name'
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
                <input 
                  type="text" 
                  placeholder='Last Name'
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
                <input 
                  type="email" 
                  placeholder='Email'
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
                <input 
                  type="tel" 
                  placeholder='Phone Number'
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
              </div>

              {/* Message Block */}
              <div className='w-full'>
                <textarea 
                  placeholder='Message'
                  className='w-full h-36 rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none resize-none font-medium text-[15px]'
                />
              </div>

              {/* Action Submit */}
              <div className='mt-2 w-fit'>
                <GlobalBtn 
                  textBtn='Submit' 
                  bg='bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors shadow-md' 
                  paddingX='px-10' 
                  paddingY='py-3' 
                  borderRadius='rounded-[14px]' 
                  color='text-white'
                  fontWeight='font-bold'
                  fontSize='text-[16px]'
                />
              </div>
            </form>

          </div>
        </div>
      </CompLayout>
    </section>
  )
}

export default Consultancy

// import React from 'react'
// import CompLayout from '../../layout/CompLayout'
// import background from '../../assets/elishaHeroPageOne.svg'
// import GlobalBtn from '../ui/GlobalBtn'
// import { IoCall } from 'react-icons/io5'
// import { IoMail } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";

// const Consultancy = () => {
//     return (
//         <div className='bg-white py-40' id='contact'>
//             <CompLayout>
//                 <div className='w-full h-140 
//                 rounded-r-1xl rounded-tr-4xl rounded-bl-[40px]
//                 bg-[url(./assets/servicesCurvedImg.svg)] relative
//                     bg-no-repeat bg-cover
//                 ' >
//                     <div className='bg-[#ec6301b2] absolute
//                     left-0 top-0 pl-12 pt-10 rounded-bl-[40px] rounded-r-1xl rounded-tr-4xl pb-30 pr-60
//                     '>
//                         <p className='text-white text-[30px] font-bold
                        
//                         '>Why Get Our Services </p>

//                         <div className='mt-6'>
//                             <h1 className='
//                             text-[40px] w-100 font-bold text-white
//                             leading-[60px]'> We Are Expert With What We Do </h1>
//                             <p className='text-white w-150 mt-3
//                             font-medium text-[19px]
//                             '> Our consultancy has a team of committed specialists  that are committed to attending to your needs </p>
//                         </div>

//                         <div className='mt-18'>
//                             <GlobalBtn
//                                 bg='bg-[#0D0DD2]'
//                                 color='text-white'
//                                 textBtn='Free Consulting'
//                                 paddingX='px-10'
//                                 paddingY='py-5'
//                                 roundedBl='rounded-bl-[40px]'
//                                 roundedR='rounded-r-1xl'
//                                 roundedTr='rounded-tr-4xl'
//                                 fontWeight='font-bold'
//                                 fontSize='text-[20px]'
//                             />
//                         </div>

//                     </div>
//                 </div>

//                 <div className='flex lg:justify-between mt-24 
//                 max-[769px]:flex-col
//                 max-[769px]:items-center
                
//                 '>
//                     <div className='
//                     max-[769px]:text-center
//                     '>
//                         <p className='text-3xl font-bold'  >Get In Touch With Us</p>

//                         <div className='flex flex-col gap-12 mt-6
//                         '>
//                             <div className='flex items-center gap-5
//                             max-[769px]:justify-center'>
//                                 <div>
//                                     <IoCall size={30} />

//                                 </div>

//                                 <div>
//                                     <p className='font-medium text-[24px]'> +234 9071 372 366</p>
//                                     <p className='font-medium text-[24px]'>+234 9064 056 140</p>
//                                 </div>
//                             </div>

//                             <div className='flex items-center gap-5 
//                             max-[769px]:justify-center'>
//                                 <IoMail size={34} />

//                                 <p className='text-[24px] font-medium'>info.empcs@gmail.com</p>
//                             </div>

//                             <div className='flex items-center gap-5
//                             max-[769px]:justify-center
//                             '>
//                                 <FaLocationDot size={30} 
//                                 />

//                                 <p className='text-[24px] font-medium w-120'>2 Market Street, Tolu Road, down floor, shop 5, Olodi-Apapa Lagos, Nigeria</p>
//                             </div>

//                         </div>
//                     </div>


//                     <form className='px-8 py-6 bg-[#351FA9] rounded-tl-2xl
//                     rounded-br-[40px] rounded-l-1xl
//                     ' >
//                         <label className='text-white'>
//                             Got Questions?
//                         </label>

//                         <div className='grid grid-cols-2 gap-4 mt-4'>
//                             <input type="text" placeholder='First name'
//                                 className='rounded-[5px] bg-white 
//                                 w-60
//                                 pl-[5px] py-3 outline-none
//                                 '
//                             />
//                             <input type="text" placeholder='Last name'
//                                 className='rounded-[5px] bg-white
//                                 w-60
//                                 pl-[5px] py-3 outline-none
//                                 '
//                                 />
//                             <input type="email" placeholder='Email'
//                                 className='rounded-[5px] bg-white
//                                 w-60
//                                 pl-[5px] py-3 outline-none
//                                 '
                                
//                                 />
//                             <input type="number" placeholder='Phone number'
//                                 className='rounded-[5px] bg-white
//                                 w-60
//                                 pl-[5px] py-3 outline-none
//                                 '
//                             />
//                         </div>
//                         <div className='mt-4 '>
//                             <textarea name="place"
//                                 placeholder='Message'
//                                 className='w-full outline-none h-45 rounded-[5px]
//                             bg-white pl-[5px]
//                             '
//                             ></textarea>
//                         </div>

//                         <div className='mt-6'>
//                             <GlobalBtn textBtn='Submit' bg='bg-[#EC6401]' paddingX='px-8' paddingY='py-2' borderRadius='rounded-[10px]' color='text-white' />
//                         </div>
//                     </form>
//                 </div>
//             </CompLayout>
//         </div>
//     )
// }

// export default Consultancy