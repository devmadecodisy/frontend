import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BarChart3, Zap } from 'lucide-react';
import '../../styles/Home.css';
import FundPerformanceChart from './FundPerformanceChart';
import { dashboardStats } from '../../data/dummyData';

interface HomeProps {
  userRole: string | null;
}

const Home: React.FC<HomeProps> = ({ userRole }) => {
const stats = dashboardStats;

const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Fund Analysis',
      description: 'Comprehensive analysis of mutual funds with risk and return metrics'
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Recommendations',
      description: 'Get personalized recommendations from financial advisors'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Performance Tracking',
      description: 'Track fund performance and investment trends real-time'
    },
    {
      icon: <Zap size={32} />,
      title: 'Portfolio Management',
      description: 'Manage and optimize your investment portfolio effectively'
    }
  ];

  const analysisFunds = [
    {
      name: 'Axis Bluechip Fund',
      category: 'Large Cap',
      risk: 'Low-Medium',
      return1yr: '12.5%',
      minInvestment: '₹5,000'
    },
    {
      name: 'SBI Small Cap Fund',
      category: 'Small Cap',
      risk: 'High',
      return1yr: '24.3%',
      minInvestment: '₹5,000'
    },
    {
      name: 'ICICI Prudential Balanced Advantage Fund',
      category: 'Balanced',
      risk: 'Medium',
      return1yr: '14.2%',
      minInvestment: '₹5,000'
    },
    {
      name: 'Franklin India Flexi Cap Fund',
      category: 'Flexi Cap',
      risk: 'Medium',
      return1yr: '17.5%',
      minInvestment: '₹5,000'
    }
  ];

  const expertRecommendations = [
    {
      fundName: 'Axis Bluechip Fund',
      advisor: 'Rajesh Kumar',
      recommendation: 'Strong Buy',
      reason: 'Excellent long-term performance with stable returns',
      targetPrice: '₹450',
      timeHorizon: '3-5 years'
    },
    {
      fundName: 'SBI Small Cap Fund',
      advisor: 'Priya Sharma',
      recommendation: 'Buy',
      reason: 'High growth potential in emerging sectors',
      targetPrice: '₹280',
      timeHorizon: '5+ years'
    },
    {
      fundName: 'ICICI Prudential Balanced Advantage Fund',
      advisor: 'Amit Singh',
      recommendation: 'Hold',
      reason: 'Balanced approach suitable for moderate risk investors',
      targetPrice: '₹220',
      timeHorizon: '2-3 years'
    },
    {
      fundName: 'Franklin India Flexi Cap Fund',
      advisor: 'Sarah Johnson',
      recommendation: 'Strong Buy',
      reason: 'Flexible strategy with consistent outperformance',
      targetPrice: '₹320',
      timeHorizon: '3-5 years'
    }
  ];

  // Expert recommendations chart data
  const recommendationDistribution = [
    { name: 'Strong Buy', value: 2, color: '#27ae60' },
    { name: 'Buy', value: 1, color: '#2ecc71' },
    { name: 'Hold', value: 1, color: '#f39c12' }
  ];

  const targetPricesData = [
    { name: 'Axis Bluechip', value: 450 },
    { name: 'SBI Small Cap', value: 280 },
    { name: 'ICICI Balanced', value: 220 },
    { name: 'Franklin Flexi', value: 320 }
  ];

  const performanceTracking = [
    {
      fundName: 'Axis Bluechip Fund',
      currentValue: '₹3456.78',
      change: '+2.34%',
      changeType: 'positive',
      nav: '₹3456.78',
      aum: '₹15,000 Cr',
      expenseRatio: '0.54%'
    },
    {
      fundName: 'SBI Small Cap Fund',
      currentValue: '₹2345.90',
      change: '+5.67%',
      changeType: 'positive',
      nav: '₹2345.90',
      aum: '₹8,500 Cr',
      expenseRatio: '0.95%'
    },
    {
      fundName: 'ICICI Prudential Balanced Advantage Fund',
      currentValue: '₹1856.45',
      change: '-1.23%',
      changeType: 'negative',
      nav: '₹1856.45',
      aum: '₹12,000 Cr',
      expenseRatio: '0.62%'
    },
    {
      fundName: 'Franklin India Flexi Cap Fund',
      currentValue: '₹2723.45',
      change: '+3.89%',
      changeType: 'positive',
      nav: '₹2723.45',
      aum: '₹10,200 Cr',
      expenseRatio: '0.68%'
    },
    {
      fundName: 'HDFC Mid Cap Opportunities Fund',
      currentValue: '₹2567.89',
      change: '+4.12%',
      changeType: 'positive',
      nav: '₹2567.89',
      aum: '₹9,800 Cr',
      expenseRatio: '0.78%'
    },
    {
      fundName: 'UTI Liquid Fund',
      currentValue: '₹2156.34',
      change: '+0.15%',
      changeType: 'positive',
      nav: '₹2156.34',
      aum: '₹18,000 Cr',
      expenseRatio: '0.18%'
    }
  ];

  // Chart data
  const fundReturnsData = [
    { name: 'Axis Bluechip', value: 12.5 },
    { name: 'SBI Small Cap', value: 24.3 },
    { name: 'ICICI Balanced', value: 14.2 },
    { name: 'Franklin Flexi', value: 17.5 },
    { name: 'HDFC Mid Cap', value: 18.9 },
    { name: 'UTI Liquid', value: 5.2 }
  ];

  const fundAUMData = [
    { name: 'UTI Liquid', value: 18000 },
    { name: 'Axis Bluechip', value: 15000 },
    { name: 'ICICI Balanced', value: 12000 },
    { name: 'Franklin Flexi', value: 10200 },
    { name: 'HDFC Mid Cap', value: 9800 },
    { name: 'SBI Small Cap', value: 8500 }
  ];

  const riskDistributionData = [
    { name: 'Low-Medium', value: 40 },
    { name: 'Medium', value: 30 },
    { name: 'Medium-High', value: 20 },
    { name: 'High', value: 10 }
  ];

  // Performance Tracking Chart Data
  const navComparisonData = [
    { name: 'Axis Bluechip', value: 3456.78, fullName: 'Axis Bluechip Fund' },
    { name: 'SBI Small Cap', value: 2345.90, fullName: 'SBI Small Cap Fund' },
    { name: 'ICICI Balanced', value: 1856.45, fullName: 'ICICI Prudential Balanced Advantage Fund' },
    { name: 'Franklin Flexi', value: 2723.45, fullName: 'Franklin India Flexi Cap Fund' },
    { name: 'HDFC Mid Cap', value: 2567.89, fullName: 'HDFC Mid Cap Opportunities Fund' },
    { name: 'UTI Liquid', value: 2156.34, fullName: 'UTI Liquid Fund' }
  ];

  const performanceChangeData = [
    { name: 'Axis Bluechip', change: 2.34, type: 'positive' },
    { name: 'SBI Small Cap', change: 5.67, type: 'positive' },
    { name: 'ICICI Balanced', change: -1.23, type: 'negative' },
    { name: 'Franklin Flexi', change: 3.89, type: 'positive' },
    { name: 'HDFC Mid Cap', change: 4.12, type: 'positive' },
    { name: 'UTI Liquid', change: 0.15, type: 'positive' }
  ];

  const aumDistributionData = [
    { name: 'UTI Liquid', value: 18000, percentage: 26.5 },
    { name: 'Axis Bluechip', value: 15000, percentage: 22.1 },
    { name: 'ICICI Balanced', value: 12000, percentage: 17.6 },
    { name: 'Franklin Flexi', value: 10200, percentage: 15.0 },
    { name: 'HDFC Mid Cap', value: 9800, percentage: 14.4 },
    { name: 'SBI Small Cap', value: 8500, percentage: 12.5 }
  ];

  const expenseRatioData = [
    { name: 'UTI Liquid', value: 0.18 },
    { name: 'Axis Bluechip', value: 0.54 },
    { name: 'ICICI Balanced', value: 0.62 },
    { name: 'Franklin Flexi', value: 0.68 },
    { name: 'HDFC Mid Cap', value: 0.78 },
    { name: 'SBI Small Cap', value: 0.95 }
  ];


  const getRoleGreeting = () => {
    switch (userRole) {
      case 'admin':
        return 'Welcome Admin! Manage platform and funds';
      case 'investor':
        return 'Welcome Investor! Explore and invest in mutual funds';
      case 'advisor':
        return 'Welcome Advisor! Create content and recommendations';
      case 'analyst':
        return 'Welcome Analyst! Analyze trends and generate reports';
      default:
        return 'Welcome to the Mutual Funds Platform';
    }
  };

  const getActionButtons = () => {
    switch (userRole) {
      case 'admin':
        return [
          { path: '/admin/dashboard', label: 'Go to Dashboard' },
          { path: '/admin/funds', label: 'Manage Funds' }
        ];
      case 'investor':
        return [
          { path: '/investor/funds', label: 'Browse Funds' },
          { path: '/investor/portfolio', label: 'View Portfolio' }
        ];
      case 'advisor':
        return [
          { path: '/advisor/dashboard', label: 'Go to Dashboard' },
          { path: '/advisor/content', label: 'Create Content' }
        ];
      case 'analyst':
        return [
          { path: '/analyst/dashboard', label: 'Go to Dashboard' },
          { path: '/analyst/reports', label: 'View Reports' }
        ];
      default:
        return [{ path: '/login', label: 'Login to Continue' }];
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Investment Perception & Selection Behavior Analysis Platform</h1>
          <p>
            A comprehensive platform to analyze mutual fund investments, track performance,
            and make informed investment decisions.
          </p>
          <div className="hero-buttons">
            {getActionButtons().map((btn) => (
              <Link key={btn.path} to={btn.path} className="btn btn-primary">
                {btn.label}
              </Link>
            ))}
          </div>
          <div className="hero-greeting">
            <p className="greeting-text">{getRoleGreeting()}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Analysis Data Section */}
      <section className="analysis">
        <div className="container">
          <h2>Fund Analysis</h2>
          <p>Latest fund insights with category, risk and 1-year returns to help you choose wisely.</p>
          <div className="analysis-grid">
            {analysisFunds.map((fund, index) => (
              <div key={index} className="analysis-card">
                <h3>{fund.name}</h3>
                <p><strong>Category:</strong> {fund.category}</p>
                <p><strong>Risk:</strong> {fund.risk}</p>
                <p><strong>1Y Return:</strong> {fund.return1yr}</p>
                <p><strong>Min Investment:</strong> {fund.minInvestment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Recommendations Section */}
      <section className="recommendations">
        <div className="container">
          <h2>Expert Recommendations</h2>
          <p>Get personalized investment advice from our certified financial advisors.</p>

          {/* Expert Recommendations Charts */}
          <div className="recommendations-charts">
            <div className="chart-card">
              <FundPerformanceChart
                data={recommendationDistribution}
                type="pie"
                title="Recommendation Distribution"
              />
            </div>
            <div className="chart-card">
              <FundPerformanceChart
                data={targetPricesData}
                type="bar"
                title="Target Prices (₹)"
              />
            </div>
          </div>

          <div className="recommendations-grid">
            {expertRecommendations.map((rec, index) => (
              <div key={index} className="recommendation-card">
                <h3>{rec.fundName}</h3>
                <div className="advisor-info">
                  <p><strong>Advisor:</strong> {rec.advisor}</p>
                  <p><strong>Recommendation:</strong> <span className={`rec-${rec.recommendation.toLowerCase().replace(' ', '-')}`}>{rec.recommendation}</span></p>
                </div>
                <p><strong>Reason:</strong> {rec.reason}</p>
                <p><strong>Target Price:</strong> {rec.targetPrice}</p>
                <p><strong>Time Horizon:</strong> {rec.timeHorizon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Tracking Section */}
      <section className="performance">
        <div className="container">
          <h2>Performance Tracking</h2>
          <p>Real-time fund performance with NAV, AUM, and expense ratios for informed decision making.</p>

          {/* Performance Tracking Charts */}
          <div className="performance-charts">
            <div className="chart-card">
              <FundPerformanceChart
                data={navComparisonData}
                type="horizontalBar"
                title="NAV Comparison (₹)"
              />
            </div>
            <div className="chart-card">
              <FundPerformanceChart
                data={performanceChangeData}
                type="area"
                title="Performance Changes (%)"
              />
            </div>
            <div className="chart-card">
              <FundPerformanceChart
                data={aumDistributionData}
                type="pie"
                title="AUM Distribution"
              />
            </div>
            <div className="chart-card">
              <FundPerformanceChart
                data={expenseRatioData}
                type="radar"
                title="Expense Ratios Comparison"
              />
            </div>
          </div>

          <div className="performance-grid">
            {performanceTracking.map((fund, index) => (
              <div key={index} className="performance-card">
                <h3>{fund.fundName}</h3>
                <div className="performance-metrics">
                  <div className="metric">
                    <span className="metric-label">Current Value</span>
                    <span className="metric-value">{fund.currentValue}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Change</span>
                    <span className={`metric-value ${fund.changeType}`}>
                      {fund.change}
                    </span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">NAV</span>
                    <span className="metric-value">{fund.nav}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">AUM</span>
                    <span className="metric-value">{fund.aum}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Expense Ratio</span>
                    <span className="metric-value">{fund.expenseRatio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts">
        <div className="container">
          <h2>Fund Performance Charts</h2>
          <p>Visual insights into fund performance, returns, and market distribution.</p>
          <div className="charts-grid">
            <div className="chart-card">
              <FundPerformanceChart
                data={fundReturnsData}
                type="bar"
                title="1-Year Returns by Fund (%)"
              />
            </div>
            <div className="chart-card">
              <FundPerformanceChart
                data={fundAUMData}
                type="bar"
                title="Assets Under Management (₹ Cr)"
              />
            </div>
            <div className="chart-card">
              <FundPerformanceChart
                data={riskDistributionData}
                type="pie"
                title="Risk Level Distribution"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="overview">
        <div className="container">
          <h2>Platform Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>📊 For Investors</h3>
              <p>
                Browse and compare mutual funds, view detailed fund information,
                manage your portfolio, and track performance metrics.
              </p>
              {userRole === 'investor' && (
                <Link to="/investor/funds" className="btn btn-primary btn-small">
                  Explore Funds
                </Link>
              )}
            </div>

            <div className="overview-card">
              <h3>👨‍💼 For Administrators</h3>
              <p>
                Manage platform content, monitor user activities, maintain mutual fund
                database, and oversee platform operations.
              </p>
              {userRole === 'admin' && (
                <Link to="/admin/dashboard" className="btn btn-primary btn-small">
                  Admin Dashboard
                </Link>
              )}
            </div>

            <div className="overview-card">
              <h3>📈 For Advisors</h3>
              <p>
                Create educational content, provide fund recommendations,
                and guide investors through their investment journey.
              </p>
              {userRole === 'advisor' && (
                <Link to="/advisor/dashboard" className="btn btn-primary btn-small">
                  Advisor Dashboard
                </Link>
              )}
            </div>

            <div className="overview-card">
              <h3>📉 For Analysts</h3>
              <p>
                Analyze fund performance trends, generate detailed reports,
                and provide insights on market behavior and investment patterns.
              </p>
              {userRole === 'analyst' && (
                <Link to="/analyst/dashboard" className="btn btn-primary btn-small">
                  Analytics Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <h2>Platform Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
<div className="stat-number">{stats.totalFunds}+</div>
              <div className="stat-label">Mutual Funds</div>
            </div>
            <div className="stat-item">
<div className="stat-number">{stats.totalInvestors.toLocaleString()}+</div>
              <div className="stat-label">Active Investors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹92B</div>
              <div className="stat-label">Assets Under Management</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">250+</div>
              <div className="stat-label">Expert Advisors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Fund Section */}
      <section className="add-data">
        <div className="container">
          <h2>Add Fund Data</h2>
          <p>Admin or investor can add a new fund manually to test data flow.</p>
          <form onSubmit={async (e) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              name: { value: string };
              risk: { value: string };
              returnRate: { value: string };
            };
            const name = target.name.value.trim();
            const risk = target.risk.value.trim();
            const returnRate = target.returnRate.value.trim();
            if (!name || !risk || !returnRate) return;
            const res = await fetch('/api/funds', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, risk, returnRate })
            });
            if (res.ok) {
              alert('Fund added successfully');
              target.name.value = '';
              target.risk.value = '';
              target.returnRate.value = '';
            } else {
              const data = await res.json();
              alert(data.error || 'Could not add fund');
            }
          }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input type="text" name="name" placeholder="Fund name" style={{ padding: '0.5rem', flex: '1 1 200px' }} />
              <input type="text" name="risk" placeholder="Risk level" style={{ padding: '0.5rem', flex: '1 1 150px' }} />
              <input type="text" name="returnRate" placeholder="Return (e.g. 11.2%)" style={{ padding: '0.5rem', flex: '1 1 150px' }} />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Add Fund</button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of investors making informed decisions through our platform.
          </p>
          {!userRole && (
            <Link to="/login" className="btn btn-primary">
              Login Now
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
