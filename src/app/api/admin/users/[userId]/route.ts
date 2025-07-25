// app/admin/users/[userId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { checkAuth } from '@/middleware/check-auth';
import { authorizedRoles } from '@/middleware/authorized-roles';
import {
  getUserByID,
  updateUser,
//   deleteUser
} from '@/services/user-service';
import { validateUserUpdateSchema } from '@/request-schemas/user-schema';

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const authResponse = await checkAuth(req);
    if (authResponse instanceof NextResponse) return authResponse;

    const authorizedResponse = authorizedRoles(['Admin'])(req);
    if (authorizedResponse instanceof NextResponse) return authorizedResponse;

    const user = await getUserByID(params.userId);
    console.log(user);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const body = await req.json();
    console.log('body',body);
    console.log('userId',params.userId);
    const validationResponse = validateUserUpdateSchema(body);
    if (validationResponse instanceof NextResponse) return validationResponse;

    const authResponse = await checkAuth(req);
    if (authResponse instanceof NextResponse) return authResponse;

    const authorizedResponse = authorizedRoles(['Admin'])(req);
    if (authorizedResponse instanceof NextResponse) return authorizedResponse;

    const updated = await updateUser(params.userId, body);
    return NextResponse.json({ message: 'User updated', user: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}

// export async function DELETE(req: NextRequest, { params }: { params: { userId: string } }) {
//   try {
//     const authResponse = await checkAuth(req);
//     if (authResponse instanceof NextResponse) return authResponse;

//     const authorizedResponse = authorizedRoles(['Admin'])(req);
//     if (authorizedResponse instanceof NextResponse) return authorizedResponse;

//     const deleted = await deleteUser(params.userId);
//     return NextResponse.json({ message: 'User deleted', user: deleted }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error', details: error instanceof Error ? error.message : error }, { status: 500 });
//   }
// }
