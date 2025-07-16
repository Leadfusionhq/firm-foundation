'use client';

import { ReactNode } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';

export default function UserLayout({ children }: { children: ReactNode }) {
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter()

  if (user?.role !== 'User') {
    router.push('/login');;
  }

  return (
    <div className="layout_user">
      <div className="content">
        <main>{children}</main>
      </div>
    </div>
  );
}
