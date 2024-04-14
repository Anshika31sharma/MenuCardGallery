// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaInfoCircle, FaWallet, FaShoppingCart } from 'react-icons/fa'; // Importing icons from react-icons

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="lg:text-2xl text-md font-bold">
          <Link to="/" className="flex items-center text-white">
            <FaUtensils className="mr-2" /> {/* Icon for restaurant */}
            Demo Restaurant
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 text-sm lg:text-xl lg:space-x-8">
            <li>
              <Link to="/menu" className="flex items-center text-white hover:text-gray-200">
                <FaUtensils className="mr-2" /> {/* Icon for menu */}
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center text-white hover:text-gray-200">
                <FaInfoCircle className="mr-2" /> {/* Icon for about */}
                About
              </Link>
            </li>
            <li>
              <Link to="/pay" className="flex items-center text-white hover:text-gray-200">
                <FaWallet className="mr-2" /> {/* Icon for pay */}
                Pay
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center text-white hover:text-gray-200">
                <FaShoppingCart className="mr-2" /> {/* Icon for cart */}
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
