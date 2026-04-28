import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, DollarSign, FileText } from 'lucide-react';
import { dashboardStats, users } from '../../data/dummyData';
import '../../styles/AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total AUM',
      value: `₹${dashboardStats.totalAUM}Cr`,
      icon: <DollarSign size={32} />,
      color: 'blue'
    },
    {
      label: 'Total Funds',
      value: dashboardStats.totalFunds,
      icon: <TrendingUp size={32} />,
      color: 'green'
    },
    {
      label: 'Total Investors',
      value: `${dashboardStats.totalInvestors}K+`,
      icon: <Users size={32} />,
      color: 'purple'
    },
    {
      label: 'Expert Advisors',
      value: dashboardStats.totalAdvisors,
      icon: <FileText size={32} />,
      color: 'orange'
    }
  ];

  const activeUsers = users.filter(u => u.status === 'Active');
  const inactiveUsers = users.filter(u => u.status === 'Inactive');

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Platform Overview & Statistics</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* User Summary */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>User Summary</h2>
          <div className="user-summary">
            <div className="summary-item">
              <span className="summary-label">Active Users</span>
              <span className="summary-value active">{activeUsers.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Inactive Users</span>
              <span className="summary-value inactive">{inactiveUsers.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Users</span>
              <span className="summary-value">{users.length}</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <Link to="/admin/user-activity" className="action-btn">View User Activity</Link>
            <button className="action-btn">Manage Funds</button>
            <button className="action-btn">System Settings</button>
            <button className="action-btn">Generate Report</button>
          </div>
        </div>
      </div>

      {/* Recent Users */}
      <div className="dashboard-card">
        <h2>Recent Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 5).map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><span className="badge badge-blue">{user.role}</span></td>
                <td>
                  <span className={`badge ${user.status === 'Active' ? 'badge-green' : 'badge-red'}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
