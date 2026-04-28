import React, { useState } from 'react';
import { mutualFunds, fundStatistics } from '../../data/dummyData';
import { Plus, Edit2, Trash2, TrendingUp, Search, Filter, BarChart3, Users } from 'lucide-react';
import '../../styles/FundManagement.css';

const FundManagement: React.FC = () => {
  const [funds, setFunds] = useState(mutualFunds);
  const [statistics] = useState(fundStatistics);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    type: 'Equity',
    category: '',
    nav: 0,
    expense_ratio: 0
  });

  // Filter funds based on search and type
  const filteredFunds = funds.filter((fund) => {
    const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || fund.type === filterType;
    return matchesSearch && matchesType;
  });

  const fundTypes = ['all', 'Equity', 'Debt', 'Hybrid'];

  // Calculate summary statistics
  const totalAUM = statistics.reduce((sum, stat) => sum + stat.aum, 0);
  const totalInvestors = statistics.reduce((sum, stat) => sum + stat.totalInvestors, 0);
  const totalReturnChange = (statistics.reduce((sum, stat) => sum + stat.navChange, 0) / statistics.length).toFixed(2);
  const avgMonthlyReturns = (statistics.reduce((sum, stat) => sum + stat.monthlyReturns, 0) / statistics.length).toFixed(2);

  const handleAddFund = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.category) {
      const newFund = {
        id: String(funds.length + 1),
        ...formData,
        return_1yr: 0,
        return_3yr: 0,
        return_5yr: 0,
        aum: 0,
        min_investment: 5000,
        description: '',
        strategy: '',
        risk_level: 'Medium'
      };
      setFunds([...funds, newFund]);
      setFormData({ name: '', type: 'Equity', category: '', nav: 0, expense_ratio: 0 });
      setShowAddForm(false);
    }
  };

  return (
    <div className="fund-management">
      <div className="management-header">
        <h1>Mutual Fund Management</h1>
        <p>Manage, analyze, and monitor mutual fund portfolio</p>
        <button
          className="btn btn-primary"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} /> Add New Fund
        </button>
      </div>

      {/* Fund Summary Statistics */}
      <div className="fund-summary-stats">
        <div className="summary-card">
          <div className="summary-icon">
            <BarChart3 size={24} />
          </div>
          <div className="summary-content">
            <h3>₹{totalAUM}Cr</h3>
            <p>Total AUM</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <Users size={24} />
          </div>
          <div className="summary-content">
            <h3>{(totalInvestors / 1000000).toFixed(1)}M</h3>
            <p>Total Investors</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <TrendingUp size={24} />
          </div>
          <div className="summary-content">
            <h3>{totalReturnChange}%</h3>
            <p>Avg NAV Change</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <BarChart3 size={24} />
          </div>
          <div className="summary-content">
            <h3>{avgMonthlyReturns}%</h3>
            <p>Avg Monthly Returns</p>
          </div>
        </div>
      </div>

      {/* Fund Statistics Table */}
      <div className="fund-stats-section">
        <h2>Fund Performance Statistics</h2>
        <div className="stats-table-container">
          <table className="table fund-stats-table">
            <thead>
              <tr>
                <th>Fund Name</th>
                <th>Status</th>
                <th>Active Investors</th>
                <th>Investor Change</th>
                <th>AUM (₹Cr)</th>
                <th>AUM Change</th>
                <th>NAV Change</th>
                <th>Monthly Returns</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((stat) => {
                const investorGrowth = stat.totalInvestors - stat.previousMonthInvestors;
                const investorGrowthPct = ((investorGrowth / stat.previousMonthInvestors) * 100).toFixed(2);
                const aumGrowth = stat.aum - stat.previousMonthAUM;
                const aumGrowthPct = ((aumGrowth / stat.previousMonthAUM) * 100).toFixed(2);
                
                return (
                  <tr key={stat.id}>
                    <td className="fund-name">{stat.fundName}</td>
                    <td>
                      <span className="status-badge active">{stat.status}</span>
                    </td>
                    <td>{(stat.totalInvestors / 1000).toFixed(0)}K</td>
                    <td className={investorGrowth >= 0 ? 'positive' : 'negative'}>
                      {investorGrowth >= 0 ? '+' : ''}{investorGrowth} ({investorGrowthPct}%)
                    </td>
                    <td>{stat.aum}Cr</td>
                    <td className={aumGrowth >= 0 ? 'positive' : 'negative'}>
                      {aumGrowth >= 0 ? '+' : ''}{aumGrowth}Cr ({aumGrowthPct}%)
                    </td>
                    <td className={stat.navChange >= 0 ? 'positive' : 'negative'}>
                      {stat.navChange >= 0 ? '+' : ''}{stat.navChange}%
                    </td>
                    <td className={stat.monthlyReturns >= 0 ? 'positive' : 'negative'}>
                      {stat.monthlyReturns >= 0 ? '+' : ''}{stat.monthlyReturns}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Fund Form */}
      {showAddForm && (
        <div className="add-fund-form">
          <h2>Add New Mutual Fund</h2>
          <form onSubmit={handleAddFund}>
            <div className="form-row">
              <div className="form-group">
                <label>Fund Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Fund Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option>Equity</option>
                  <option>Debt</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Large Cap, Small Cap"
                  required
                />
              </div>
              <div className="form-group">
                <label>NAV (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.nav}
                  onChange={(e) => setFormData({ ...formData, nav: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expense Ratio (%)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.expense_ratio}
                  onChange={(e) => setFormData({ ...formData, expense_ratio: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Add Fund</button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Fund List */}
      <div className="fund-list">
        <h2>Fund Portfolio ({filteredFunds.length})</h2>
        
        {/* Search and Filter */}
        <div className="search-filter-section">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search funds by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <Filter size={20} className="filter-icon" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              {fundTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Fund Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="fund-cards">
          {filteredFunds.map((fund) => (
            <div key={fund.id} className="fund-card">
              <div className="fund-header">
                <h3>{fund.name}</h3>
                <div className="fund-actions">
                  <button className="icon-btn edit" title="Edit">
                    <Edit2 size={18} />
                  </button>
                  <button
                    className="icon-btn delete"
                    title="Delete"
                    onClick={() => setFunds(funds.filter(f => f.id !== fund.id))}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="fund-details">
                <div className="detail-item">
                  <span className="label">Fund House:</span>
                  <span>{fund.fundHouse || 'N/A'}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Manager:</span>
                  <span>{fund.manager || 'N/A'}</span>
                </div>
              </div>

              <div className="fund-details">
                <div className="detail-item">
                  <span className="label">Type:</span>
                  <span className="badge badge-blue">{fund.type}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Category:</span>
                  <span>{fund.category}</span>
                </div>
              </div>

              <div className="fund-metrics">
                <div className="metric">
                  <span className="metric-label">NAV</span>
                  <span className="metric-value">₹{fund.nav}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Expense Ratio</span>
                  <span className="metric-value">{fund.expense_ratio}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">AUM</span>
                  <span className="metric-value">₹{fund.aum}Cr</span>
                </div>
                <div className="metric">
                  <span className="metric-label">1Y Return</span>
                  <span className="metric-value">
                    <TrendingUp size={16} style={{ display: 'inline' }} /> {fund.return_1yr}%
                  </span>
                </div>
              </div>

              <div className="fund-metrics">
                <div className="metric">
                  <span className="metric-label">Volatility</span>
                  <span className="metric-value">{fund.volatility || 'N/A'}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Sharpe Ratio</span>
                  <span className="metric-value">{fund.sharpeRatio || 'N/A'}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Sortino</span>
                  <span className="metric-value">{fund.sortino || 'N/A'}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Investors</span>
                  <span className="metric-value">{(fund.activeInvestors! / 1000).toFixed(0)}K</span>
                </div>
              </div>

              <div className="fund-footer">
                <span className={`badge ${fund.risk_level.includes('Low') ? 'badge-green' : fund.risk_level.includes('High') ? 'badge-red' : 'badge-yellow'}`}>
                  Risk: {fund.risk_level}
                </span>
                <span className="status-badge active">{fund.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundManagement;
