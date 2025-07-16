import { Metadata } from "next";

export default function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to the User dashboard!</p>
    </div>
  );
}
export const metadata: Metadata = {
  title: 'User Dashboard | Lead Management Platform',
  description: 'User Dashboard where you manage all your leads and settings.'
};
