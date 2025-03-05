"use client";

import { useState, useEffect } from 'react';
import Button from "../Button";
import { isMobile } from '@/utils/deviceHelpers';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { GoCodeSquare } from 'react-icons/go';
import { useStore } from '@/store/useStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { language, setLanguage } = useStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const updateMobileStatus = () => {
      setMobile(isMobile());
    };

    updateMobileStatus();
    window.addEventListener('resize', updateMobileStatus);

    return () => {
      window.removeEventListener('resize', updateMobileStatus);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto h-16 p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold cursor-pointer flex flex-row gap-2 items-center" onClick={() => window.location.href = '/'}><GoCodeSquare />Tiago Pinheiro</h1>
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
        {!mobile &&
          <div className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            <div className="flex flex-row gap-2 items-center">
              <select
                id="language"
                className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
              </select>
            </div>
            <Button label="Home" href="/" />
            <Button label="Technologies" href="/technologies" />
            <Button label="Contact" className="bg-white hover:bg-gray-50" href="/contact" />
          </div>
        }
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-sm rounded-lg p-4 flex flex-col gap-2 absolute top-16 left-0 right-0 mx-4">
          <div className="flex flex-row gap-2 items-center">
            <select
              id="language"
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </div>
          <Button label="Home" href="/" onClick={closeMenu} />
          <Button label="Technologies" href="/technologies" onClick={closeMenu} />
          <Button label="Contact" className="bg-blue-500 text-white hover:text-white" href="/contact" onClick={closeMenu} />
        </div>
      )}
    </div>
  );
}