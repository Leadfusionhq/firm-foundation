import { Metadata } from "next";

import RegisterForm from '@/components/auth/RegisterForm/RegisterForm'


export default function Register() {
  return (
    <>
    <RegisterForm />
    </>

  )
}
export const metadata: Metadata = {
  title: 'Register | Lead Management Platform',
  description: 'Register to your account to manage leads and campaigns.'
};
