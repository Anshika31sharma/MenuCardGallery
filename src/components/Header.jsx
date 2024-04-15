import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaInfoCircle, FaWallet, FaShoppingCart } from 'react-icons/fa';
import { useCart } from './Cart/CartContext';

const Header = () => {
  const { cart } = useCart();
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    setItemsInCart(cart.length);
  }, [cart]);

  return (
    <header className="bg-blue-500 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto lg:flex md:flex text-sm justify-between items-center">
        <h1 className="lg:text-2xl text- font-bold">
          <Link to="/" className="flex items-center text-white">
            <FaUtensils className="mr-2" />
            Demo Restaurant
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4 text-sm lg:text-xl lg:space-x-8">
            <li>
              <Link to="/menu" className="flex items-center text-white hover:text-gray-200">
                <FaUtensils className="mr-2" />
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center text-white hover:text-gray-200">
                <FaInfoCircle className="mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link to="/pay" className="flex items-center text-white hover:text-gray-200">
                <FaWallet className="mr-2" />
                Pay
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center text-white hover:text-gray-200 relative">
              <div className="absolute -top-1 lg:right-10 md:right-8 right-8  bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  {itemsInCart}
                </div>
                <FaShoppingCart className="mr-4" />
                
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
