import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mutualFunds } from '../../data/dummyData';
import { TrendingUp, AlertCircle, Target, DollarSign, CreditCard } from 'lucide-react';
import PaymentQR from '../Common/PaymentQR';
import '../../styles/FundDetails.css';

const FundDetails: React.FC = () => {
  const [showPaymentQR, setShowPaymentQR] = useState(false);
  const { id } = useParams<{ id: string }>();
  const fund = mutualFunds.find(f => f.id === id);

  if (!fund) {
    return <div className="fund-details"><p>Fund not found</p></div>;
  }

  const getRiskColor = (risk: string) => {
    if (risk.includes('Low')) return 'green';
    if (risk.includes('High')) return 'red';
    return 'yellow';
  };

  return (
    <div className="fund-details">
      <div className="details-header">
        <div className="header-content">
          <h1>{fund.name}</h1>
          <div className="breadcrumb">
            <span>{fund.type}</span> • <span>{fund.category}</span>
          </div>
        </div>
        <div className="header-nav">
          <span className="nav-label">Current NAV</span>
          <span className="nav-value">₹{fund.nav}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Expense Ratio</span>
            <DollarSign size={20} className="metric-icon" />
          </div>
          <span className="metric-value">{fund.expense_ratio}%</span>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">AUM</span>
            <TrendingUp size={20} className="metric-icon" />
          </div>
          <span className="metric-value">₹{fund.aum}Cr</span>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Risk Level</span>
            <AlertCircle size={20} className="metric-icon" />
          </div>
          <span className={`metric-value risk-${getRiskColor(fund.risk_level)}`}>
            {fund.risk_level}
          </span>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Min Investment</span>
            <Target size={20} className="metric-icon" />
          </div>
          <span className="metric-value">₹{fund.min_investment}</span>
        </div>
      </div>

      <div className="details-grid">
        {/* Returns */}
        <div className="detail-section">
          <h2>Historical Returns</h2>
          <div className="returns-chart">
            <div className="return-row">
              <span className="return-period">1 Year</span>
              <div className="return-bar">
                <div className="return-fill" style={{ width: `${Math.min(fund.return_1yr * 3, 100)}%` }}>
                  {fund.return_1yr}%
                </div>
              </div>
            </div>
            <div className="return-row">
              <span className="return-period">3 Year</span>
              <div className="return-bar">
                <div className="return-fill" style={{ width: `${Math.min(fund.return_3yr * 3, 100)}%` }}>
                  {fund.return_3yr}%
                </div>
              </div>
            </div>
            <div className="return-row">
              <span className="return-period">5 Year</span>
              <div className="return-bar">
                <div className="return-fill" style={{ width: `${Math.min(fund.return_5yr * 3, 100)}%` }}>
                  {fund.return_5yr}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="detail-section">
          <h2>Fund Overview</h2>
          <p>{fund.description || 'Fund details coming soon'}</p>
        </div>

        {/* Strategy */}
        <div className="detail-section">
          <h2>Investment Strategy</h2>
          <p>{fund.strategy || 'Strategy details coming soon'}</p>
        </div>

        {/* Action */}
        <div className="detail-section action-section">
          <button className="btn btn-primary btn-large" onClick={() => setShowPaymentQR(true)}>
            <CreditCard size={20} /> Invest via QR Code
          </button>
          <p className="disclaimer">*Past performance is not an indicator of future results</p>
        </div>

        {/* Payment QR Modal */}
        <PaymentQR 
          isOpen={showPaymentQR} 
          onClose={() => setShowPaymentQR(false)}
          fundName={fund.name}
          amount={5000}
        />
      </div>
    </div>
  );
};

export default FundDetails;
