import { Metadata } from "next";

export default function UserManagement() {

  return (
    <div>
      <h1>User Management</h1>
      <p>Welcome to the User Management!</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'User Management | Lead Management Platform',
  description: 'User Management where you manage all your leads and settings.'
};
