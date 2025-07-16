import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

let cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectDB() {
  if (cached.conn) {
    console.log("Using cached database connection")  // Add logging
    return cached.conn
  }

  if (!cached.promise) {
    console.log("Establishing new database connection...")  // Add logging
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  console.log("MongoDB connected successfully")  // Add logging

  return cached.conn
}
