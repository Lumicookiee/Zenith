'use client';

import { useState } from 'react';
import { Plus, TrendingUp, Target } from 'lucide-react';

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Emergency Fund', target: 10000, current: 6500, deadline: '2025-06-01', category: 'Savings' },
    { id: 2, title: 'Vacation to Europe', target: 5000, current: 1200, deadline: '2025-08-01', category: 'Travel' },
    { id: 3, title: 'New MacBook Pro', target: 2500, current: 1800, deadline: '2025-04-01', category: 'Technology' },
    { id: 4, title: 'Home Renovation', target: 15000, current: 3000, deadline: '2025-12-01', category: 'Home' },
  ]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Savings Goals</h1>
          <p className="mt-2 text-gray-600">Track your financial goals and milestones</p>
        </div>
        <button className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const deadlineDate = new Date(goal.deadline);
          const today = new Date();
          const daysLeft = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

          return (
            <div key={goal.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                    <p className="text-sm text-gray-500">{goal.category}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {percentage.toFixed(0)}%
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Remaining</p>
                    <p className="text-lg font-bold text-gray-900">${remaining.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Days Left</p>
                    <p className={`text-lg font-bold ${daysLeft < 30 ? 'text-red-600' : 'text-gray-900'}`}>
                      {daysLeft > 0 ? `${daysLeft} days` : 'Overdue'}
                    </p>
                  </div>
                </div>

                {daysLeft > 0 && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>
                        Save ${(remaining / daysLeft).toFixed(0)} per day to reach your goal
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Add Funds
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Goals Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Active Goals</p>
            <p className="text-2xl font-bold text-gray-900">{goals.length}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Target</p>
            <p className="text-2xl font-bold text-blue-600">${goals.reduce((sum, g) => sum + g.target, 0).toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Saved</p>
            <p className="text-2xl font-bold text-green-600">${goals.reduce((sum, g) => sum + g.current, 0).toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Overall Progress</p>
            <p className="text-2xl font-bold text-gray-900">
              {((goals.reduce((sum, g) => sum + g.current, 0) / goals.reduce((sum, g) => sum + g.target, 0)) * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}