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
    const phone = '+918197628777'; // Replace with your phone number
    const whatsapp = '918762582739';
  return (
<div className="bg-white md:p-10  mt-5 lg:mx-auto lg:max-w-3xl">
  <Carousel autoSlide autoSlideInterval={3000}>
    {carouselSlides.map((slide, index) => (
      <img key={`slide-${index}`} src={slide} alt={`Slide ${index + 1}`} className='w-full max-h-96 object-cover' />
    ))}
  </Carousel>

  <div className="md:flex-row md:justify-between mt-5">
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-2">Timings</h2>
      <p className='mb-5'>07:00 - 20:00</p>
    </div>
    <div className="flex-1 ">
      <h2 className="text-xl font-semibold mb-2">Address</h2>
      <p className='mb-5'>
        2nd Floor, Arogya Soudha Opposite Kulshekar Post Office Kulshekar Mangaluru Karnataka India - 575001
      </p>
    </div>
  </div>
  <div className="md:flex-row md:justify-between mt-6">
  <div className="flex-1">
  <h2 className="text-xl font-semibold mb-2">Phone</h2>
  <a href={`tel:${phone}`} className="mb-5 underline cursor-pointer bg-transparent border-none">{phone}</a>
</div>
<div className="flex-1">
  <h2 className="text-xl font-semibold mb-2">Whatsapp</h2>
  <a href={`tel:${whatsapp}`} className="  underline cursor-pointer  bg-transparent border-none">{whatsapp}</a>
</div>

<div className='flex justify-between  mt-5'>
  <a href="https://www.facebook.com/MyYenuMenu/" target="_blank" rel="noopener noreferrer">
    <button className='bg-purple-800 rounded-md p-2 text-white lg:w-32 w-20  md:w-32 lg:text-lg text-sm'>Facebook</button>
  </a>
  <a href="https://www.instagram.com/MyYenuMenu/" target="_blank" rel="noopener noreferrer">
    <button className='bg-pink-700 rounded-md text-white p-2 lg:w-32 w-20 md:w-32 lg:text-lg text-sm'>Instagram</button>
  </a>
  <a href="https://www.youtube.com/MyYenuMenu/" target="_blank" rel="noopener noreferrer">
    <button className='bg-red-500 rounded-md p-2 lg:w-32 text-white w-20 md:w-32 lg:text-lg text-sm'>Youtube</button>
  </a>
  <a href="https://www.linkdein.com/MyYenuMenu/" target="_blank" rel="noopener noreferrer">
    <button className='bg-blue-500 rounded-md p-2 lg:w-32 text-white w-20 md:w-32 lg:text-lg text-sm'>LinkedIn</button>
  </a>
</div>

  </div>
  <div className="md:flex-row md:justify-between mt-6">
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-2">Services</h2>
      <p className='mb-5'>Dine-in, Takeaway, Delivery</p>
    </div>
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-2">Cuisines</h2>
      <p className='mb-5'>South Indian Vegetarian, North Indian Vegetarian</p>
    </div>
  </div>
</div>

  );
};

export default AboutPage;
