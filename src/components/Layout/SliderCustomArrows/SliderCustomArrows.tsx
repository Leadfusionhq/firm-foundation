import React from 'react';
import { CustomArrowProps } from 'react-slick';

export const NextArrow: React.FC<CustomArrowProps> = ({ onClick, className, style }) => (
  <div
    onClick={onClick}
    className={`group slick-arrow z-10 absolute bottom-0 left-[50px] cursor-pointer p-3 border border-[#000] hover:border-[#204D9D] bg-white hover:bg-[#204D9D] rounded-full flex items-center justify-center w-[40px] h-[40px] transition-colors duration-300 ${className}`}
    style={{ ...style }}
  >
    <svg
      width="8"
      height="15"
      viewBox="0 0 10 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 group-hover:fill-white group-hover:stroke-white fill-black stroke-black"
    >
      <path d="M1.13563 20.8321C1.21568 20.9387 1.32445 20.9991 1.43812 21..." />
    </svg>
  </div>
);

export const PrevArrow: React.FC<CustomArrowProps> = ({ onClick, className, style }) => (
  <div
    onClick={onClick}
    className={`group slick-arrow z-10 absolute bottom-0 left-0 cursor-pointer p-3 border border-[#000] hover:border-[#204D9D] bg-white hover:bg-[#204D9D] rounded-full flex items-center justify-center w-[40px] h-[40px] transition-colors duration-300 ${className}`}
    style={{ ...style }}
  >
    <svg
      width="8"
      height="15"
      viewBox="0 0 10 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 group-hover:fill-white group-hover:stroke-white fill-black stroke-black"
    >
      <path d="M8.86437 20.8321C8.78432 20.9387 8.67555 20.9991 8.56188 21..." />
    </svg>
  </div>
);
