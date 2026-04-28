import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, email: 'admin@example.com', role: 'admin', name: 'Admin User', password: 'demo123', contact: '+91-9000000001', status: 'Active' },
  { id: 2, email: 'raj4883253@gmail.com', role: 'investor', name: 'Raviraj', password: '12345', contact: '9661244751', status: 'Active' },
  { id: 3, email: 'raj483253@gmail.com', role: 'investor', name: 'Raj', password: '12345', contact: '9661244751', status: 'Active' },
  { id: 4, email: 'advisor@example.com', role: 'advisor', name: 'Advisor User', password: 'demo123', contact: '+91-9000000002', status: 'Active' },
  { id: 5, email: 'analyst@example.com', role: 'analyst', name: 'Analyst User', password: 'demo123', contact: '+91-9000000003', status: 'Active' }
];

const funds = [
  {
    id: 1,
    name: 'Axis Bluechip Fund',
    type: 'Equity',
    category: 'Large Cap',
    nav: 3456.78,
    expense_ratio: 0.54,
    risk_level: 'Low-Medium',
    return_1yr: 12.5,
    return_3yr: 15.3,
    return_5yr: 18.2,
    aum: 150000,
    min_investment: 5000,
    description: 'Invests in large-cap equities with strong fundamentals.',
    strategy: 'Growth focused investment in stable blue-chip companies.'
  },
  {
    id: 2,
    name: 'SBI Small Cap Fund',
    type: 'Equity',
    category: 'Small Cap',
    nav: 2345.9,
    expense_ratio: 0.95,
    risk_level: 'High',
    return_1yr: 24.3,
    return_3yr: 28.5,
    return_5yr: 32.1,
    aum: 85000,
    min_investment: 5000,
    description: 'High growth potential in small-cap companies.',
    strategy: 'Aggressive growth strategy targeting emerging businesses.'
  },
  {
    id: 3,
    name: 'ICICI Prudential Balanced Advantage Fund',
    type: 'Hybrid',
    category: 'Balanced',
    nav: 1856.45,
    expense_ratio: 0.62,
    risk_level: 'Medium',
    return_1yr: 14.2,
    return_3yr: 16.8,
    return_5yr: 19.4,
    aum: 120000,
    min_investment: 5000,
    description: 'Dynamic allocation between equity and debt.',
    strategy: 'Balanced approach with dynamic asset allocation.'
  },
  {
    id: 4,
    name: 'Mindtree Dividend Yield Fund',
    type: 'Equity',
    category: 'Dividend',
    nav: 3234.56,
    expense_ratio: 0.58,
    risk_level: 'Low-Medium',
    return_1yr: 10.5,
    return_3yr: 12.8,
    return_5yr: 15.6,
    aum: 110000,
    min_investment: 5000,
    description: 'Focus on dividend-paying stocks.',
    strategy: 'Income generation through dividend-yielding companies.'
  },
  {
    id: 5,
    name: 'HDFC Mid Cap Opportunities Fund',
    type: 'Equity',
    category: 'Mid Cap',
    nav: 2567.89,
    expense_ratio: 0.78,
    risk_level: 'Medium-High',
    return_1yr: 18.9,
    return_3yr: 22.3,
    return_5yr: 25.7,
    aum: 98000,
    min_investment: 5000,
    description: 'Growth opportunities in the mid-cap segment.',
    strategy: 'Mid-cap focused strategy for balanced growth.'
  },
  {
    id: 6,
    name: 'UTI Liquid Fund',
    type: 'Debt',
    category: 'Liquid',
    nav: 2156.34,
    expense_ratio: 0.18,
    risk_level: 'Very Low',
    return_1yr: 5.2,
    return_3yr: 5.8,
    return_5yr: 6.1,
    aum: 180000,
    min_investment: 1000,
    description: 'Short-term liquidity management fund.',
    strategy: 'Investment in high-quality short-term debt instruments.'
  },
  {
    id: 7,
    name: 'Kotak Emerging Equity Fund',
    type: 'Equity',
    category: 'Multi Cap',
    nav: 1945.67,
    expense_ratio: 0.65,
    risk_level: 'Medium',
    return_1yr: 16.3,
    return_3yr: 19.2,
    return_5yr: 22.5,
    aum: 76000,
    min_investment: 5000,
    description: 'Emerging opportunities across market caps.',
    strategy: 'Multi-cap strategy across emerging companies.'
  },
  {
    id: 8,
    name: 'Franklin India Flexi Cap Fund',
    type: 'Equity',
    category: 'Flexi Cap',
    nav: 2723.45,
    expense_ratio: 0.68,
    risk_level: 'Medium',
    return_1yr: 17.5,
    return_3yr: 20.1,
    return_5yr: 23.8,
    aum: 102000,
    min_investment: 5000,
    description: 'Flexible allocation across market caps.',
    strategy: 'Flexible cap allocation strategy.'
  }
];

