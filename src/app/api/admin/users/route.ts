import { connectDB } from '@/lib/mongodb'
import { User } from '@/models/User'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connectDB();

  const url = new URL(req.url);
  const role = url.searchParams.get('role');
  console.warn('role',role);
  const filter = role ? { role } : {};

  const users = await User.find(filter).select('_id name email role isActive companyName phoneNumber zipCode createdAt updatedAt');

  if (!users || users.length === 0) {
    return NextResponse.json({ error: 'No users found' }, { status: 404 });
  }

  return NextResponse.json({
    message: 'Users fetched successfully',
    all:users,
    data: users.map(user => ({
      id: user?._id,
      name: user?.name,
      email: user?.email,
      role: user?.role,
      isActive: user?.isActive,
      companyName: user?.companyName,
      phoneNumber: user?.phoneNumber,
      zipCode: user?.zipCode,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    })),
  }, { status: 200 });
}
