'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/auth/authActions';
import { RootState, AppDispatch } from '@/redux/store';
import { toast } from 'react-toastify';
import { clearError } from '@/redux/auth/authSlice';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
      toast.dismiss();
      toast.success('Login successful!');
      if (user.role === 'Admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/dashboard');
      }
    }
  }, [user, router]);

  useEffect(() => {
    // Handle login error
    if (error) {
      toast.dismiss();
      toast.error(error);
    }
    // Cleanup function to clear error state on unmount
    return () => {
      dispatch(clearError());
    };
  }, [error, dispatch]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={({ email, password }) => {
              dispatch(loginUser({ email, password }));
            }}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    className="h-[66px] border border-[#01010121] rounded-[8px] px-5 text-[18px] font-inter bg-[#FFFFFF] text-[#1C1C1C] focus:border-[#222] outline-none transition w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <div className="relative">
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="h-[66px] border border-[#01010121] rounded-[8px] px-5 text-[18px] font-inter bg-[#FFFFFF] text-[#1C1C1C] focus:border-[#222] outline-none transition w-full"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                {/* Options Row */}
                <div className="flex items-center justify-between mt-2">
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="checkbox" className="mr-2 accent-[#BFA46F]" />
                    Remember me
                  </label>
                  <Link href="#" className="text-sm text-[#BFA46F] hover:underline">Forgot password?</Link>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#000] text-white rounded-md font-bold text-lg hover:bg-[#222] transition-all"
                  disabled={isSubmitting || loading}
                >
                  {isSubmitting || loading ? 'Logging in...' : 'LOG IN'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center mt-4 text-sm text-[#1C1C1C]">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#BFA46F] font-semibold hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
