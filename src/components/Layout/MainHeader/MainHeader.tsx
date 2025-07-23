'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-[#fff]' id='#top'>
      {/* Top Strip */}
      <div className='bg-[#306A64] py-2 px-4'>
        <p className='text-white text-sm text-center'>
          We deliver leads, a powerful lead management dashboard, and dedicated support every step of the way
        </p>
      </div>

      {/* Main Header */}
      <div className='flex justify-between items-center gap-6 py-2 px-4 relative'>
        {/* Left Section */}
        <div className='hidden md:flex gap-3 items-center'>
          <button className='border-[#204D9D] border text-[#204D9D] hover:text-white hover:bg-[#204D9D] duration-300 bg-[#fff] rounded-[130px] py-1 px-4'>
            Client Login
          </button>
          <div className='flex items-center gap-3'>
            <Image src="/images/icons/twitter.png" alt="Twitter" className='w-[15px] h-[15px]' height={15} width={15} />
            <Image src="/images/icons/facebook.png" alt="Facebook" className='w-[15px] h-[15px]' height={15} width={15} />
            <Image src="/images/icons/linkedin.png" alt="LinkedIn" className='w-[15px] h-[15px]' height={15} width={15} />
            <Image src="/images/icons/instagram.png" alt="Instagram" className='w-[15px] h-[15px]' height={15} width={15} />
          </div>
        </div>

        {/* Logo */}
        <div>
          <Image src="/images/header-logo.png" alt="Logo" height={200} width={200} className='w-[60px]' />
        </div>

        {/* Right Section */}
        <div className='hidden md:block'>
          <button className='bg-[#204D9D] hover:bg-[#fff] hover:text-[#204D9D] duration-300 rounded-[130px] py-1 px-4 text-[#fff] border-primary-color border'>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden focus:outline-none'
        >
          <Image src="/images/icons/menu.png" alt="Menu" height={24} width={24} />
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className='absolute top-full right-4 w-[200px] bg-white shadow-lg p-4 rounded z-50 md:hidden'>
            <button className='w-full border-primary-color primary-color border bg-white rounded-[130px] py-1 px-4 mb-2'>
              Client Login
            </button>
            <button className='w-full bg-primary-color rounded-[130px] py-1 px-4 text-white border border-primary-color mb-3'>
              Sign Up
            </button>
            <div className='flex justify-center items-center gap-3'>
              <Image src="/images/icons/twitter.png" alt="Twitter" height={15} width={15} />
              <Image src="/images/icons/facebook.png" alt="Facebook" height={15} width={15} />
              <Image src="/images/icons/linkedin.png" alt="LinkedIn" height={15} width={15} />
              <Image src="/images/icons/instagram.png" alt="Instagram" height={15} width={15} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default MainHeader;
