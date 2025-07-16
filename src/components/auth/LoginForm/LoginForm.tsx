'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/auth/authActions';
import { RootState, AppDispatch } from '@/redux/store';

interface LoginResponse {
  token: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'Admin' | 'Client'>('Admin');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      if (user.role === 'Admin') router.push('/admin/dashboard');
      else router.push('/dashboard');
    }
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F6] relative">
      <div className="w-full max-w-[500px]">
        {/* Top Section with Logo and Role Switch */}
        <div className="relative flex flex-col items-center rounded-t-lg mt-[80px]" style={{ background: 'linear-gradient(90deg, #BFA46F 0%, #E5C97B 100%)' }}>
          <div className="flex flex-col items-center -mt-12">
            <div className="bg-[#000] rounded-full p-4 shadow-md mt-0 mb-2">
              <Image src="/images/logo.svg" alt="Firm Foundations Marketing" width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2 mb-4">
            <button
              type="button"
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${role === 'Admin' ? 'bg-black text-white' : 'bg-transparent border border-black text-black'}`}
              onClick={() => setRole('Admin')}
            >
              Login as Admin
            </button>
            <button
              type="button"
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${role === 'Client' ? 'bg-black text-white' : 'bg-transparent border border-black text-black'}`}
              onClick={() => setRole('Client')}
            >
              Login as Client
            </button>
          </div>
        </div>
        {/* Form Section */}
        <div className="bg-white p-8 rounded-b-lg shadow-md w-full -mt-2">
          <h2 className="text-[40px] md:text-[54px] text-[#000] font-bold text-center mb-2 tracking-wide uppercase">Welcome Back</h2>
          <p className='text-[#1C1C1C] mb-[30px] text-[18px] text-center'>Sign in to access your Lead Manager and stay on top of your leads—all in one place.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder='Email Address'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 w-full border border-gray-300 text-[#000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BFA46F]"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-[20px] px-4 py-2 w-full border border-gray-300 text-[#000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BFA46F]"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12.01c2.12 4.06 6.37 6.99 11.066 6.99 2.042 0 3.977-.488 5.662-1.354M19.423 15.924A10.45 10.45 0 0022.066 12c-2.12-4.06-6.37-6.99-11.066-6.99-1.522 0-2.98.262-4.32.743M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.808 2.808l18.384 18.384M9.878 9.878A3 3 0 0115 12m-3 3a3 3 0 01-3-3c0-.795.312-1.515.878-2.122m0 0L4.222 4.222m5.656 5.656A9.956 9.956 0 0012 4.5c4.696 0 8.946 2.93 11.066 6.99a10.45 10.45 0 01-2.643 3.434m-3.03 2.12A9.956 9.956 0 0112 19.5c-1.522 0-2.98-.262-4.32-.743" />
                  </svg>
                )}
              </button>
            </div>
            {/* Options Row */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2 accent-[#BFA46F]" />
                Remember me
              </label>
              <Link href="#" className="text-sm text-[#BFA46F] hover:underline">Forgot password?</Link>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#000] text-white rounded-md font-bold text-lg hover:bg-[#222] transition-all"
            >
              LOG IN
            </button>
          </form>
          <div className="text-center mt-4 text-sm text-[#1C1C1C]">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#BFA46F] font-semibold hover:underline">Sign Up</Link>
          </div>
        </div>
        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mt-6 mb-2">
          © 2025 Firm Foundations, All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default LoginForm
