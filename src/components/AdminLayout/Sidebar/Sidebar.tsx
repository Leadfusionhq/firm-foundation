'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ Correct hook
import Image from 'next/image'; 
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/redux/auth/authSlice';
import { removeToken } from '@/utils/auth';
import type { AppDispatch } from '@/redux/store';

const menuItems = [
  'Dashboard',
  // 'User Management',
  // 'Lead Management',
  // 'Campaigns',
  // 'Billing Control',
  // 'Settings',
  // 'Chats',
];

const Sidebar: React.FC = () => {
  const pathname = usePathname(); 
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    removeToken();
    router.push('/login');
  };

  return (
    <aside className="bg-[#000000] text-white w-64 h-screen flex flex-col justify-between p-6 fixed left-0 top-0">
      <div>
        {/* Logo */}
        <div className="mb-12 border-b border-b-[#FFFFFF17]">
          {/* <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-2" /> */}
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="mx-auto mb-2"
            />
        </div>

        <nav className="space-y-4">
          {menuItems.map((item) => {
            const slug = item.toLowerCase().replace(/ /g, '-');
            const isActive = pathname?.includes(slug); 

            return (
              <Link href={`/admin/${slug}`} key={item}>
                <div
                  className={`px-4 py-2 rounded-full cursor-pointer ${
                    isActive ? 'bg-[#A8906B] text-[#FFFFFF] font-semibold' : 'hover:bg-gray-700'
                  }`}
                >
                  {item}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <button className="bg-[#E5D6990D] text-[#A8906B] font-semibold rounded-full py-2 px-4" onClick={handleLogout}>
        Log Out 
      </button>
    </aside>
  );
};

export default Sidebar;
