import React from 'react'
import CompLayout from '../../layout/CompLayout'
import background from '../../assets/elishaHeroPageOne.svg'
import GlobalBtn from '../ui/GlobalBtn'
import { IoCall } from 'react-icons/io5'
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Consultancy = () => {
    return (
        <div className='bg-white py-40' id='contact'>
            <CompLayout>
                <div className='w-full h-140 
                rounded-r-1xl rounded-tr-4xl rounded-bl-[40px]
                bg-[url(./assets/servicesCurvedImg.svg)] relative
                    bg-no-repeat bg-cover
                ' >
                    <div className='bg-[#ec6301b2] absolute
                    left-0 top-0 pl-12 pt-10 rounded-bl-[40px] rounded-r-1xl rounded-tr-4xl pb-30 pr-60
                    '>
                        <p className='text-white text-[30px] font-bold
                        
                        '>Why Get Our Services </p>

                        <div className='mt-6'>
                            <h1 className='
                            text-[40px] w-100 font-bold text-white
                            leading-[60px]'> We Are Expert With What We Do </h1>
                            <p className='text-white w-150 mt-3
                            font-medium text-[19px]
                            '> Our consultancy has a team of committed specialists  that are committed to attending to your needs </p>
                        </div>

                        <div className='mt-18'>
                            <GlobalBtn
                                bg='bg-[#0D0DD2]'
                                color='text-white'
                                textBtn='Free Consulting'
                                paddingX='px-10'
                                paddingY='py-5'
                                roundedBl='rounded-bl-[40px]'
                                roundedR='rounded-r-1xl'
                                roundedTr='rounded-tr-4xl'
                                fontWeight='font-bold'
                                fontSize='text-[20px]'
                            />
                        </div>

                    </div>
                </div>

                <div className='flex lg:justify-between mt-24 
                max-[769px]:flex-col
                max-[769px]:items-center
                
                '>
                    <div className='
                    max-[769px]:text-center
                    '>
                        <p className='text-3xl font-bold'  >Get In Touch With Us</p>

                        <div className='flex flex-col gap-12 mt-6
                        '>
                            <div className='flex items-center gap-5
                            max-[769px]:justify-center'>
                                <div>
                                    <IoCall size={30} />

                                </div>

                                <div>
                                    <p className='font-medium text-[24px]'> +234 9071 372 366</p>
                                    <p className='font-medium text-[24px]'>+234 9064 056 140</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-5 
                            max-[769px]:justify-center'>
                                <IoMail size={34} />

                                <p className='text-[24px] font-medium'>info.empcs@gmail.com</p>
                            </div>

                            <div className='flex items-center gap-5
                            max-[769px]:justify-center
                            '>
                                <FaLocationDot size={30} 
                                />

                                <p className='text-[24px] font-medium w-120'>2 Market Street, Tolu Road, down floor, shop 5, Olodi-Apapa Lagos, Nigeria</p>
                            </div>

                        </div>
                    </div>


                    <form className='px-8 py-6 bg-[#351FA9] rounded-tl-2xl
                    rounded-br-[40px] rounded-l-1xl
                    ' >
                        <label className='text-white'>
                            Got Questions?
                        </label>

                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <input type="text" placeholder='First name'
                                className='rounded-[5px] bg-white 
                                w-60
                                pl-[5px] py-3 outline-none
                                '
                            />
                            <input type="text" placeholder='Last name'
                                className='rounded-[5px] bg-white
                                w-60
                                pl-[5px] py-3 outline-none
                                '
                                />
                            <input type="email" placeholder='Email'
                                className='rounded-[5px] bg-white
                                w-60
                                pl-[5px] py-3 outline-none
                                '
                                
                                />
                            <input type="number" placeholder='Phone number'
                                className='rounded-[5px] bg-white
                                w-60
                                pl-[5px] py-3 outline-none
                                '
                            />
                        </div>
                        <div className='mt-4 '>
                            <textarea name="place"
                                placeholder='Message'
                                className='w-full outline-none h-45 rounded-[5px]
                            bg-white pl-[5px]
                            '
                            ></textarea>
                        </div>

                        <div className='mt-6'>
                            <GlobalBtn textBtn='Submit' bg='bg-[#EC6401]' paddingX='px-8' paddingY='py-2' borderRadius='rounded-[10px]' color='text-white' />
                        </div>
                    </form>
                </div>
            </CompLayout>
        </div>
    )
}

export default Consultancy