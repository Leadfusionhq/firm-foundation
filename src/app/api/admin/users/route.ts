import { connectDB } from '@/lib/mongodb'
import { User } from '@/models/User'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const users = await User.find({}).select('id name email role isActive')

    if (!users) {
      return NextResponse.json({ error: 'No users found' }, { status: 404 })
    }
    return NextResponse.json({
      message: 'Users fetched successfully',
      data: users.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      })),
    }, { status: 200 })

  } catch (error: unknown) {
    console.error('Error in GET /api/users:', error)

    const errorMessage = process.env.NODE_ENV === 'production' ? 'Something went wrong. Please try again later.' : (error instanceof Error ? error.message : 'Unknown error')
    
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
