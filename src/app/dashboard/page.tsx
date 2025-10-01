
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white mb-8">Welcome, User!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upcoming Appointment Card */}
        <div className="bg-[#0a0a0a] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#f4e4c1] mb-4">Upcoming Appointment</h3>
          <p className="text-[#b0b0b0]">You have no upcoming appointments.</p>
        </div>

        {/* My Profile Card */}
        <div className="bg-[#0a0a0a] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#f4e4c1] mb-4">My Profile</h3>
          <p className="text-[#b0b0b0]">Update your profile information.</p>
        </div>

        {/* Booking History Card */}
        <div className="bg-[#0a0a0a] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#f4e4c1] mb-4">Booking History</h3>
          <p className="text-[#b0b0b0]">View your past appointments.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
