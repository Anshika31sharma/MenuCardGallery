import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const handleDotClick = (index) => {
    setCurr(index);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500">
        {slides.map((slide, index) => (
          <div key={index} style={{ flex: `0 0 100%`, display: `${curr === index ? 'block' : 'none'}` }}>
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full cursor-pointer ${curr === i ? 'p-0.5' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;