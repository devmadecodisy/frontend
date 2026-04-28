import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mutualFunds } from '../../data/dummyData';
import { Search } from 'lucide-react';
import '../../styles/InvestorFunds.css';

const InvestorFunds: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterRisk, setFilterRisk] = useState('all');
  const [selectedFunds, setSelectedFunds] = useState<string[]>([]);

  const filteredFunds = mutualFunds.filter((fund) => {
    const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || fund.type === filterType;
    const matchesRisk = filterRisk === 'all' || fund.risk_level === filterRisk;
    return matchesSearch && matchesType && matchesRisk;
  });

  const types = ['all', ...new Set(mutualFunds.map(f => f.type))];
  const risks = ['all', ...new Set(mutualFunds.map(f => f.risk_level))];

  const toggleFundSelection = (id: string) => {
    setSelectedFunds(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="investor-funds">
      <div className="funds-header">
        <h1>Mutual Funds</h1>
        <p>Browse and compare mutual funds</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-container">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search funds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="filter-select">
          {types.map(type => (
            <option key={type} value={type}>
              {type === 'all' ? 'All Types' : type}
            </option>
          ))}
        </select>

        <select value={filterRisk} onChange={(e) => setFilterRisk(e.target.value)} className="filter-select">
          {risks.map(risk => (
            <option key={risk} value={risk}>
              {risk === 'all' ? 'All Risk Levels' : risk}
            </option>
          ))}
        </select>

        {selectedFunds.length > 0 && (
          <Link to="/investor/compare" state={{ fundIds: selectedFunds }} className="btn btn-primary">
            Compare ({selectedFunds.length})
          </Link>
        )}
      </div>

      {/* Fund List */}
      <div className="fund-list">
        {filteredFunds.length === 0 ? (
          <div className="empty-state">
            <p>No funds found matching your criteria</p>
          </div>
        ) : (
          <div className="fund-items">
            {filteredFunds.map((fund) => (
              <div key={fund.id} className="fund-item">
                <div className="fund-item-content">
                  <div className="fund-select">
                    <input
                      type="checkbox"
                      checked={selectedFunds.includes(fund.id)}
                      onChange={() => toggleFundSelection(fund.id)}
                    />
                  </div>

                  <div className="fund-info">
                    <h3>{fund.name}</h3>
                    <p className="fund-category">{fund.category} • {fund.type}</p>
                  </div>

                  <div className="fund-nav">
                    <span className="nav-label">NAV</span>
                    <span className="nav-value">₹{fund.nav}</span>
                  </div>

                  <div className="fund-returns">
                    <div className="return-item">
                      <span className="return-label">1Y</span>
                      <span className="return-value positive">{fund.return_1yr}%</span>
                    </div>
                    <div className="return-item">
                      <span className="return-label">3Y</span>
                      <span className="return-value positive">{fund.return_3yr}%</span>
                    </div>
                    <div className="return-item">
                      <span className="return-label">5Y</span>
                      <span className="return-value positive">{fund.return_5yr}%</span>
                    </div>
                  </div>

                  <div className="fund-risk">
                    <span className={`risk-badge risk-${fund.risk_level.toLowerCase().replace(/\s+/g, '-')}`}>
                      {fund.risk_level}
                    </span>
                  </div>

                  <div className="fund-actions">
                    <Link to={`/investor/fund/${fund.id}`} className="btn btn-primary btn-small">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="results-summary">
        <p>Showing {filteredFunds.length} of {mutualFunds.length} funds</p>
      </div>
    </div>
  );
};

export default InvestorFunds;
