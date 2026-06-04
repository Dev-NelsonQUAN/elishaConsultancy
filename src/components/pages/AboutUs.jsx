import CompLayout from '../../layout/CompLayout';
import teamImg from '../../assets/aboutUsImg.jpg';

const AboutUs = () => {

    const stats = [
    { value: '2+', label: 'Years of Excellence' },
    { value: '50K+', label: 'Happy Travelers' },
    { value: '100+', label: 'Destinations' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20" id="about">
      <CompLayout>
        <div className="flex flex-col gap-16 max-w-[1200px] mx-auto px-4">
          
          <div className="text-center">
            <h2 className="text-black text-[32px] md:text-[40px] font-serif font-bold relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-12 after:h-[3px] after:bg-[#FFAE42]">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            <div className="w-full h-[320px] sm:h-[400px] rounded-[24px] overflow-hidden shadow-lg">
              <img 
                src={teamImg} 
                alt="Elisha Consultancy Team working together" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 text-left">
              <h3 className="text-black text-[28px] sm:text-[34px] font-serif font-bold leading-tight">
                Your Trusted Travel Partner Since 2024
              </h3>
              
              <div className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed flex flex-col gap-4 font-normal">
                <p>
                  Elisha Consultancy Service Travel was founded with a simple mission: to make international travel accessible, stress-free, and affordable for every Nigerian. We&apos;ve since grown into a full-service travel and documentation agency trusted by thousands.
                </p>
                <p>
                  Our experienced team provides personalised guidance on passports, visas, study abroad programmes, and vacation planning. We pride ourselves on transparency, reliability, and a 98% client satisfaction rate.
                </p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-100 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-[#288ACA] text-[32px] sm:text-[40px] font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-gray-600 text-[14px] sm:text-[16px] font-medium whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </CompLayout>
    </section>
  );
};

export default AboutUs;


// import CompLayout from '../../layout/CompLayout'
// import airportImg from '../../assets/airportImg.svg'
// import documentHand from "../../assets/documentInHandsImg.svg"
// import passportIcon from '../../assets/passportIcon.svg'
// import formVisaIcon from "../../assets/formkitVisaIcon.svg"
// import AboutUsCard from './AboutUsCard'

// const AboutUs = () => {
//     return (
//         <div className='bg-white w-full' id='about' >
//             <CompLayout>
//                 <div className='flex flex-col justify-center py-20'>
//                     <div className='flex flex-col items-center text-center'>
//                         <h2 className='text-[#EC6401] text-[35px] font-bold'>ABOUT US</h2>
//                         <p className='font-bold text-3xl mt-2 w-130'>We help You from start to end immigration Process</p>
//                     </div>

//                     <div className='flex mt-20 gap-30'>
//                         <div className='flex flex-col gap-6'>
//                             <div className='w-120'>
//                                 <img src={airportImg} alt="Airport And Plane Image" />
//                             </div>

//                             <div className='w-120'>
//                                 <img src={documentHand} alt="Airport And Plane Image" />
//                             </div>
//                         </div>

//                         <div>
//                             <div>
//                                 <p className='w-160 font-medium text-[25px]
//                                 pb-8
//                                 '> Feel free to reach out to us <span className='text-[#0D0DD2]'> through the contact</span> below, and one of our representatives will get back to you as soon as possible.  </p>
//                             </div>

//                             <div className='flex flex-col gap-10'>
//                                 <AboutUsCard
//                                     img={formVisaIcon}
//                                     title='Visa Process Application'
//                                     content='We assist in helping you process your visa application from start to end'
//                                 />

//                                 <AboutUsCard
//                                     img={passportIcon}
//                                     title='Passport Process Application'
//                                     content='We assist in helping you process your passport  application from start to end'
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </CompLayout>

//         </div>
//     )
// }

// export default AboutUs