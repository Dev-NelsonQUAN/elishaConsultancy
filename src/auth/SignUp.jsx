import React from 'react'
import signUpVec from "../assets/ESCVectorSignUp.png"
import authLogo from "../assets/authLogo.png"

const SignUp = () => {
    return (
        <div className='flex h-[100vh]'>
            <div className='w-[100%] 
            bg-[#351FA9] flex place-items-center 
            justify-center 
            max-[769px]:hidden
            '>
                <img

                    src={signUpVec} alt="Sign Up Vector" />
            </div>
            <div className='w-[100%] bg-white p-[45px]'>
                <div>
                    <img
                        className='w-[280px]'
                        src={authLogo} alt="Elisha Consultancy Logo" />

                    <form className='p-[30px]'>
                        <div className=''>
                            <p className='text-[18px] font-medium mb-2'>Full Name</p>
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="text" placeholder='Enter Full Name' 
                                required/>
                        </div>

                        <div>
                            <p className='text-[18px] font-medium my-2 mt-4'> Email </p>
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="email" placeholder='Enter Email' 
                                required/>
                        </div>

                        <div>
                            <p className='text-[18px] font-medium my-2 mt-4'> Password</p>
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="password" placeholder='Create Password' 
                                required/>
                        </div>

                        <div>
                            <p className='text-[18px] font-medium my-2 mt-4'>Confirm Password</p>
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="password" placeholder='Enter Confirm Password' required/>
                        </div>

                        <button className='bg-[#351FA9] text-white rounded-[5px] cursor-pointer w-full mt-15 p-3.5
                        text-[18px] font-bold
                        '> Sign Up </button>
                        <p className='flex justify-self-center mt-5 font-medium text-[18px]'>Already have an account? <span className='text-orange-700 ml-2 cursor-pointer hover:underline'>Login</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp