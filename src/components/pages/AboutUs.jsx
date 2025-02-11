import React from 'react'
import CompLayout from '../../layout/CompLayout'
import airportImg from '../../assets/airportImg.svg'
import documentHand from "../../assets/documentInHandsImg.svg"
import passportIcon from '../../assets/passportIcon.svg'
import formVisaIcon from "../../assets/formkitVisaIcon.svg"
import AboutUsCard from './AboutUsCard'

const AboutUs = () => {
    return (
        <div className='bg-white w-full' >
            <CompLayout>
                <div className='flex flex-col justify-center py-20'>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-[#c47237] text-[25px] font-bold'>ABOUT US</h2>
                        <p className='font-bold text-3xl mt-2 w-130'>We help You from start to end immigration Process</p>
                    </div>

                    <div className='flex mt-20 gap-30'>
                        <div className='flex flex-col gap-6'>
                            <div className='w-120'>
                                <img src={airportImg} alt="Airport And Plane Image" />
                            </div>

                            <div className='w-120'>
                                <img src={documentHand} alt="Airport And Plane Image" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <p className='w-160 font-medium text-[25px]
                                pb-8
                                '> Feel free to reach out to us <span className='text-[#0D0DD2]'> through the contact</span> below, and one of our representatives will get back to you as soon as possible.  </p>
                            </div>

                            <div className='flex flex-col gap-10'>
                                <AboutUsCard
                                    img={formVisaIcon}
                                    title='Visa Process Application'
                                    content='We assist in helping you process your visa application from start to end'
                                />

                                <AboutUsCard
                                    img={passportIcon}
                                    title='Passport Process Application'
                                    content='We assist in helping you process your passport  application from start to end'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </CompLayout>

        </div>
    )
}

export default AboutUs