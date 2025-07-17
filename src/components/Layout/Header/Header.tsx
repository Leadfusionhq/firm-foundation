// components/Layout/Header.tsx
import React from 'react';
import Image from 'next/image';
// import { Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
      <div className="mb-7 text-lg font-semibold text-[#000000]">
        Welcome to Dashboard, John Doe!
      </div>

      <div className="flex items-center space-x-4">
        {/* <Bell className="text-gray-500" /> */}
        <Image
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
