'use client';

import { ReactNode, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
// import Header from '@/components/Layout/Header/Header';
import MainPanel from '@/components/Layout/Dashboard/MainPanel/MainPanel';
import Sidebar from '@/components/Layout/Sidebar/Sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();


    useEffect(() => {
        if (!user || user.role !== 'Admin') router.push('/login');
    });

  return (
    <div className="layout_admin flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <MainPanel />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>

  );
}
