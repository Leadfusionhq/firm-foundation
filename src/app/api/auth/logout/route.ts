import { NextResponse } from 'next/server';
export async function POST() {
  try {
    const response = NextResponse.json({ message: 'Logout successful' }, { status: 200 });
    
    // Clear the authentication cookie
    response.cookies.set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0), // Set expiration to a past date
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error in POST /api/auth/logout:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}