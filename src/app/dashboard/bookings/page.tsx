
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const BookingsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white mb-8">My Bookings</h1>
      <div className="bg-[#0a0a0a] p-6 rounded-lg">
        <p className="text-[#b0b0b0]">You have no upcoming or past appointments.</p>
      </div>
    </DashboardLayout>
  );
};

export default BookingsPage;
