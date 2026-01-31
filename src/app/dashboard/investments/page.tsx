'use client';

import { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function InvestmentsPage() {
  const [investments, setInvestments] = useState([
    { id: 1, name: 'Apple Inc.', symbol: 'AAPL', type: 'stocks', quantity: 10, buyPrice: 150, currentPrice: 180 },
    { id: 2, name: 'Bitcoin', symbol: 'BTC', type: 'crypto', quantity: 0.5, buyPrice: 30000, currentPrice: 42000 },
    { id: 3, name: 'US Treasury Bond', symbol: 'US10Y', type: 'bonds', quantity: 1000, buyPrice: 950, currentPrice: 980 },
    { id: 4, name: 'S&P 500 ETF', symbol: 'SPY', type: 'stocks', quantity: 5, buyPrice: 420, currentPrice: 450 },
  ]);

  const totalInvestment = investments.reduce((sum, inv) => sum + (inv.buyPrice * inv.quantity), 0);
  const currentValue = investments.reduce((sum, inv) => sum + (inv.currentPrice * inv.quantity), 0);
  const totalGain = currentValue - totalInvestment;
  const totalGainPercentage = ((currentValue - totalInvestment) / totalInvestment) * 100;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Investments</h1>
          <p className="mt-2 text-gray-600">Track your investment portfolio performance</p>
        </div>
        <button className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Investment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total Investment</p>
              <p className="text-xl font-bold text-gray-900">${totalInvestment.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Current Value</p>
              <p className="text-xl font-bold text-gray-900">${currentValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            {totalGain >= 0 ? (
              <TrendingUp className="w-8 h-8 text-green-600" />
            ) : (
              <TrendingDown className="w-8 h-8 text-red-600" />
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total Gain/Loss</p>
              <p className={`text-xl font-bold ${totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalGain >= 0 ? '+' : ''}${totalGain.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            {totalGainPercentage >= 0 ? (
              <TrendingUp className="w-8 h-8 text-green-600" />
            ) : (
              <TrendingDown className="w-8 h-8 text-red-600" />
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Return %</p>
              <p className={`text-xl font-bold ${totalGainPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalGainPercentage >= 0 ? '+' : ''}{totalGainPercentage.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buy Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment) => {
                const totalValue = investment.currentPrice * investment.quantity;
                const totalCost = investment.buyPrice * investment.quantity;
                const gain = totalValue - totalCost;
                const gainPercentage = (gain / totalCost) * 100;

                return (
                  <tr key={investment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{investment.name}</div>
                        <div className="text-sm text-gray-500">{investment.symbol}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                        {investment.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {investment.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${investment.buyPrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${investment.currentPrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${totalValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        <div>{gain >= 0 ? '+' : ''}${gain.toLocaleString()}</div>
                        <div className="text-xs">{gainPercentage >= 0 ? '+' : ''}{gainPercentage.toFixed(2)}%</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Sell</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}