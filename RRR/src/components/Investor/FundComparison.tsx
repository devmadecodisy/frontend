import React from 'react';
import { useLocation } from 'react-router-dom';
import { mutualFunds } from '../../data/dummyData';
import '../../styles/FundComparison.css';

const FundComparison: React.FC = () => {
  const location = useLocation();
  const state = location.state as { fundIds: string[] } | null;
  const fundIds = state?.fundIds || [];

  const selectedFunds = mutualFunds.filter(f => fundIds.includes(f.id));

  if (selectedFunds.length === 0) {
    return (
      <div className="fund-comparison">
        <div className="empty-state">
          <p>No funds selected for comparison</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fund-comparison">
      <div className="comparison-header">
        <h1>Fund Comparison</h1>
        <p>Compare {selectedFunds.length} selected mutual funds</p>
      </div>

      <div className="comparison-table">
        <table className="table">
          <thead>
            <tr>
              <th>Metric</th>
              {selectedFunds.map(fund => (
                <th key={fund.id}>{fund.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="metric-name">Type</td>
              {selectedFunds.map(fund => (
                <td key={fund.id}>{fund.type}</td>
              ))}
            </tr>
            <tr>
              <td className="metric-name">Category</td>
              {selectedFunds.map(fund => (
                <td key={fund.id}>{fund.category}</td>
              ))}
            </tr>
            <tr>
              <td className="metric-name">NAV (₹)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value">{fund.nav}</td>
              ))}
            </tr>
            <tr>
              <td className="metric-name">Expense Ratio (%)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value">{fund.expense_ratio}%</td>
              ))}
            </tr>
            <tr>
              <td className="metric-name">Risk Level</td>
              {selectedFunds.map(fund => (
                <td key={fund.id}>{fund.risk_level}</td>
              ))}
            </tr>
            <tr className="highlight-row">
              <td className="metric-name">1 Year Return (%)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value positive">{fund.return_1yr}%</td>
              ))}
            </tr>
            <tr className="highlight-row">
              <td className="metric-name">3 Year Return (%)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value positive">{fund.return_3yr}%</td>
              ))}
            </tr>
            <tr className="highlight-row">
              <td className="metric-name">5 Year Return (%)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value positive">{fund.return_5yr}%</td>
              ))}
            </tr>
            <tr>
              <td className="metric-name">AUM (₹Cr)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value">{fund.aum}</td>
              ))}
            </tr>
            <tr>
              <td className="metric-name">Min Investment (₹)</td>
              {selectedFunds.map(fund => (
                <td key={fund.id} className="metric-value">{fund.min_investment.toLocaleString()}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="comparison-insights">
        <h2>Comparison Summary</h2>
        <div className="insights-grid">
          <div className="insight-item">
            <span className="insight-label">Best NAV</span>
            <span className="insight-value">
              {selectedFunds.reduce((min, f) => f.nav < min.nav ? f : min).name}
            </span>
          </div>
          <div className="insight-item">
            <span className="insight-label">Lowest Expense Ratio</span>
            <span className="insight-value">
              {selectedFunds.reduce((min, f) => f.expense_ratio < min.expense_ratio ? f : min).name}
            </span>
          </div>
          <div className="insight-item">
            <span className="insight-label">Best 1Y Return</span>
            <span className="insight-value">
              {selectedFunds.reduce((max, f) => f.return_1yr > max.return_1yr ? f : max).name}
            </span>
          </div>
          <div className="insight-item">
            <span className="insight-label">Highest AUM</span>
            <span className="insight-value">
              {selectedFunds.reduce((max, f) => f.aum > max.aum ? f : max).name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundComparison;
