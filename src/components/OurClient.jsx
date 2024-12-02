import React, { useState, useEffect } from 'react';

const abc = [
  { src: 'https://via.placeholder.com/150?text=Client+1', alt: 'Client 1' },
  { src: 'https://via.placeholder.com/150?text=Client+2', alt: 'Client 2' },
  { src: 'https://via.placeholder.com/150?text=Client+3', alt: 'Client 3' },
  { src: 'https://via.placeholder.com/150?text=Client+4', alt: 'Client 4' },
  { src: 'https://via.placeholder.com/150?text=Client+5', alt: 'Client 5' },
  { src: 'https://via.placeholder.com/150?text=Client+6', alt: 'Client 6' },
  { src: 'https://via.placeholder.com/150?text=Client+7', alt: 'Client 7' },
  { src: 'https://via.placeholder.com/150?text=Client+8', alt: 'Client 8' },
  { src: 'https://via.placeholder.com/150?text=Client+9', alt: 'Client 9' },
  { src: 'https://via.placeholder.com/150?text=Client+10', alt: 'Client 10' },
];

// Duplicate items for smooth transition
const extendedAbc = [...abc, ...abc.slice(0, 4)]; // Add the first 4 items again

export default function OurClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4; // Number of cards visible at a time

  // Move to the next slide automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Move to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= abc.length) {
        // Reset to 1 after reaching the end to avoid jumping
        return 1;
      }
      return prevIndex + 1;
    });
  };

  // Move to the previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        // Move to the last duplicated slide
        return abc.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[50%] bg-gray-100 py-8 relative">
      <h2 className="w-[100%] pl-12 text-3xl font-bold text-orange-500 mb-8">OUR CLIENTS</h2>
      <div className="relative overflow-hidden w-full max-w-[90%]">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {extendedAbc.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 p-2"
            >
              <div className="h-48 flex items-center justify-center">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#b6c6c9] text-white p-3 shadow-md hover:bg-[#00bcd4] cursor-pointer transition duration-300 ease-in-out"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#b6c6c9] text-white p-3 shadow-md hover:bg-[#00bcd4] cursor-pointer transition duration-300 ease-in-out"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
