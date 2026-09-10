import { useState } from 'react'
import CompLayout from '../../layout/CompLayout'
import GlobalBtn from '../ui/GlobalBtn'
import { IoCall, IoMail } from 'react-icons/io5'
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6'

const Consultancy = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Consultancy Inquiry from ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    )

    window.location.href = `mailto:info.empcs@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className='bg-white py-16 sm:py-24' id='contact'>
      <CompLayout>
        <div className='max-w-[1200px] mx-auto px-4 flex flex-col gap-12'>
          
          <div className='text-center'>
            <h2 className='text-black text-[32px] sm:text-[40px] font-serif font-bold relative inline-block after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-12 after:h-[3px] after:bg-[#FFAE42]'>
              Contact Us
            </h2>
          </div>

          <div className='flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-16 mt-6'>
            
            <div className='w-full lg:w-1/2 flex flex-col text-left'>
              <h3 className='text-black text-[28px] sm:text-[34px] font-bold tracking-tight mb-4'>
                Get In Touch With Us
              </h3>
              <p className='text-gray-600 text-[16px] mb-10 max-w-[460px] leading-relaxed'>
                Reach out today and let us make your travel dreams a reality. We&apos;d love to hear from you.
              </p>

              <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-4 text-gray-700'>
                  <FaWhatsapp className='text-[#2B8CC4] shrink-0' />
                  <a href="https://wa.me/2349064056140" target="_blank" rel="noreferrer" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
                    +234 9064 056 140
                  </a>
                </div>

                <div className='flex items-center gap-4 text-gray-700'>
                  <IoCall size={24} className='text-[#2B8CC4] shrink-0' />
                  <a href="tel:+2349071372366" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
                    +234 9071 372 366
                  </a>
                </div>

                <div className='flex items-center gap-4 text-gray-700'>
                  <IoMail size={24} className='text-[#2B8CC4] shrink-0' />
                  <a href="mailto:info.empcs@gmail.com" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
                    info.empcs@gmail.com
                  </a>
                </div>

                <div className='flex items-start gap-4 text-gray-700'>
                  <FaLocationDot size={24} className='text-[#2B8CC4] mt-1 shrink-0' />
                  <p className='text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[400px]'>
                    2 Market Street, Tolu Road, down floor, shop 5, Olodi-Apapa Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <form 
              onSubmit={handleSubmit} 
              className='w-full lg:w-[540px] bg-[#2B8CC4] p-8 sm:p-10 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[24px] rounded-br-[24px] shadow-xl flex flex-col gap-6 text-left'
            >
              <h4 className='text-white text-[22px] sm:text-[26px] font-semibold tracking-tight'>
                Have a Question?
              </h4>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='First Name'
                  required
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Last Name'
                  required
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email'
                  required
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone Number'
                  required
                  className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
                />
              </div>

              <div className='w-full'>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Message'
                  required
                  className='w-full h-36 rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none resize-none font-medium text-[15px]'
                />
              </div>

              <div className='mt-2 w-fit'>
                <button type="submit">
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
                </button>
              </div>
            </form>

          </div>
        </div>
      </CompLayout>
    </section>
  )
}

export default Consultancy

// import CompLayout from '../../layout/CompLayout'
// import GlobalBtn from '../ui/GlobalBtn'
// import { IoCall, IoMail } from 'react-icons/io5'
// import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6'

// const Consultancy = () => {
//   return (
//     <section className='bg-white py-16 sm:py-24' id='contact'>
//       <CompLayout>
//         <div className='max-w-[1200px] mx-auto px-4 flex flex-col gap-12'>
          
//           {/* Section Header */}
//           <div className='text-center'>
//             <h2 className='text-black text-[32px] sm:text-[40px] font-serif font-bold relative inline-block after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-12 after:h-[3px] after:bg-[#FFAE42]'>
//               Contact Us
//             </h2>
//           </div>

//           {/* Main Layout Row */}
//           <div className='flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-16 mt-6'>
            
//             {/* Left Content Side: Information Details */}
//             <div className='w-full lg:w-1/2 flex flex-col text-left'>
//               <h3 className='text-black text-[28px] sm:text-[34px] font-bold tracking-tight mb-4'>
//                 Get In Touch With Us
//               </h3>
//               <p className='text-gray-600 text-[16px] mb-10 max-w-[460px] leading-relaxed'>
//                 Reach out today and let us make your travel dreams a reality. We&apos;d love to hear from you.
//               </p>

//               <div className='flex flex-col gap-8'>
                
//                 {/* WhatsApp Line */}
//                 <div className='flex items-center gap-4 text-gray-700'>
//                   <FaWhatsapp className='text-[#2B8CC4] shrink-0' />
//                   <a href="https://wa.me/2349064056140" target="_blank" rel="noreferrer" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
//                     +234 9064 056 140
//                   </a>
//                 </div>

//                 {/* Call Line */}
//                 <div className='flex items-center gap-4 text-gray-700'>
//                   <IoCall size={24} className='text-[#2B8CC4] shrink-0' />
//                   <a href="tel:+2349071372366" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
//                     +234 9071 372 366
//                   </a>
//                 </div>

//                 <div className='flex items-center gap-4 text-gray-700'>
//                   <IoMail size={24} className='text-[#2B8CC4] shrink-0' />
//                   <a href="mailto:info.empcs@gmail.com" className='text-[18px] sm:text-[20px] font-medium hover:text-[#FFAE42] transition-colors'>
//                     info.empcs@gmail.com
//                   </a>
//                 </div>

//                 {/* Address Line */}
//                 <div className='flex items-start gap-4 text-gray-700'>
//                   <FaLocationDot size={24} className='text-[#2B8CC4] mt-1 shrink-0' />
//                   <p className='text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[400px]'>
//                     2 Market Street, Tolu Road, down floor, shop 5, Olodi-Apapa Lagos, Nigeria
//                   </p>
//                 </div>

//               </div>
//             </div>

//             <form className='w-full lg:w-[540px] bg-[#2B8CC4] p-8 sm:p-10 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[24px] rounded-br-[24px] shadow-xl flex flex-col gap-6 text-left'>
              
//               <h4 className='text-white text-[22px] sm:text-[26px] font-semibold tracking-tight'>
//                 Have a Questions?
//               </h4>

//               {/* Grid Inputs */}
//               <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//                 <input 
//                   type="text" 
//                   placeholder='First Name'
//                   className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
//                 />
//                 <input 
//                   type="text" 
//                   placeholder='Last Name'
//                   className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
//                 />
//                 <input 
//                   type="email" 
//                   placeholder='Email'
//                   className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
//                 />
//                 <input 
//                   type="tel" 
//                   placeholder='Phone Number'
//                   className='w-full rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none font-medium text-[15px]'
//                 />
//               </div>

//               {/* Message Block */}
//               <div className='w-full'>
//                 <textarea 
//                   placeholder='Message'
//                   className='w-full h-36 rounded-[12px] bg-[#F7F7F9] text-black placeholder-gray-500 px-4 py-3.5 outline-none resize-none font-medium text-[15px]'
//                 />
//               </div>

//               {/* Action Submit */}
//               <div className='mt-2 w-fit'>
//                 <GlobalBtn 
//                   textBtn='Submit' 
//                   bg='bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors shadow-md' 
//                   paddingX='px-10' 
//                   paddingY='py-3' 
//                   borderRadius='rounded-[14px]' 
//                   color='text-white'
//                   fontWeight='font-bold'
//                   fontSize='text-[16px]'
//                 />
//               </div>
//             </form>

//           </div>
//         </div>
//       </CompLayout>
//     </section>
//   )
// }

// export default Consultancy
