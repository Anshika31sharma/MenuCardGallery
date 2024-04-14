import React, { useState } from 'react';
import { Link } from 'react-scroll';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed lg:top-52 justify-center items-center    cursor-pointer text-white p-5">
       <div className="fixed justify-center items-center  mx-auto mt-5 lg:mt-0 cursor-pointer w-20 lg:w-40 lg:left-10 bg-gray-700 text-white top-20 h-18   rounded-md p-2">
      <div className="lg:text-xl text-sm font-bold flex justify-center mx-auto items-center" onClick={toggleDropdown}>
        Menu 
      </div>
      {isOpen && (
        <ul className="flex flex-col mt-2 text-sm font-medium">
          <li>
            <Link to="beverages" smooth={true} duration={500} onClick={toggleDropdown} className="text-white">
              Beverages
            </Link>
          </li>
          <li>
            <Link to="starters" smooth={true} duration={500} onClick={toggleDropdown} className="text-white">
              Starters
            </Link>
          </li>
          <li>
            <Link to="mainCourse" smooth={true} duration={500} onClick={toggleDropdown} className="text-white">
              Main Course
            </Link>
          </li>
          <li>
            <Link to="soup" smooth={true} duration={500} onClick={toggleDropdown} className="text-white">
              Soup
            </Link>
          </li>
          <li>
            <Link to="desserts" smooth={true} duration={500} onClick={toggleDropdown} className="text-white">
              Desserts
            </Link>
          </li>
        </ul>
      )}
    </div>
    </div>
  );
};

export default DropDown;
