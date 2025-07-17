import { FaUser, FaTachometerAlt } from 'react-icons/fa';

export const adminSidebarItems = [
  { id: 'dashboard', name: 'Dashboard', icon: FaTachometerAlt, link: '/admin/dashboard' },
];

export const userSidebarItems = [
  { id: 'dashboard', name: 'Dashboard', icon: FaTachometerAlt, link: '/dashboard' },
  { id: 'profile', name: 'Profile', icon: FaUser, link: '/profile' },
];
