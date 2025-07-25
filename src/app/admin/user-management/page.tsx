import { Metadata } from "next";
import UserTable from "@/components/admin-dashboard/user-management/User/Users";
export default function UserManagement() {

  return (
    <div className="user-management-container">
      <UserTable />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'User Management | Lead Management Platform',
  description: 'User Management where you manage all your leads and settings.'
};
