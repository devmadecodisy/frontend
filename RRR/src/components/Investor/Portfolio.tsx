import React, { useState } from 'react';
import { portfolioItems, performanceData, investmentTrends } from '../../data/dummyData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, AreaChart, Area, BarChart, Bar, Legend } from 'recharts';
import PaymentQR from '../Common/PaymentQR';
import { CreditCard } from 'lucide-react';
import '../../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  const [showPaymentQR, setShowPaymentQR] = useState(false);
  const totalInvested = portfolioItems.reduce((sum, item) => sum + item.investmentValue, 0);
  const totalCurrent = portfolioItems.reduce((sum, item) => sum + item.currentValue, 0);
  const totalReturns = totalCurrent - totalInvested;
  const returnPercentage = (totalReturns / totalInvested) * 100;

  const pieData = portfolioItems.map(item => ({
    name: item.fundName,
    value: item.currentValue
  }));

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const portfolioTrend = [
    { month: 'Jan', value: 480000 },
    { month: 'Feb', value: 520000 },
    { month: 'Mar', value: 550000 },
    { month: 'Apr', value: 590000 },
    { month: 'May', value: 620000 },
    { month: 'Jun', value: 680000 },
    { month: 'Jul', value: 720000 }
  ];

  // New chart data
  const returnsData = portfolioItems.map(item => ({
    name: item.fundName.length > 15 ? item.fundName.substring(0, 15) + '...' : item.fundName,
    returns: item.returns,
    investment: item.investmentValue,
    current: item.currentValue
  }));

  const assetAllocationData = [
    { name: 'Equity Funds', value: 55, color: '#2563eb' },
    { name: 'Debt Funds', value: 30, color: '#10b981' },
    { name: 'Hybrid Funds', value: 15, color: '#f59e0b' }
  ];

  const monthlyPerformanceData = performanceData.slice(-6); // Last 6 months

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Your Portfolio</h1>
        <p>Track your investments and performance</p>
      </div>

      {/* Summary Cards */}
      <div className="portfolio-summary">
        <div className="summary-card">
          <span className="summary-label">Total Invested</span>
          <span className="summary-value">₹{totalInvested.toLocaleString()}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Current Value</span>
          <span className="summary-value">₹{totalCurrent.toLocaleString()}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Returns</span>
          <span className={`summary-value ${totalReturns >= 0 ? 'positive' : 'negative'}`}>
            ₹{totalReturns.toLocaleString()} ({returnPercentage.toFixed(2)}%)
          </span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Portfolio Trend */}
        <div className="chart-card">
          <h2>Portfolio Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Value']} />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Allocation */}
        <div className="chart-card">
          <h2>Fund Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name.substring(0, 10)}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Value']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance vs Benchmark */}
        <div className="chart-card">
          <h2>Performance vs Benchmark</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="return" stroke="#2563eb" strokeWidth={2} name="Portfolio" />
              <Line type="monotone" dataKey="benchmark" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="Benchmark" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Individual Fund Returns */}
        <div className="chart-card">
          <h2>Individual Fund Returns</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={returnsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip formatter={(value) => [`${Number(value).toFixed(2)}%`, 'Returns']} />
              <Bar dataKey="returns" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Allocation Trend */}
        <div className="chart-card">
          <h2>Asset Allocation Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={investmentTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="equity" stackId="1" stroke="#2563eb" fill="#2563eb" name="Equity" />
              <Area type="monotone" dataKey="debt" stackId="1" stroke="#10b981" fill="#10b981" name="Debt" />
              <Area type="monotone" dataKey="hybrid" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Hybrid" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Class Distribution */}
        <div className="chart-card">
          <h2>Current Asset Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={assetAllocationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {assetAllocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="holdings-section">
        <h2>Your Holdings</h2>
        <table className="table holdings-table">
          <thead>
            <tr>
              <th>Fund Name</th>
              <th>Units</th>
              <th>Invested Value</th>
              <th>Current Value</th>
              <th>Gains/Loss</th>
              <th>Return %</th>
            </tr>
          </thead>
          <tbody>
            {portfolioItems.map((item) => {
              const gains = item.currentValue - item.investmentValue;
              const gainPercentage = (gains / item.investmentValue) * 100;

              return (
                <tr key={item.id}>
                  <td>{item.fundName}</td>
                  <td>{item.units}</td>
                  <td>₹{item.investmentValue.toLocaleString()}</td>
                  <td>₹{item.currentValue.toLocaleString()}</td>
                  <td className={gains >= 0 ? 'positive' : 'negative'}>
                    ₹{gains.toLocaleString()}
                  </td>
                  <td className={gains >= 0 ? 'positive' : 'negative'}>
                    {gainPercentage.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
            <tr className="table-total">
              <td><strong>Total</strong></td>
              <td>{portfolioItems.reduce((sum, i) => sum + i.units, 0)}</td>
              <td><strong>₹{totalInvested.toLocaleString()}</strong></td>
              <td><strong>₹{totalCurrent.toLocaleString()}</strong></td>
              <td className={totalReturns >= 0 ? 'positive' : 'negative'}>
                <strong>₹{totalReturns.toLocaleString()}</strong>
              </td>
              <td className={totalReturns >= 0 ? 'positive' : 'negative'}>
                <strong>{returnPercentage.toFixed(2)}%</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment Section */}
      <div className="payment-section">
        <h2>Make an Investment</h2>
        <button className="btn-payment" onClick={() => setShowPaymentQR(true)}>
          <CreditCard size={20} /> Pay via QR Code
        </button>
      </div>

      {/* Payment QR Modal */}
      <PaymentQR 
        isOpen={showPaymentQR} 
        onClose={() => setShowPaymentQR(false)}
        fundName="Mutual Fund Investment"
        amount={10000}
      />
    </div>
  );
};

export default Portfolio;
