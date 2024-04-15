import React from 'react';
import { Link } from 'react-scroll';

const MenuButtons = () => {
  return (
    <div className="absolute top-20 left-0 right-0 flex cursor-pointer flex-wrap justify-center items-center py-2">
      <div className="flex flex-wrap justify-center cursor-pointer items-center">
        <Link 
          to="beverages" 
          smooth={true} 
          duration={500} 
          className="mx-1 my-1 bg-slate-50  text-center px-3 py-2 rounded-md text-sm sm:text-base"
        >
          Beverages
        </Link>
        <Link 
          to="starters" 
          smooth={true} 
          duration={500} 
          className="mx-1 my-1 bg-slate-50  text-center px-3 py-2 rounded-md text-sm sm:text-base"
        >
          Starters
        </Link>
        <Link 
          to="mainCourse" 
          smooth={true} 
          duration={500} 
          className="mx-1 my-1 bg-slate-50  text-center px-3 py-2 rounded-md text-sm sm:text-base"
        >
          Main Course
        </Link>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <Link 
          to="soup" 
          smooth={true} 
          duration={500} 
          className="mx-1 my-1 bg-slate-50  text-center px-3 py-2 rounded-md text-sm sm:text-base"
        >
          Soup
        </Link>
        <Link 
          to="desserts" 
          smooth={true} 
          duration={500} 
          className="mx-1 my-1 bg-slate-50  text-center px-3 py-2 rounded-md text-sm sm:text-base"
        >
          Desserts
        </Link>
      </div>
    </div>
  );
};

export default MenuButtons;
