'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

interface SidebarItemProps {
  item: {
    id: string;
    name: string;
    icon: React.ElementType;
    link: string;
  };
}

const SidebarItem: FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.link || pathname?.startsWith(item.link + '/');

  return (
    <Link href={item.link}>
      <div
        className={`flex items-center gap-3 px-4 py-2 my-2 rounded-full cursor-pointer ${
          isActive ? 'bg-[#A8906B] text-white font-semibold' : 'hover:bg-gray-700'
        }`}
      >
        <item.icon />
        <span>{item.name}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
