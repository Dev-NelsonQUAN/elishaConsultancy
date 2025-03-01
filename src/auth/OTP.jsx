import React from 'react'
import forgotImg from "../assets/ESCVectorForgetTwo.png"
import authLogo from "../assets/authLogo.png"

const OTP = () => {
    return (
        <div className='flex h-[100vh] w-[100vw]'>
            <div className='w-[100%] 
            bg-[#351FA9] flex place-items-center 
            justify-center 
            max-[769px]:hidden
            '>
                <img
                    src={forgotImg} alt="Sign Up Vector" />
            </div>
            <div className='w-[100%] bg-white p-[0px] '>
                <div className='p-10'>
                    <img
                        className='w-[300px]'
                        src={authLogo} alt="Elisha Consultancy Logo" />

                    <form className='px-[30px] mt-25'>
                        <p className='mb-10 font-medium text-[20px]'> An OTP has been sent to your email</p>

                        <input
                            className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                            type="text" placeholder='Enter OTP' />


                        <div className='flex mt-15 gap-5'>
                            <input className='border-1 border-gray-700 rounded-[5px] size-13 px-4 outline-none
                            ' type="text" placeholder='6' />
                            <input className='border-1 border-gray-700 rounded-[5px] size-13 p-4 outline-none' type="text" placeholder='3' />
                            <input className='border-1 border-gray-700 rounded-[5px] size-13 p-4 outline-none' type="text" placeholder='9' />
                            <input className='border-1 border-gray-700 rounded-[5px] size-13 p-4 outline-none' type="text" placeholder='7' />
                        </div>

                        <button className='bg-[#351FA9] 
                                text-white rounded-[5px] cursor-pointer w-full mt-20 p-3.5 text-[18px] font-bold
                                '> Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OTP