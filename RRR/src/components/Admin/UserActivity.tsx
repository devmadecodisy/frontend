import React, { useState } from 'react';
import { users, userActivities, userSessions } from '../../data/dummyData';
import { Search, Filter, Activity, Clock, Users, TrendingUp, Eye, MousePointer } from 'lucide-react';
import '../../styles/UserActivity.css';

const UserActivity: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roles = ['all', ...new Set(users.map(u => u.role))];

  // Activity statistics
  const totalActivities = userActivities.length;
  const todayActivities = userActivities.filter(activity =>
    activity.timestamp.startsWith('2024-04-07')
  ).length;
  const activeSessions = userSessions.filter(session => !session.logoutTime).length;
  const totalSessionTime = userSessions.reduce((sum, session) => sum + session.duration, 0);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getActionIcon = (action: string) => {
    switch (action.toLowerCase()) {
      case 'login': return '🔐';
      case 'logout': return '🚪';
      case 'investment': return '💰';
      case 'view portfolio': return '📊';
      case 'create content': return '✍️';
      case 'generate report': return '📋';
      case 'fund comparison': return '⚖️';
      case 'update profile': return '👤';
      default: return '📝';
    }
  };

  return (
    <div className="user-activity">
      <div className="activity-header">
        <h1>User Activity Dashboard</h1>
        <p>Comprehensive monitoring and analytics of user activities</p>
      </div>

      {/* Activity Stats Overview */}
      <div className="activity-overview">
        <div className="overview-card">
          <div className="overview-icon">
            <Activity size={24} />
          </div>
          <div className="overview-content">
            <h3>{totalActivities}</h3>
            <p>Total Activities</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon">
            <TrendingUp size={24} />
          </div>
          <div className="overview-content">
            <h3>{todayActivities}</h3>
            <p>Today's Activities</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon">
            <Users size={24} />
          </div>
          <div className="overview-content">
            <h3>{activeSessions}</h3>
            <p>Active Sessions</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon">
            <Clock size={24} />
          </div>
          <div className="overview-content">
            <h3>{formatDuration(totalSessionTime)}</h3>
            <p>Total Session Time</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="activity-tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <Users size={16} />
          User Overview
        </button>
        <button
          className={`tab-button ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          <Activity size={16} />
          Activity Logs
        </button>
        <button
          className={`tab-button ${activeTab === 'sessions' ? 'active' : ''}`}
          onClick={() => setActiveTab('sessions')}
        >
          <Clock size={16} />
          Sessions
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="tab-panel">
            {/* Filters */}
            <div className="filters-section">
              <div className="search-container">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="filter-container">
                <Filter size={20} className="filter-icon" />
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="filter-select"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role === 'all' ? 'All Roles' : role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* User Table */}
            <div className="activity-table-container">
              <table className="table activity-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Join Date</th>
                    <th>Investments</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className="badge badge-blue">{user.role}</span>
                      </td>
                      <td>
                        <span className={`status-badge ${user.status.toLowerCase()}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>{user.joinDate}</td>
                      <td>{user.investments || 0}</td>
                      <td>
                        <button className="action-link">View Details</button>
                        <button className="action-link delete">
                          {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="tab-panel">
            <div className="activity-logs">
              <h2>Recent Activity Logs</h2>
              <div className="activity-list">
                {userActivities.slice(0, 20).map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      {getActionIcon(activity.action)}
                    </div>
                    <div className="activity-content">
                      <div className="activity-header">
                        <span className="activity-user">{activity.userName}</span>
                        <span className="activity-action">{activity.action}</span>
                        <span className="activity-time">{activity.timestamp}</span>
                      </div>
                      <p className="activity-description">{activity.description}</p>
                      <div className="activity-meta">
                        <span><Eye size={12} /> {activity.page || 'N/A'}</span>
                        <span><MousePointer size={12} /> {activity.device}</span>
                        <span>📍 {activity.location}</span>
                        <span>IP: {activity.ipAddress}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="tab-panel">
            <div className="session-logs">
              <h2>User Sessions</h2>
              <div className="session-table-container">
                <table className="table session-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Login Time</th>
                      <th>Logout Time</th>
                      <th>Duration</th>
                      <th>Device</th>
                      <th>Pages Visited</th>
                      <th>Actions</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userSessions.map((session) => (
                      <tr key={session.id}>
                        <td>{session.userName}</td>
                        <td>{session.loginTime}</td>
                        <td>{session.logoutTime || 'Active'}</td>
                        <td>{formatDuration(session.duration)}</td>
                        <td>{session.device}</td>
                        <td>{session.pagesVisited}</td>
                        <td>{session.actionsPerformed}</td>
                        <td>
                          <span className={`status-badge ${session.logoutTime ? 'completed' : 'active'}`}>
                            {session.logoutTime ? 'Completed' : 'Active'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="activity-stats">
        <div className="stat-box">
          <span className="stat-label">Total Users</span>
          <span className="stat-count">{users.length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Filtered Users</span>
          <span className="stat-count">{filteredUsers.length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Active</span>
          <span className="stat-count active">{users.filter(u => u.status === 'Active').length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Inactive</span>
          <span className="stat-count inactive">{users.filter(u => u.status === 'Inactive').length}</span>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
