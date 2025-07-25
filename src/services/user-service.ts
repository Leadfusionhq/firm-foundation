import bcrypt from 'bcrypt';
import { User } from '@/models/User';
import { connectDB } from '@/lib/mongodb';

export const createUser = async (userData: any) => {
  try {
    await connectDB();

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new User({
      ...userData,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Database error');
    }
    throw new Error('Unknown error occurred');
  }
};

export const getAllUsersByRole = async (role?: string, isActive?: boolean) => {
  try {
    const filter: any = {};

    if (role) {
      filter.role = role;
    }

    if (isActive !== undefined) {
      filter.isActive = isActive;
    }

    const users = await User.find(filter)
      .select('name email role isActive companyName phoneNumber zipCode createdAt updatedAt'); 

      return users;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message || 'Database error');
    }
    throw new Error('Unknown error occurred');
  }
};

export const getUserByID = async (userId: string, includePassword: boolean = false) => {
  try {
    await connectDB();

    const user = await User.findById(userId).select(includePassword ? '+password' : '-password');

    if (!user) {
      return null;
    }

    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Database error');
    }
    throw new Error('Unknown error occurred');
  }
};
export const updateUser = async (userId: string, updateData: any) => {
  try {
    await connectDB();

    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    if (updateData.password) {
      const hashedPassword = await bcrypt.hash(updateData.password, 10);
      updateData.password = hashedPassword;
    } else {
      delete updateData.password; 
    }

    Object.assign(user, updateData);

    await user.save();
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Database error');
    }
    throw new Error('Unknown error occurred');
  }
};
