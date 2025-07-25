import React from 'react';
import { CustomArrowProps } from 'react-slick';

export const NextArrow: React.FC<CustomArrowProps> = ({ onClick, className, style }) => (
  <div
    onClick={onClick}
    className={`custom-icons group slick-arrow !top-auto z-10 absolute !-bottom-[20px] !left-[50px] !right-auto cursor-pointer p-3 !border !border-[#000] hover:!border-[#204D9D] !bg-white hover:!bg-[#204D9D] rounded-full !flex items-center justify-center !w-[40px] !h-[40px] transition-colors duration-300 ${className}`}
    style={{ ...style }}
  >
    <svg
      width="8"
      height="15"
      viewBox="0 0 10 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 group-hover:!fill-white group-hover:!stroke-white !fill-black !stroke-black"
    >
      <path d="M1.13563 20.8321C1.21568 20.9387 1.32445 20.9991 1.43812 21C1.49454 21.0007 1.55047 20.9861 1.60248 20.9573C1.6545 20.9284 1.7015 20.8858 1.74062 20.8321L8.87353 11.4064C8.91359 11.3541 8.9454 11.2919 8.96711 11.2233C8.98882 11.1547 9 11.081 9 11.0067C9 10.9323 8.98882 10.8586 8.96711 10.79C8.9454 10.7214 8.91359 10.6592 8.87353 10.6069L1.74062 1.17922C1.7014 1.12382 1.65415 1.07941 1.60167 1.04863C1.5492 1.01785 1.49257 1.00134 1.43517 1.00008C1.37777 0.998814 1.32076 1.01282 1.26754 1.04127C1.21431 1.06972 1.16596 1.11202 1.12537 1.16567C1.08477 1.21931 1.05276 1.2832 1.03123 1.35353C1.0097 1.42386 0.999102 1.4992 1.00006 1.57505C1.00102 1.65091 1.01351 1.72573 1.0368 1.79507C1.06009 1.86442 1.0937 1.92686 1.13563 1.97869L7.96604 11.0067L1.13563 20.0326C1.09575 20.085 1.0641 20.1473 1.04251 20.2159C1.02091 20.2845 1.0098 20.3581 1.0098 20.4324C1.0098 20.5067 1.02091 20.5802 1.04251 20.6488C1.0641 20.7174 1.09575 20.7797 1.13563 20.8321Z" />
    </svg>
  </div>
);

export const PrevArrow: React.FC<CustomArrowProps> = ({ onClick, className, style }) => (
  <div
    onClick={onClick}
    className={`custom-icons group slick-arrow !top-auto z-10 absolute !-bottom-[20px] !left-0 !right-auto cursor-pointer p-3 !border !border-[#000] hover:!border-[#204D9D] !bg-white hover:!bg-[#204D9D] rounded-full !flex items-center justify-center !w-[40px] !h-[40px] transition-colors duration-300 ${className}`}
    style={{ ...style }}
  >
    <svg
      width="8"
      height="15"
      viewBox="0 0 10 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 group-hover:!fill-white group-hover:!stroke-white !fill-black !stroke-black"
    >
      <path d="M8.86437 20.8321C8.78432 20.9387 8.67555 20.9991 8.56188 21C8.50546 21.0007 8.44953 20.9861 8.39752 20.9573C8.3455 20.9284 8.2985 20.8858 8.25938 20.8321L1.12647 11.4064C1.08641 11.3541 1.0546 11.2919 1.03289 11.2233C1.01118 11.1547 1 11.081 1 11.0067C1 10.9323 1.01118 10.8586 1.03289 10.79C1.0546 10.7214 1.08641 10.6592 1.12647 10.6069L8.25938 1.17922C8.2986 1.12382 8.34585 1.07941 8.39833 1.04863C8.4508 1.01785 8.50743 1.00134 8.56483 1.00008C8.62223 0.998814 8.67924 1.01282 8.73246 1.04127C8.78569 1.06972 8.83404 1.11202 8.87463 1.16567C8.91523 1.21931 8.94724 1.2832 8.96877 1.35353C8.9903 1.42386 9.0009 1.4992 8.99994 1.57505C8.99898 1.65091 8.98649 1.72573 8.9632 1.79507C8.93991 1.86442 8.9063 1.92686 8.86437 1.97869L2.03396 11.0067L8.86437 20.0326C8.90425 20.085 8.9359 20.1473 8.95749 20.2159C8.97909 20.2845 8.9902 20.3581 8.9902 20.4324C8.9902 20.5067 8.97909 20.5802 8.95749 20.6488C8.9359 20.7174 8.90425 20.7797 8.86437 20.8321Z" />
    </svg>
  </div>
);
