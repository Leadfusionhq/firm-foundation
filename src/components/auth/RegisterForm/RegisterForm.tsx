'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FieldAttributes } from 'formik';

import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { registerUser } from '@/redux/auth/authActions';
import { RootState, AppDispatch } from '@/redux/store';
import { clearError, clearSuccess } from '@/redux/auth/authSlice';
import styles from './RegisterForm.module.css'

const RegisterForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, success, message } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (success && message) {
      toast.dismiss();
      toast.success(message);
      dispatch(clearSuccess()); // Clear success state after showing toast
    }
  }, [success, message, dispatch]);

  useEffect(() => {
    if (error) {
      toast.dismiss();
      toast.error(error);
      dispatch(clearError()); // Clear error state after showing toast
    }
  }, [error, dispatch]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    phoneNumber: '',
    zipCode: '',
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    companyName: Yup.string().required('Company Name is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    zipCode: Yup.string().required('Zip Code is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = async (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    dispatch(registerUser(values));
    setSubmitting(false);
  };

  // Custom Formik-compatible Input
  const FormikInput = ({ label, ...props }: { label?: string } & FieldAttributes<string>) => (
    <div className="{styles.blog} w-full mb-2">
      <Field
        {...props}
        className="h-[66px] border border-[#01010121] rounded-[8px] px-5 text-[18px] font-inter bg-[#FFFFFF] text-[#1C1C1C] focus:border-[#222] outline-none transition w-full"
        {...props}
      />
      <ErrorMessage name={props.name} component="div" className="text-red-500 text-xs mt-1" />

    </div>
  );

  return (
  <div className="reigster_box bg-[url('/images/log_bg.png')] bg-cover bg-no-repeat h-screen ">
      <div className="register-container container mx-auto min-h-screen flex flex-col px-4 md:px-0 ">
      {/* Centered Logo Above Grid */}
      <div className={`flex justify-center items-center w-full mt-8 ${styles.diss}`}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={167}
          height={167}
          className="rounded-full"
          priority
        />
      </div>
      {/* Grid: Form and Side Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 w-full items-start mt-11.5">
        {/* Left: Form Section */}
        <div className="flex flex-col justify-start items-center mt-2 py-8 md:py-0 pt-0  pr-10">
          {/* Title */}
          <h1 className="font-bold text-[#000000] font-[Times_New_Roman] text-[54px] leading-[100%] tracking-[0.01em] text-center uppercase">
            Sign Up to Get Qualified Leads Today!
          </h1>
          {/* Subtitle */}
          <p className="font-inter font-normal text-[18px] leading-[28px] text-center mt-4 text-[#222] m-auto max-w-[600px]">
            Create your account to start using Lead Manager—organize, track, and grow your leads with ease from one simple dashboard.
          </p>
          {/* Formik Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-[571px] min-h-[673px] rounded-[12px] p-0 mt-8  flex flex-col gap-4">
                <FormikInput
                    name="name"
                    placeholder="Name"
                />
                <FormikInput
                    name="email"
                    placeholder="Email Address"
                    type="email"
                />
                <FormikInput
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <FormikInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                />
                <FormikInput
                    name="companyName"
                    placeholder="Company Name"
                />
                <FormikInput
                    name="phoneNumber"
                    placeholder="Phone Number"
                />
                <FormikInput
                    name="zipCode"
                    placeholder="Zip Code"
                />

                <div className="flex items-start gap-2 mt-2 w-full">
                  <Field
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    I agree to the terms and conditions. By clicking &quot;Sign Up&quot;, I certify under penalty of perjury that the information I have provided on this form is true and correct.
                  </label>

                </div>
                <ErrorMessage name="terms" component="div" className="text-red-500 text-xs mt-1" />
                <button
                  type="submit"
                  className="h-[56px] bg-[#010101] text-white text-[20px] font-inter font-semibold rounded-[8px] border-none cursor-pointer transition hover:bg-[#222] mt-4"
                  disabled={isSubmitting || loading}
                >
                  {isSubmitting || loading ? 'Signing Up...' : 'SIGN UP'}
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  Already have an account? <Link href="/login" className="text-black underline">Sign In</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
        {/* Right: Side Image */}
        <div className="flex items-start justify-center py-8 md:py-0 pt-0 ">
          <div className="flex justify-center items-start w-full h-full">
            <Image
              src="/images/register/side-image-placeholder.png"
              alt="Event"
              width={779}
              height={1186}
              className="object-cover rounded-[25px]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RegisterForm;
