import { Metadata } from "next";
import AddNewUser from "@/components/admin-dashboard/user-management/User/AddNewUser";
export default function addUser() {

  return (
    <div className="user-management-container">
      <AddNewUser />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'User Management | Lead Management Platform',
  description: 'User Management where you manage all your leads and settings.'
};
