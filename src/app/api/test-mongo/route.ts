import { connectDB } from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await connectDB()
    return NextResponse.json({ connected: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ connected: false, error: String(error) }, { status: 500 })
  }
}
