"use client";

import { useState } from 'react';
import Button from "../Button";
import { isMobile } from '@/utils/deviceHelpers';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto h-16 p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Tiago Pinheiro</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <RiCloseLine className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <RiMenuLine className="w-6 h-6 transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>
        {!isMobile() &&
          <div className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            <Button label="Home" href="/" />
            <Button label="About" href="/about" />
            <Button label="Experience" href="/experience" />
            <Button label="Contact" className="bg-white hover:bg-gray-50" href="/contact" />
          </div>
        }
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 flex flex-col gap-2">
          <Button label="Home" href="/" />
          <Button label="About" href="/about" />
          <Button label="Experience" href="/experience" />
          <Button label="Contact" className="bg-blue-500 text-white hover:text-white" href="/contact" />
        </div>
      )}
    </div>
  );
}