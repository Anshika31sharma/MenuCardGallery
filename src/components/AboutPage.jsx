// AboutPage.jsx
import React from 'react';
import Carousel from './Carousel'; // Import your carousel component here

const AboutPage = () => {
    const carouselSlides = [
        'https://yenu.menu/demo/images/gallery/4.webp',
        'https://yenu.menu/demo/images/gallery/5.webp',
        'https://yenu.menu/demo/images/gallery/1.webp',
        'https://yenu.menu/demo/images/gallery/2.webp',
        'https://yenu.menu/demo/images/gallery/3.webp',
    ];
  return (
    <div className="bg-white p-8 mt-5 ">
    <Carousel autoSlide autoSlideInterval={3000}>
        {carouselSlides.map((slide, index) => (
          <img key={`slide-${index}`} src={slide} alt={`Slide ${index + 1}`} className='w-full max-h-96 object-cover' />
        ))}
      </Carousel>

    <div className=" md:flex-row md:justify-between mt-5">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Timings</h2>
        <p>07:00 - 20:00</p>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>
          2nd Floor, Arogya Soudha Opposite Kulshekar Post Office Kulshekar Mangaluru Karnataka India - 575001
        </p>
      </div>
    </div>
    <div className=" md:flex-row md:justify-between mt-6">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p>+918197628777</p>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Whatsapp</h2>
        <p>918762582739</p>
      </div>
    </div>
    <div className=" md:flex-row md:justify-between mt-6">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <p>Dine-in, Takeaway, Delivery</p>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">Cuisines</h2>
        <p>South Indian Vegetarian, North Indian Vegetarian</p>
      </div>
    </div>
  </div>
  );
};

export default AboutPage;
