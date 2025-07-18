'use client';

import { ReactNode } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
// import Header from '@/components/Layout/Header/Header';
import Sidebar from '@/components/Layout/Sidebar/Sidebar';
import MainPanel from '@/components/Layout/Dashboard/MainPanel/MainPanel';

export default function UserLayout({ children }: { children: ReactNode }) {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter()

  if (user?.role !== 'User') {
    router.push('/login');;
  }

  return (
    <div className="layout_user flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <MainPanel />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
