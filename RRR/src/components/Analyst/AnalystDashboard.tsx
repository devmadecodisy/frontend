import React from 'react';
import { performanceData, investmentTrends } from '../../data/dummyData';
import {
  LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Download, TrendingUp } from 'lucide-react';
import '../../styles/AnalystDashboard.css';

const AnalystDashboard: React.FC = () => {
  return (
    <div className="analyst-dashboard">
      <div className="dashboard-header">
        <h1>Data Analytics Dashboard</h1>
        <p>Fund performance trends and investment analysis</p>
        <button className="btn btn-primary">
          <Download size={20} /> Export Report
        </button>
      </div>

      {/* Key Metrics */}
      <div className="metrics-section">
        <div className="metric-item">
          <span className="metric-label">Avg Fund Performance</span>
          <span className="metric-value">16.8%</span>
          <span className="metric-trend positive">
            <TrendingUp size={16} /> +2.3% vs last month
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Total AUM Growth</span>
          <span className="metric-value">+15%</span>
          <span className="metric-trend positive">
            <TrendingUp size={16} /> YoY growth
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Investor Count</span>
          <span className="metric-value">150K+</span>
          <span className="metric-trend positive">
            <TrendingUp size={16} /> Active users
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Fund Count</span>
          <span className="metric-value">8</span>
          <span className="metric-trend">Managed funds</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Performance vs Benchmark */}
        <div className="chart-card">
          <h2>Fund Performance vs Benchmark</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="return" stroke="#2563eb" name="Fund Return" strokeWidth={2} />
              <Line type="monotone" dataKey="benchmark" stroke="#10b981" name="Benchmark" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Investment Trends */}
        <div className="chart-card">
          <h2>Investment Type Distribution</h2>
          <ResponsiveContainer width="100%" height={350}>
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
      </div>

      {/* Reports Table */}
      <div className="reports-section">
        <h2>Performance Reports</h2>
        <table className="table reports-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Fund Return %</th>
              <th>Benchmark %</th>
              <th>Outperformance %</th>
              <th>AUM Growth</th>
              <th>New Investors</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((data, index) => {
              const outperformance = data.return - data.benchmark;
              return (
                <tr key={index}>
                  <td>{data.month}</td>
                  <td className="positive">{data.return}%</td>
                  <td>{data.benchmark}%</td>
                  <td className={outperformance >= 0 ? 'positive' : 'negative'}>
                    {outperformance > 0 ? '+' : ''}{outperformance.toFixed(2)}%
                  </td>
                  <td>{((index + 1) * 500)}Cr</td>
                  <td>{((index + 1) * 2500).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Key Insights */}
      <div className="insights-section">
        <h2>Key Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <h3>📈 Performance Trend</h3>
            <p>Fund performance shows consistent growth with average returns of 16.8% YoY, outperforming benchmark by 1.5%.</p>
          </div>
          <div className="insight-card">
            <h3>💼 Asset Growth</h3>
            <p>AUM has grown 15% YoY reaching ₹92,100Cr with steady investor inflows and strong market performance.</p>
          </div>
          <div className="insight-card">
            <h3>👥 Investor Base</h3>
            <p>Active investor count reached 150K+ with consistent new user acquisition and retention rates above 85%.</p>
          </div>
          <div className="insight-card">
            <h3>📊 Portfolio Mix</h3>
            <p>Equity allocations remain dominant at 60% with balanced debt (20%) and hybrid (20%) fund allocations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystDashboard;
