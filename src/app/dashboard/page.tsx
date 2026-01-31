'use client';

import { useSession } from 'next-auth/react';
import DashboardOverview from '@/components/dashboard/DashboardOverview';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {session?.user?.name}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's your financial overview for today
        </p>
      </div>
      
      <DashboardOverview />
    </div>
  );
}