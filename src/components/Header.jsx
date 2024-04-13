import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between  items-center">
        <h1 className="text-2xl font-bold">Demo Restaurant</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pay">Pay Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;