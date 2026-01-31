'use client';

import { useState } from 'react';
import { Plus, AlertTriangle, CheckCircle } from 'lucide-react';

export default function BudgetPage() {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food', limit: 500, spent: 350, month: 'January', year: 2025 },
    { id: 2, category: 'Housing', limit: 1500, spent: 1200, month: 'January', year: 2025 },
    { id: 3, category: 'Transportation', limit: 300, spent: 280, month: 'January', year: 2025 },
    { id: 4, category: 'Entertainment', limit: 200, spent: 180, month: 'January', year: 2025 },
    { id: 5, category: 'Utilities', limit: 250, spent: 200, month: 'January', year: 2025 },
  ]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Budget</h1>
          <p className="mt-2 text-gray-600">Track your monthly spending limits</p>
        </div>
        <button className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Budget
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const remaining = budget.limit - budget.spent;
          
          let statusColor = 'bg-green-500';
          let statusIcon = <CheckCircle className="w-4 h-4" />;
          
          if (percentage >= 90) {
            statusColor = 'bg-red-500';
            statusIcon = <AlertTriangle className="w-4 h-4" />;
          } else if (percentage >= 70) {
            statusColor = 'bg-yellow-500';
            statusIcon = <AlertTriangle className="w-4 h-4" />;
          }

          return (
            <div key={budget.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{budget.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${percentage >= 90 ? 'bg-red-100 text-red-800' : percentage >= 70 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                  {percentage.toFixed(0)}%
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Spent</span>
                  <span className="font-medium">${budget.spent.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${statusColor} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Limit</span>
                  <span className="font-medium">${budget.limit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Remaining</span>
                  <span className={`font-medium ${remaining < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    ${remaining.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Budget</p>
            <p className="text-2xl font-bold text-gray-900">${budgets.reduce((sum, b) => sum + b.limit, 0).toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="text-2xl font-bold text-blue-600">${budgets.reduce((sum, b) => sum + b.spent, 0).toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Remaining</p>
            <p className="text-2xl font-bold text-green-600">${budgets.reduce((sum, b) => sum + (b.limit - b.spent), 0).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}