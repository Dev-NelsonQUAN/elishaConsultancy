import logo from '../../assets/elishaConsultancy.svg'
import CompLayout from '../../layout/CompLayout'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-[#2B8CC4] pt-16 pb-8 text-white'>
      <CompLayout>
        <div className='max-w-[1200px] mx-auto px-4'>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 items-start text-left'>
            
            <div className='flex flex-col gap-6'>
              <div className='flex items-center gap-3 cursor-pointer' onClick={() => handleScroll('hero')}>
                <img src={logo} alt="Elisha Consultancy Services Logo" className='w-10 h-10 object-cover' />
                <h2 className='text-[20px] font-bold tracking-wider leading-tight uppercase font-sans'>
                  Elisha Consultancy<br />Services
                </h2>
              </div>
              <p className='text-[16px] font-medium leading-relaxed max-w-[320px] text-white/90'>
                Your trusted partner for unforgettable travel experiences.
              </p>
            </div>

            <div className='flex flex-col gap-5 md:pl-12'>
              <h3 className='text-[18px] font-bold tracking-wide font-sans'>Quick Links</h3>
              <ul className='flex flex-col gap-3.5 text-[15px] font-medium text-white/80'>
                <li>
                  <button onClick={() => handleScroll('hero')} className='hover:text-black transition-colors duration-200 text-left cursor-pointer'>
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('about')} className='hover:text-black transition-colors duration-200 text-left cursor-pointer'>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('services')} className='hover:text-black transition-colors duration-200 text-left cursor-pointer'>
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('contact')} className='hover:text-black transition-colors duration-200 text-left cursor-pointer'>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-5 md:pl-6'>
              <h3 className='text-[18px] font-bold tracking-wide font-sans'>Services</h3>
              <ul className='flex flex-col gap-3.5 text-[15px] font-medium text-white/80'>
                <li className='hover:text-black cursor-pointer transition-colors duration-200' onClick={() => handleScroll('services')}>
                  Flights & Hotels
                </li>
                <li className='hover:text-black cursor-pointer transition-colors duration-200' onClick={() => handleScroll('services')}>
                  Passport Processing
                </li>
                <li className='hover:text-black cursor-pointer transition-colors duration-200' onClick={() => handleScroll('services')}>
                  Visa Services
                </li>
                <li className='hover:text-black cursor-pointer transition-colors duration-200' onClick={() => handleScroll('services')}>
                  Document Processing
                </li>
              </ul>
            </div>

          </div>

          <div className='border-t border-white/20 pt-8 mt-4 text-center'>
            <p className='text-[13px] sm:text-[14px] font-medium tracking-wide text-white/90'>
              &copy; {currentYear} Elisha Consultancy Services. All rights reserved.
            </p>
          </div>

        </div>
      </CompLayout>
    </footer>
  )
}

export default Footer
