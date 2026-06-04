import heroImage from '../../assets/elishaConsultancyHero.jpg';
import GlobalBtn from '../ui/GlobalBtn';

const Heropage = () => {
  return (
    <div
      id="home"
      className="relative w-full h-[100vh] min-h-[550px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full w-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center items-center text-center">
        
        <h1 className="text-white text-[42px] sm:text-[56px] md:text-[64px] font-serif font-bold tracking-wide max-w-[1000px] leading-tight drop-shadow-md mb-10">
          Your Journey Starts Here
        </h1>

        <p className="text-white/95 text-[16px] sm:text-[18px] md:text-[28px] font-normal max-w-[750px] mt-4 mb-15 leading-relaxed drop-shadow-sm">
          From passport processing to dream vacations, we handle every detail so you can focus on the adventure
        </p>

        <GlobalBtn
          textBtn="Explore Our Services"
          bg="bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors duration-200 shadow-md"
          paddingX="px-8"
          paddingY="py-3.5"
          borderRadius="rounded-full"
          border="border-none"
          color="text-white"
          fontWeight="font-semibold"
          fontSize="text-[20px]"
        />
      </div>
    </div>
  );
};

export default Heropage;