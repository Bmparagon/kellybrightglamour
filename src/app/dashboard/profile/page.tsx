
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white mb-8">My Profile</h1>
      <div className="bg-[#0a0a0a] p-6 rounded-lg">
        <p className="text-[#b0b0b0]">Edit your profile information here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
