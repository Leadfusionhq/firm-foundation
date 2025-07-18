'use client';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/auth/authSlice';
import { removeToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppDispatch } from '@/redux/store';
import { API_URL } from '@/utils/apiUrl';

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();


  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await fetch(API_URL.LOGOUT_USER, { method: 'POST' });

        if (!response.ok) {
          throw new Error('Logout failed');
        }

        dispatch(logout());

        removeToken();

        router.push('/login');
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

    logoutUser();
  }, [dispatch, router]); 

  return (
    <div>
      <p>Logging out...</p> 
    </div>
  );
};

export default Logout;
