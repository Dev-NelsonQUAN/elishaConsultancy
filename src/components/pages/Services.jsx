import { Helmet } from 'react-helmet-async';
import CompLayout from '../../layout/CompLayout';
import ServicesCard from './ServicesCard';
import imgTwo from '../../assets/forex.svg';
import imgOne from '../../assets/hotelReservation.svg';
import imgThree from '../../assets/passportApplication.svg';
import imgFour from '../../assets/studyAbroad.svg';
import imgFive from '../../assets/estateAgent.svg';
import imgSix from '../../assets/airportPickup.svg';

const Services = () => {
  const items = [
    {
      id: 1,
      titleTxt: 'Hotel Reservations',
      pTxt: 'We seek the best conducive atmosphere for our clients.',
      img: imgOne,
    },
    {
      id: 2,
      titleTxt: 'Forex',
      pTxt: 'We deal with foreign exchange',
      img: imgTwo,
    },
    {
      id: 3,
      titleTxt: 'Passport & Visa Application',
      pTxt: 'We help in processing your passport & visa applications.',
      img: imgThree,
    },
    {
      id: 4,
      titleTxt: 'Study Abroad Assistant',
      pTxt: 'Being an international student may greatly improve your educational prospects.',
      img: imgFour,
    },
    {
      id: 5,
      titleTxt: 'Estate Agent',
      pTxt: 'We ensure proper and clean environment for you and your family.',
      img: imgFive,
    },
    {
      id: 6,
      titleTxt: 'Airport Drop and Pickup',
      pTxt: 'We help in delivery and pickup items from the airport. Also booking of flight tickets.',
      img: imgSix,
    },
  ];

  return (
    <div className="bg-[#288ACA] w-full" id="services">
      <Helmet>
        <title>Our Services | Elisha Consultancy</title>
        <meta
          name="description"
          content="Explore our range of travel services including visa applications, hotel reservations, forex, study abroad support, and flight bookings."
        />
        <meta property="og:title" content="Our Services | Elisha Consultancy" />
        <meta
          property="og:description"
          content="End-to-end travel, real estate, forex, and documentation services tailored to your needs."
        />
      </Helmet>

      <CompLayout>
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white text-[32px] sm:text-[38px] md:text-[40px] font-serif font-bold">
              Our Services
            </h2>
            <p className="text-white text-[14px] sm:text-[16px] md:text-[20px] mt-2 font-medium max-w-[700px] leading-relaxed">
              We provide end-to-end travel and documentation services tailored to your needs.
            </p>
          </div>

          {/* Grid layout: 1 col on mobile, 2 on tablet (md), 3 on desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-8 md:my-12 gap-6 sm:gap-8 lg:gap-10">
            {items.map((e) => (
              <ServicesCard
                key={e.id}
                titleTxt={e.titleTxt}
                pTxt={e.pTxt}
                img={e.img}
              />
            ))}
          </div>
        </div>
      </CompLayout>
    </div>
  );
};

export default Services;

// import CompLayout from '../../layout/CompLayout'
// import ServicesCard from './ServicesCard'
// import imgTwo from '../../assets/forex.svg'
// import imgOne from '../../assets/hotelReservation.svg'
// import imgThree from '../../assets/passportApplication.svg'
// import imgFour from '../../assets/studyAbroad.svg'
// import imgFive from '../../assets/estateAgent.svg'
// import imgSix from '../../assets/airportPickup.svg'

// const Services = () => {
//     const items = [
//         {
//             id: 1,
//             titleTxt: 'Hotel Reservations',
//             pTxt: 'We seek the best conducive atmosphere for our clients. ',
//             img: imgOne
//         },
//         {
//             id: 2,
//             titleTxt: 'Forex',
//             pTxt: 'We deal with foreign exchange',
//             img: imgTwo
//         },
//         {
//             id: 3,
//             titleTxt: 'Passport & Visa Application',
//             pTxt: 'We help in processing your passport & visa applications.',
//             img: imgThree
//         },
//         {
//             id: 4,
//             titleTxt: 'Study Abroad Assistant',
//             pTxt: 'Being an international student may greatly improved your educational prospects.',
//             img: imgFour
//         },
//         {
//             id: 5,
//             titleTxt: 'Estate Agent',
//             pTxt: 'We ensure proper and clean environment for you and your family.',
//             img: imgFive
//         },
//         {
//             id: 6,
//             titleTxt: 'Airport Drop and Pickup',
//             pTxt: 'We help in delivery and pickup items from the airport. Also booking of flight tickets.',
//             img: imgSix
//         }
//     ]

//     return (
//         <div className='bg-[#288ACA]' id='services'>
//             <CompLayout>
//                 <div className='py-20 '>
//                     <div className='flex flex-col items-center text-center'>
//                         <h2 className='text-white text-[40px] font-serif font-bold'> Our Services </h2>
//                         <p className='text-white text-[14px] md:text-[20px] mt-2
//                         font-medium
//                         '>We provide end- to- end travel and documentation services tailored to your needs.</p>
//                     </div>

//                     <div className='grid lg:grid-cols-3 justify-center my-8 gap-10'>
//                         {
//                             items.map((e) => (
//                                 <ServicesCard key={e.id} titleTxt={e.titleTxt}
//                                     pTxt={e.pTxt} img={e.img}
//                                 />
//                             ))
//                         }
//                     </div>
//                 </div>
//             </CompLayout>

//         </div>
//     )
// }

// export default Services