'use client';

import { ReactNode, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import Header from '@/components/Layout/Header/Header';
import Sidebar from '@/components/Layout/Sidebar/Sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && user?.role !== 'Admin') {
      router.push('/login');
    }
  }, [isMounted, user, router]);

  if (!isMounted || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>

  );
}
