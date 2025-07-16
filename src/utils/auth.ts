import Cookies from 'js-cookie';
import { NextRequest } from 'next/server';

export function saveToken(token: string) {
  if (typeof window !== 'undefined') {
    Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' });
  }
}

export const getToken = (req: NextRequest) => {
  const cookie = req.cookies.get('token'); 
  return cookie ? cookie : null;
};

export function decodeToken(token: string): any {
  try {
    const payload = token.split('.')[1]; 
    return JSON.parse(typeof window !== 'undefined' ? atob(payload) : Buffer.from(payload, 'base64').toString());
  } catch (err) {
    return null;
  }
}

export function removeToken() {
  if (typeof window !== 'undefined') {
    Cookies.remove('token');
  }
}