const portfolios = {
  investor: {
    invested: 125000,
    returns: 19800,
    funds: [
      { fundId: 1, name: 'Axis Bluechip Fund', invested: 70000, currentValue: 78000 },
      { fundId: 2, name: 'SBI Small Cap Fund', invested: 55000, currentValue: 62200 }
    ]
  },
  advisor: { clients: 52, recommendations: 18, activeAdvisors: 12 },
  analyst: { reports: 34, growthTrend: 'positive', activeAlerts: 8 },
  admin: { sites: 1, activeUsers: 150000, totalFunds: funds.length }
};

const investments = [
  { id: 1, userId: 2, fundId: 1, amount: 50000, date: '2025-12-01', status: 'Completed' },
  { id: 2, userId: 2, fundId: 2, amount: 75000, date: '2026-02-15', status: 'Completed' }
];

const stats = {
  totalFunds: funds.length,
  activeInvestors: 152000,
  totalAUM: 920000000,
  expertAdvisors: 38
};

app.get('/api/status', (req, res) => {
  return res.json({ status: 'ok', message: 'Backend is live', version: '1.1.0' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (email === 'kluniversity.com' && password === 'klu') {
    const safeUser = {
      id: 0,
      name: `${role?.charAt(0).toUpperCase() + role?.slice(1) || 'User'}`,
      role: role || 'investor',
      email,
      contact: '+91-9000000000',
      status: 'Active'
    };
    return res.json({ token: 'demo-token', user: safeUser });
  }

  const user = users.find(
    (u) => u.email === email && u.password === password && (!role || u.role === role)
  );

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const safeUser = {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
    contact: user.contact,
    status: user.status
  };

  return res.json({ token: 'demo-token', user: safeUser });
});

app.get('/api/users', (req, res) => {
  const safeUsers = users.map(({ password, ...rest }) => rest);
  return res.json({ users: safeUsers });
});

app.get('/api/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const { password, ...safeUser } = user;
  return res.json({ user: safeUser });
});

app.get('/api/funds', (req, res) => {
  return res.json({ funds });
});

app.get('/api/funds/:id', (req, res) => {
  const fundId = Number(req.params.id);
  const fund = funds.find((f) => f.id === fundId);
  if (!fund) {
    return res.status(404).json({ error: 'Fund not found' });
  }
  return res.json({ fund });
});

app.post('/api/funds', (req, res) => {
  const { name, type, category, risk_level, return_1yr, return_3yr, return_5yr, min_investment, description, strategy } = req.body;

  if (!name || !type || !category || !risk_level || return_1yr === undefined || return_3yr === undefined || return_5yr === undefined || !min_investment) {
    return res.status(400).json({ error: 'Missing required fund fields' });
  }

  const newFund = {
    id: funds.length + 1,
    name,
    type,
    category,
    nav: 0,
    expense_ratio: 0,
    risk_level,
    return_1yr,
    return_3yr,
    return_5yr,
    aum: 0,
    min_investment,
    description: description || '',
    strategy: strategy || ''
  };

  funds.push(newFund);
  portfolios.admin.totalFunds = funds.length;
  return res.status(201).json({ fund: newFund });
});

app.get('/api/portfolio/:role', (req, res) => {
  const { role } = req.params;
  const portfolio = portfolios[role];
  if (!portfolio) {
    return res.status(404).json({ error: 'Portfolio not found for role' });
  }
  return res.json({ portfolio });
});

app.post('/api/investments', (req, res) => {
  const { userId, fundId, amount } = req.body;

  if (!userId || !fundId || !amount) {
    return res.status(400).json({ error: 'userId, fundId, and amount are required' });
  }

  const user = users.find((u) => u.id === Number(userId));
  const fund = funds.find((f) => f.id === Number(fundId));

  if (!user || user.role !== 'investor') {
    return res.status(400).json({ error: 'Valid investor userId is required' });
  }
  if (!fund) {
    return res.status(400).json({ error: 'Valid fundId is required' });
  }

  const newInvestment = {
    id: investments.length + 1,
    userId: user.id,
    fundId: fund.id,
    amount: Number(amount),
    date: new Date().toISOString().split('T')[0],
    status: 'Completed'
  };

  investments.push(newInvestment);
  portfolios.investor.invested += newInvestment.amount;
  portfolios.investor.returns += Math.round(newInvestment.amount * 0.12);
  portfolios.investor.funds.push({ fundId: fund.id, name: fund.name, invested: newInvestment.amount, currentValue: Math.round(newInvestment.amount * 1.12) });

  return res.status(201).json({ investment: newInvestment });
});

app.get('/api/investments', (req, res) => {
  return res.json({ investments });
});

app.get('/api/stats', (req, res) => {
  return res.json({ stats });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
