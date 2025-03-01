import React from 'react'
import forgotImg from "../assets/ESCVectorForgetOne.png"
import authLogo from "../assets/authLogo.png"

const ForgotPassword = () => {
    return (
        <div className='flex h-[100vh]'>
            <div className='w-[100%] 
    bg-[#351FA9] flex place-items-center 
    justify-center 
    max-[769px]:hidden
    '>
                <img
                    src={forgotImg} alt="Sign Up Vector" />
            </div>
            <div className='w-[100%] bg-white p-[95px]'>
                <div>
                    <img
                        className='w-[300px]'
                        src={authLogo} alt="Elisha Consultancy Logo" />

                    <form className='p-[30px] mt-25'>
                        <div className=''>
                            {/* <p className='text-[18px] font-medium mb-2'>Full Name</p> */}
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="text" placeholder='Enter Email / Phone Number' />
                        </div>

                        <button className='bg-[#351FA9] 
                        text-white rounded-[5px] cursor-pointer w-full mt-20 p-3.5 text-[18px] font-bold
                        '> Continue </button>
                        {/* <p className='flex justify-self-center mt-5 font-medium text-[18px]'>Already have an account? <span className='text-orange-700 ml-2 cursor-pointer hover:underline'>Login</span></p> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword