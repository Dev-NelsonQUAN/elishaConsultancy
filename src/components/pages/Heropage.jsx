import { Helmet } from 'react-helmet-async';
import heroImage from '../../assets/elishaConsultancyHero.jpg';
import GlobalBtn from '../ui/GlobalBtn';

const Heropage = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 sm:py-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Helmet>
        <title>Elisha Consultancy | Passport, Visa & Travel Services</title>
        <meta 
          name="description" 
          content="Your journey starts here. From passport processing and visa applications to study abroad programs and vacations, Elisha Consultancy handles every detail." 
        />
        <meta property="og:title" content="Elisha Consultancy | Your Journey Starts Here" />
        <meta 
          property="og:description" 
          content="End-to-end travel, documentation, forex, and study abroad services tailored to your needs." 
        />
      </Helmet>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center">
        
        <h1 className="text-white text-[32px] xs:text-[40px] sm:text-[52px] md:text-[64px] font-serif font-bold tracking-wide max-w-[1000px] leading-tight sm:leading-[1.15] drop-shadow-md mb-4 sm:mb-6">
          Your Journey Starts Here
        </h1>

        <p className="text-white/95 text-[15px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal max-w-[750px] mb-8 sm:mb-10 leading-relaxed drop-shadow-sm">
          From passport processing to dream vacations, we handle every detail so you can focus on the adventure
        </p>

        <GlobalBtn
          textBtn="Explore Our Services"
          bg="bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors duration-200 shadow-md"
          paddingX="px-6 sm:px-8"
          paddingY="py-3 sm:py-3.5"
          borderRadius="rounded-full"
          border="border-none"
          color="text-white"
          fontWeight="font-semibold"
          fontSize="text-[16px] sm:text-[20px]"
        />
      </div>
    </div>
  );
};

export default Heropage;

// import heroImage from '../../assets/elishaConsultancyHero.jpg';
// import GlobalBtn from '../ui/GlobalBtn';

// const Heropage = () => {
//   return (
//     <div
//       id="home"
//       className="relative w-full h-[100vh] min-h-[550px] bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="absolute inset-0 bg-black/40" />

//       <div className="relative z-10 h-full w-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center items-center text-center">
        
//         <h1 className="text-white text-[42px] sm:text-[56px] md:text-[64px] font-serif font-bold tracking-wide max-w-[1000px] leading-tight drop-shadow-md mb-10">
//           Your Journey Starts Here
//         </h1>

//         <p className="text-white/95 text-[16px] sm:text-[18px] md:text-[28px] font-normal max-w-[750px] mt-4 mb-15 leading-relaxed drop-shadow-sm">
//           From passport processing to dream vacations, we handle every detail so you can focus on the adventure
//         </p>

//         <GlobalBtn
//           textBtn="Explore Our Services"
//           bg="bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors duration-200 shadow-md"
//           paddingX="px-8"
//           paddingY="py-3.5"
//           borderRadius="rounded-full"
//           border="border-none"
//           color="text-white"
//           fontWeight="font-semibold"
//           fontSize="text-[20px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default Heropage;