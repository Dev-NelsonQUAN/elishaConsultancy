import React from 'react'
import CompLayout from '../layout/CompLayout'
import AboutUsCard from './AboutUsCard'
import ServicesCard from './ServicesCard'
import imgOne from '../assets/hotelReservation.svg'
import imgTwo from '../assets/forex.svg'
import imgThree from '../assets/passportApplication.svg'
import imgFour from '../assets/studyAbroad.svg'
import imgFive from '../assets/estateAgent.svg'
import imgSix from '../assets/airportPickup.svg'

const Services = () => {
    const items = [
        {
            id: 1,
            titleTxt: 'Hotel Reservations',
            pTxt: 'We seek the best conducive atmosphere for our clients. ',
            img: imgOne
        },
        {
            id: 2,
            titleTxt: 'Forex',
            pTxt: 'We deal with foreign exchange',
            img: imgTwo
        },
        {
            id: 3,
            titleTxt: 'Passport & Visa Application',
            pTxt: 'We help in processing your passport & visa applications.',
            img: imgThree
        },
        {
            id: 4,
            titleTxt: 'Study Abroad Assistant',
            pTxt: 'Being an international student may greatly improved your educational prospects.',
            img: imgFour
        },
        {
            id: 5,
            titleTxt: 'Estate Agent',
            pTxt: 'We ensure proper and clean environment for you and your family.',
            img: imgFive
        },
        {
            id: 6,
            titleTxt: 'Airport Drop and Pickup',
            pTxt: 'We help in delivery and pickup items from the airport. Also booking of flight tickets.',
            img: imgSix
        }
    ]

    return (
        <div className='bg-[#0D0DD2]'>
            <CompLayout>
                <div className='py-20 '>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-[#EC6401] text-[28px] font-medium'>SERVICES</h2>
                        <p className='text-white text-[40px] mt-2
                        font-medium
                        '>What Can We Do For My Clients</p>
                    </div>

                    <div className='grid grid-cols-3 my-10 gap-10'>
                        {
                            items.map((e) => (
                                <ServicesCard key={e.id} titleTxt={e.titleTxt}
                                    pTxt={e.pTxt} img={e.img}
                                />
                            ))
                        }
                    </div>
                </div>
            </CompLayout>

        </div>
    )
}

export default Services