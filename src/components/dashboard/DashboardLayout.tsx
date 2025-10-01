
import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Calendar, User, LogOut } from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#d4af37] mb-8">Dashboard</h2>
          <nav className="space-y-4">
            <Link href="/dashboard" className="flex items-center p-2 rounded-lg hover:bg-[#1a1a1a]"><LayoutDashboard className="mr-3" /> Overview</Link>
            <Link href="/dashboard/bookings" className="flex items-center p-2 rounded-lg hover:bg-[#1a1a1a]"><Calendar className="mr-3" /> My Bookings</Link>
            <Link href="/dashboard/profile" className="flex items-center p-2 rounded-lg hover:bg-[#1a1a1a]"><User className="mr-3" /> Profile</Link>
          </nav>
        </div>
        <div>
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-[#1a1a1a]"><LogOut className="mr-3" /> Logout</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-[#1a1a1a]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
