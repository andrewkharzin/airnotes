// pages/dashboard.tsx
import React from 'react';
import RootLayout from '@/app/layout';
// import DashboardNavbar from '@/app/DashboardNavbar'; // Import your special Navbar component for dashboard

const DashboardPage: React.FC = () => {
  return (
    <>
    <RootLayout isDashboardPage={true}> {/* Pass isDashboardPage prop */}
      <div>
        {/* Dashboard page content */}
        <h1>Welcome to User Dashboard!</h1>
      </div>
    </RootLayout>
    </>
  );
};

export default DashboardPage;
