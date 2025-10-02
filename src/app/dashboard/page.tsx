
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold dark:text-white text-black mb-8">Welcome, User!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upcoming Appointment Card */}
        <div className="dark:bg-[#0a0a0a] bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold dark:text-[#f4e4c1] text-gray-800 mb-4">Upcoming Appointment</h3>
          <p className="dark:text-[#b0b0b0] text-gray-500">You have no upcoming appointments.</p>
        </div>

        {/* My Profile Card */}
        <div className="dark:bg-[#0a0a0a] bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold dark:text-[#f4e4c1] text-gray-800 mb-4">My Profile</h3>
          <p className="dark:text-[#b0b0b0] text-gray-500">Update your profile information.</p>
        </div>

        {/* Booking History Card */}
        <div className="dark:bg-[#0a0a0a] bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold dark:text-[#f4e4c1] text-gray-800 mb-4">Booking History</h3>
          <p className="dark:text-[#b0b0b0] text-gray-500">View your past appointments.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
