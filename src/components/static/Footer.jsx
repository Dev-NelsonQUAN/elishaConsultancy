import React from 'react'
import CompLayout from '../../layout/CompLayout'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='bg-[#351FA9] py-20'>
            <CompLayout>
                <div className='flex justify-between gap-10
                max-[769px]:flex-col
                '>
                    <div>
                        <h2 className='text-white text-4xl font-medium'>About Us </h2>

                        <div className='mt-4 flex 
                        '>
                            <hr className='bg-[#EC6401] w-20 h-[4px] border-0' />
                            <hr className='bg-white border-0 h-[4px] w-50' />
                        </div>

                        <p className='text-white w-100 mt-6
                        leading-[30px] font-medium
                        '>Our mission is to offer help in documents processing assistance and services, focusing on the needs of our clients. If you have immigration needs, we can help you prepare your forms and documents. </p>

                    </div>

                    <div>
                        <h2 className='text-white
                        text-4xl font-medium'>Services </h2>

                        <div className='mt-4 flex'>
                            <hr className='bg-[#EC6401] w-20 h-[4px] border-0' />
                            <hr className='bg-white border-0 h-[4px] w-50' />
                        </div>
                        <div className='grid grid-cols-2 text-white mt-6 gap-3
                        font-medium cursor-pointer'>
                            <p>- Flight Tickets </p>
                            <p> - Visa Applications </p>
                            <p>- Airport Drop And Pickup </p>
                            <p>- Offshore Payment Assistant</p>
                            <p>- Police Character Processing</p>
                            <p>- Hotel Reservation</p>
                            <p>- Study Abroad Assistant</p>
                            <p>- Logistics </p>
                            <p>- Vacation Packages</p>
                            <p>- Estate Agent</p>
                            <p>- Broker</p>
                            <p>- Passport Application</p>
                            <p>- Forex</p>
                            <p>- Documents Processing</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-white text-4xl'>Follow Us </h2>

                        <div className='mt-4 flex'>
                            <hr className='bg-[#EC6401] w-20 h-[4px] border-0' />
                            <hr className='bg-white border-0 h-[4px] w-50' />
                        </div>

                        <div className='mt-6 flex lg:justify-around
                        max-[769px]:gap-20'>
                            <FaFacebook color='white' size={33} 
                            cursor= 'pointer' />
                            <IoLogoWhatsapp color='white' size={33} 
                            cursor= 'pointer'/>
                            <AiFillInstagram color='white' size={33} 
                            cursor= 'pointer' />
                        </div>
                    </div>
                </div>
            </CompLayout>

        </div>
    )
}

export default Footer