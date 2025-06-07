import React from 'react'
import loginImg from "../assets/ESCVectorLogin.png"
import authLogo from "../assets/authLogo.png"


const Login = () => {
    return (
        <div className='flex h-[100vh]'>
            <div className='w-[100%] 
            bg-[#351FA9] flex place-items-center 
            justify-center 
            max-[769px]:hidden
            '>
                <img
                    src={loginImg} alt="Login Vector" />
            </div>
            <div className='w-[100%] bg-white p-[55px]'>
                <div>
                    <img
                        className='w-[280px]'
                        src={authLogo} alt="Elisha Consultancy Logo" />

                    <form className='p-[30px] mt-8'>
                        <div>
                            <p className='text-[18px] font-medium my-2 mt-4'> Email </p>
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="email" placeholder='Enter Email' />
                        </div>

                        <div>
                            <p className='text-[18px] font-medium my-2 mt-6'> Password</p>
                            <input
                                className='w-[100%] border-1 border-gray-700 rounded-[5px] px-4 py-3 outline-none'
                                type="password" placeholder='Create Password' />
                        </div>

                        <p className='flex justify-self-end cursor-pointer hover:underline mt-6 text-[18px] font-medium'>Forgot Password? </p>

                        <button className='bg-[#351FA9] text-white rounded-[5px] cursor-pointer w-full mt-15 p-3
                        text-[20px] font-bold
                        '> Login </button>
                        <p className='flex justify-self-center mt-5 font-medium text-[18px]'>   Don't have an account? <span className='text-orange-700 ml-2 cursor-pointer hover:underline'>Sign Up</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login