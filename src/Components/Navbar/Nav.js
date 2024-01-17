import React, { useState, useEffect } from 'react';
import MysvgLogo from '../../assets/logo2.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`p-4 flex justify-between fixed top-0 w-full z-50 transition duration-300 ${
          scrolling ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className="sm:flex sm:ml-32 flex">
          <img src={MysvgLogo} alt="logo" />
        </div>
        <div className="md:hidden ml-20">
          <button className="text-black focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 ml-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
          <div className={`menu ${isOpen ? 'block' : 'hidden'} md:flex md:space-x-20`}>
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-14 sm:mr-96">
            {/* Add your menu items here */}
            <li className="mr-4">
              <a href="" className="text-black">
                Services
              </a>
            </li>
            <li className="mr-4">
              <a href="#destination" className="text-black">
                Destination
              </a>
            </li>
            <li className="mr-4">
              <a href="" className="text-black">
                Booking
              </a>
            </li>
            <li className="mr-4">
              <a href="" className="text-black">
                Testimonial
              </a>
            </li>
            <li>
              <button className="mr-2 border border-black text-black px-2 sm:py-2 md:p-2 rounded">Sign up</button>
            </li>
            <li className="actions mt-0 md:mt-0">
              <select className="bg-transparent text-black border-none">
                <option value="">En</option>
                <option value="">Sp</option>
                <option value="">Bn</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
