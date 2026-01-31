export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  _id: string;
  user: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Budget {
  _id: string;
  user: string;
  category: string;
  limit: number;
  spent: number;
  month: string;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Goal {
  _id: string;
  user: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  category?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Investment {
  _id: string;
  user: string;
  name: string;
  type: 'stocks' | 'bonds' | 'crypto' | 'real_estate' | 'other';
  symbol?: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
  lastUpdated: Date;
  createdAt: Date;
  updatedAt: Date;
}