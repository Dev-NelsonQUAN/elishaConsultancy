import React, { useState, useEffect } from 'react';
import Header from '../static/Header';
import CompLayout from '../../layout/CompLayout';
//import elishaHeroPageOne from '../../assets/elishaHeroPageOne.svg'; // No longer directly used
//import elishaHeroPageTwo from '../../assets/elishaHeroPageTwo.svg'; // No longer directly used
//import elishaHeroPageThree from '../../assets/elishaHeroPageThree.svg'; // No longer directly used

const carouselData = [
  {
    image: '../../../src/assets/elishaHeroPageOne.svg',
    heading: 'Welcome To Elisha Consultancy Services',
    paragraph: 'This platform aims in helping clients process their visa and passport application. We also help in booking flight tickets',
  },
  {
    image: '../../src/assets/elishaHeroPageTwo.svg',
    heading: 'Get your Passport Application process with Us',
    // paragraph: 'We specialize in simplifying your visa and passport application process.',
  },
  {
    image: '../../../src/assets/elishaHeroPageThree.svg',
    heading: 'Get your Visa Application process with Us',
    // paragraph: 'Find and book the best flight tickets for your travel needs.',
  },
];

const Heropage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  // Optional: Implement automatic sliding with useEffect
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Empty dependency array means this runs once after the initial render

    // New useEffect to handle image preloading and loading state
    useEffect(() => {
        let loadedCount = 0;
        const totalImages = carouselData.length;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                setImagesLoaded(true); // Set state when all images are loaded
            }
        };

        // Preload images
        carouselData.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; // Consider error as loaded to prevent stuck state
        });
    }, []);

  // Get the current slide data
  const currentSlide = carouselData[currentIndex];

  

  return (
    <div
      className="bg-repeat bg-cover h-[100vh] w-full"
      style={{
        backgroundImage: imagesLoaded ? `url(${currentSlide.image})` : 'none', // Use image if loaded
        backgroundColor: !imagesLoaded ? '#0d0dd298' : 'transparent', // Optional: Show a background while loading
      }} // Dynamically set background image

      id='home'
    >
      <div className="h-[100vh] bg-[#0d0dd298] px-0 py-8">
        <CompLayout>
          <Header />

          <div className="flex flex-col justify-center items-center lg:mt-40 gap-10 text-center">
            {/* 3. Dynamically render the text */}
            <h1 className="text-white w-180 text-[50px] lg:mt-4.5 font-bold">
              {currentSlide.heading}  
            </h1>
            <p className="text-white text-3xl w-200 text-center">
              {currentSlide.paragraph}
            </p>
          </div>
        </CompLayout>
{/* 
        <div className="flex justify-center mt-4">
          <button onClick={prevSlide} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l-md">
            Previous
          </button>
          <button onClick={nextSlide} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-md">
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Heropage;