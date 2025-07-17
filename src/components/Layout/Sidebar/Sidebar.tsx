'use client';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/redux/auth/authSlice';
import { removeToken } from '@/utils/auth';
// import { usePathname, useRouter } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SidebarItem from './SidebarItem';
import { adminSidebarItems, userSidebarItems } from './sidebarData';
import { AppDispatch, RootState } from '@/redux/store';

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  // const pathname = usePathname();

  const { user } = useSelector((state: RootState) => state.auth);
  const role = user?.role;

  const sidebarItems = role === 'Admin' ? adminSidebarItems : userSidebarItems;

  const handleLogout = () => {
    dispatch(logout());
    removeToken();
    router.push('/login');
  };

  return (
    <aside className="bg-black text-white w-64 h-screen flex flex-col justify-between p-6 fixed left-0 top-0">
      <div>
        <div className="mb-12 border-b border-b-white/10">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto mb-2"
          />
        </div>

        <nav className="space-y-4">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </nav>
      </div>

      <button
        className="bg-[#E5D6990D] text-[#A8906B] font-semibold rounded-full py-2 px-4"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
