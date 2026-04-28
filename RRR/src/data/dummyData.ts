// Dummy data for the mutual funds platform

export interface MutualFund {
  id: string;
  name: string;
  type: string;
  category: string;
  nav: number;
  expense_ratio: number;
  risk_level: string;
  return_1yr: number;
  return_3yr: number;
  return_5yr: number;
  aum: number;
  min_investment: number;
  description: string;
  strategy: string;
  status?: string;
  manager?: string;
  fundHouse?: string;
  benchmark?: string;
  launchDate?: string;
  inceptionReturn?: number;
  volatility?: number;
  sortino?: number;
  sharpeRatio?: number;
  activeInvestors?: number;
  totalDistribution?: number;
}

export interface FundStatistics {
  id: string;
  fundName: string;
  status: string;
  totalInvestors: number;
  previousMonthInvestors: number;
  aum: number;
  previousMonthAUM: number;
  navChange: number;
  monthlyReturns: number;
}

export interface FundPerformanceMetric {
  fundId: string;
  fundName: string;
  month: string;
  navValue: number;
  returns: number;
  benchmark: number;
}

export interface FundDistribution {
  fundName: string;
  equity: number;
  debt: number;
  gold: number;
  other: number;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  investments?: number;
}

export interface Fund {
  id: string;
  name: string;
  nav: number;
  change: number;
  type: string;
}

export interface UserActivityData {
  id: string;
  userId: string;
  userName: string;
  action: string;
  description: string;
  timestamp: string;
  ipAddress: string;
  device: string;
  location: string;
  page?: string;
  duration?: number;
}

export interface UserSessionData {
  id: string;
  userId: string;
  userName: string;
  loginTime: string;
  logoutTime?: string;
  duration: number;
  device: string;
  ipAddress: string;
  pagesVisited: number;
  actionsPerformed: number;
}

export interface PortfolioItem {
  id: string;
  fundName: string;
  units: number;
  investmentValue: number;
  currentValue: number;
  returns: number;
}

export interface EducationalContentItem {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
}

export const mutualFunds: MutualFund[] = [
  {
    id: '1',
    name: 'Axis Bluechip Fund',
    type: 'Equity',
    category: 'Large Cap',
    nav: 3456.78,
    expense_ratio: 0.54,
    risk_level: 'Low-Medium',
    return_1yr: 12.5,
    return_3yr: 15.3,
    return_5yr: 18.2,
    aum: 15000,
    min_investment: 5000,
    description: 'Invests in large-cap equities with strong fundamentals',
    strategy: 'Growth focused investment in stable blue-chip companies',
    status: 'Active',
    manager: 'Rajesh Sharma',
    fundHouse: 'Axis MF',
    benchmark: 'Nifty 50',
    launchDate: '2005-08-15',
    inceptionReturn: 450.25,
    volatility: 12.5,
    sortino: 2.4,
    sharpeRatio: 1.8,
    activeInvestors: 125000,
    totalDistribution: 2500
  },
  {
    id: '2',
    name: 'SBI Small Cap Fund',
    type: 'Equity',
    category: 'Small Cap',
    nav: 2345.90,
    expense_ratio: 0.95,
    risk_level: 'High',
    return_1yr: 24.3,
    return_3yr: 28.5,
    return_5yr: 32.1,
    aum: 8500,
    min_investment: 1000,
    description: 'High growth potential in small cap companies',
    strategy: 'Aggressive growth strategy targeting emerging businesses'
  },
  {
    id: '3',
    name: 'ICICI Prudential Balanced Advantage Fund',
    type: 'Hybrid',
    category: 'Balanced',
    nav: 1856.45,
    expense_ratio: 0.62,
    risk_level: 'Medium',
    return_1yr: 14.2,
    return_3yr: 16.8,
    return_5yr: 19.4,
    aum: 12000,
    min_investment: 5000,
    description: 'Dynamic allocation between equity and debt',
    strategy: 'Balanced approach with dynamic asset allocation'
  },
  {
    id: '4',
    name: 'Mindtree Dividend Yield Fund',
    type: 'Equity',
    category: 'Dividend',
    nav: 3234.56,
    expense_ratio: 0.58,
    risk_level: 'Low-Medium',
    return_1yr: 10.5,
    return_3yr: 12.8,
    return_5yr: 15.6,
    aum: 11000,
    min_investment: 5000,
    description: 'Focus on dividend-paying stocks',
    strategy: 'Income generation through dividend-yielding stocks'
  },
  {
    id: '5',
    name: 'HDFC Mid Cap Opportunities Fund',
    type: 'Equity',
    category: 'Mid Cap',
    nav: 2567.89,
    expense_ratio: 0.78,
    risk_level: 'Medium-High',
    return_1yr: 18.9,
    return_3yr: 22.3,
    return_5yr: 25.7,
    aum: 9800,
    min_investment: 5000,
    description: 'Growth opportunities in mid-cap segment',
    strategy: 'Mid-cap focused strategy for balanced growth'
  },
  {
    id: '6',
    name: 'UTI Liquid Fund',
    type: 'Debt',
    category: 'Liquid',
    nav: 2156.34,
    expense_ratio: 0.18,
    risk_level: 'Very Low',
    return_1yr: 5.2,
    return_3yr: 5.8,
    return_5yr: 6.1,
    aum: 18000,
    min_investment: 1000,
    description: 'Short-term liquidity management',
    strategy: 'Investment in short-term debt instruments'
  },
  {
    id: '7',
    name: 'Kotak Emerging Equity Fund',
    type: 'Equity',
    category: 'Multi Cap',
    nav: 1945.67,
    expense_ratio: 0.65,
    risk_level: 'Medium',
    return_1yr: 16.3,
    return_3yr: 19.2,
    return_5yr: 22.5,
    aum: 7600,
    min_investment: 5000,
    description: 'Emerging opportunities across market caps',
    strategy: 'Multi-cap strategy across emerging companies'
  },
  {
    id: '8',
    name: 'Franklin India Flexi Cap Fund',
    type: 'Equity',
    category: 'Flexi Cap',
    nav: 2723.45,
    expense_ratio: 0.68,
    risk_level: 'Medium',
    return_1yr: 17.5,
    return_3yr: 20.1,
    return_5yr: 23.8,
    aum: 10200,
    min_investment: 5000,
    description: 'Flexible allocation across market capitalizations',
    strategy: 'Flexible cap allocation strategy'
  }
];

export const users: UserData[] = [
  {
    id: '1',
    name: 'Raj Kumar',
    email: 'raj@investor.com',
    role: 'Investor',
    status: 'Active',
    joinDate: '2023-01-15',
    investments: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@advisor.com',
    role: 'Financial Advisor',
    status: 'Active',
    joinDate: '2022-06-20'
  },
  {
    id: '3',
    name: 'Amit Singh',
    email: 'amit@analyst.com',
    role: 'Data Analyst',
    status: 'Active',
    joinDate: '2023-03-10'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah@investor.com',
    role: 'Investor',
    status: 'Active',
    joinDate: '2024-01-05',
    investments: 3
  },
  {
    id: '5',
    name: 'Vikram Patel',
    email: 'vikram@investor.com',
    role: 'Investor',
    status: 'Inactive',
    joinDate: '2022-09-12',
    investments: 0
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    fundName: 'Axis Bluechip Fund',
    units: 100,
    investmentValue: 250000,
    currentValue: 281000,
    returns: 12.4
  },
  {
    id: '2',
    fundName: 'ICICI Prudential Balanced Advantage Fund',
    units: 200,
    investmentValue: 300000,
    currentValue: 315500,
    returns: 5.2
  },
  {
    id: '3',
    fundName: 'SBI Small Cap Fund',
    units: 50,
    investmentValue: 100000,
    currentValue: 124250,
    returns: 24.25
  }
];

export const educationalContent: EducationalContentItem[] = [
  {
    id: '1',
    category: 'Market Insights',
    title: 'Mutual Fund Investing Basics',
    description: 'A beginner-friendly guide to mutual fund investing.',
    content: 'Learn how mutual funds work, the difference between equity and debt funds, and how to build a diversified portfolio.'
  },
  {
    id: '2',
    category: 'Investment Strategy',
    title: 'Building a Long-Term Portfolio',
    description: 'Tips for selecting funds based on investment horizon and risk tolerance.',
    content: 'Understand asset allocation, SIPs, and the importance of consistency in long-term investing.'
  },
  {
    id: '3',
    category: 'Risk Management',
    title: 'Managing Volatility in Your Portfolio',
    description: 'How to handle market ups and downs without panic selling.',
    content: 'Discover methods to rebalance your portfolio, use diversified funds, and set realistic return expectations.'
  }
];

export const performanceData = [
  { month: 'Jan', return: 8.5, benchmark: 7.2 },
  { month: 'Feb', return: 9.2, benchmark: 8.1 },
  { month: 'Mar', return: 11.3, benchmark: 10.2 },
  { month: 'Apr', return: 10.8, benchmark: 9.8 },
  { month: 'May', return: 12.5, benchmark: 11.3 },
  { month: 'Jun', return: 14.2, benchmark: 12.8 },
  { month: 'Jul', return: 13.9, benchmark: 12.5 },
  { month: 'Aug', return: 15.3, benchmark: 13.9 },
  { month: 'Sep', return: 16.8, benchmark: 15.2 },
  { month: 'Oct', return: 17.5, benchmark: 16.1 },
  { month: 'Nov', return: 18.2, benchmark: 17.3 },
  { month: 'Dec', return: 19.1, benchmark: 18.5 }
];

export const investmentTrends = [
  { date: 'Week 1', equity: 45, debt: 35, hybrid: 20 },
  { date: 'Week 2', equity: 48, debt: 32, hybrid: 20 },
  { date: 'Week 3', equity: 50, debt: 30, hybrid: 20 },
  { date: 'Week 4', equity: 52, debt: 28, hybrid: 20 },
  { date: 'Week 5', equity: 55, debt: 25, hybrid: 20 },
  { date: 'Week 6', equity: 57, debt: 23, hybrid: 20 },
  { date: 'Week 7', equity: 60, debt: 20, hybrid: 20 },
  { date: 'Week 8', equity: 62, debt: 18, hybrid: 20 }
];

export const userActivities: UserActivityData[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Raj Kumar',
    action: 'Login',
    description: 'User logged into the platform',
    timestamp: '2024-04-07 09:30:15',
    ipAddress: '192.168.1.100',
    device: 'Desktop - Chrome',
    location: 'Mumbai, India',
    page: '/dashboard'
  },
  {
    id: '2',
    userId: '1',
    userName: 'Raj Kumar',
    action: 'View Portfolio',
    description: 'Viewed portfolio details',
    timestamp: '2024-04-07 09:35:22',
    ipAddress: '192.168.1.100',
    device: 'Desktop - Chrome',
    location: 'Mumbai, India',
    page: '/investor/portfolio'
  },
  {
    id: '3',
    userId: '1',
    userName: 'Raj Kumar',
    action: 'Investment',
    description: 'Made investment in Axis Bluechip Fund',
    timestamp: '2024-04-07 09:45:10',
    ipAddress: '192.168.1.100',
    device: 'Desktop - Chrome',
    location: 'Mumbai, India',
    page: '/investor/funds'
  },
  {
    id: '4',
    userId: '2',
    userName: 'Priya Sharma',
    action: 'Login',
    description: 'User logged into the platform',
    timestamp: '2024-04-07 08:15:30',
    ipAddress: '10.0.0.50',
    device: 'Mobile - Safari',
    location: 'Delhi, India',
    page: '/dashboard'
  },
  {
    id: '5',
    userId: '2',
    userName: 'Priya Sharma',
    action: 'Create Content',
    description: 'Created new investment recommendation',
    timestamp: '2024-04-07 08:30:45',
    ipAddress: '10.0.0.50',
    device: 'Mobile - Safari',
    location: 'Delhi, India',
    page: '/advisor/dashboard'
  },
  {
    id: '6',
    userId: '3',
    userName: 'Amit Singh',
    action: 'Login',
    description: 'User logged into the platform',
    timestamp: '2024-04-07 10:00:00',
    ipAddress: '172.16.0.25',
    device: 'Desktop - Firefox',
    location: 'Bangalore, India',
    page: '/dashboard'
  },
  {
    id: '7',
    userId: '3',
    userName: 'Amit Singh',
    action: 'Generate Report',
    description: 'Generated quarterly performance report',
    timestamp: '2024-04-07 10:15:20',
    ipAddress: '172.16.0.25',
    device: 'Desktop - Firefox',
    location: 'Bangalore, India',
    page: '/analyst/reports'
  },
  {
    id: '8',
    userId: '4',
    userName: 'Sarah Johnson',
    action: 'Login',
    description: 'User logged into the platform',
    timestamp: '2024-04-07 11:20:15',
    ipAddress: '203.0.113.45',
    device: 'Tablet - Chrome',
    location: 'Chennai, India',
    page: '/dashboard'
  },
  {
    id: '9',
    userId: '4',
    userName: 'Sarah Johnson',
    action: 'Fund Comparison',
    description: 'Compared multiple mutual funds',
    timestamp: '2024-04-07 11:35:40',
    ipAddress: '203.0.113.45',
    device: 'Tablet - Chrome',
    location: 'Chennai, India',
    page: '/investor/fund-comparison'
  },
  {
    id: '10',
    userId: '5',
    userName: 'Vikram Patel',
    action: 'Login',
    description: 'User logged into the platform',
    timestamp: '2024-04-06 14:10:30',
    ipAddress: '198.51.100.15',
    device: 'Desktop - Edge',
    location: 'Pune, India',
    page: '/dashboard'
  },
  {
    id: '11',
    userId: '1',
    userName: 'Raj Kumar',
    action: 'Logout',
    description: 'User logged out of the platform',
    timestamp: '2024-04-07 12:00:00',
    ipAddress: '192.168.1.100',
    device: 'Desktop - Chrome',
    location: 'Mumbai, India'
  },
  {
    id: '12',
    userId: '2',
    userName: 'Priya Sharma',
    action: 'Update Profile',
    description: 'Updated profile information',
    timestamp: '2024-04-07 09:00:15',
    ipAddress: '10.0.0.50',
    device: 'Mobile - Safari',
    location: 'Delhi, India',
    page: '/profile'
  }
];

export const userSessions: UserSessionData[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Raj Kumar',
    loginTime: '2024-04-07 09:30:15',
    logoutTime: '2024-04-07 12:00:00',
    duration: 150, // minutes
    device: 'Desktop - Chrome',
    ipAddress: '192.168.1.100',
    pagesVisited: 8,
    actionsPerformed: 12
  },
  {
    id: '2',
    userId: '2',
    userName: 'Priya Sharma',
    loginTime: '2024-04-07 08:15:30',
    logoutTime: '2024-04-07 10:45:20',
    duration: 210, // minutes
    device: 'Mobile - Safari',
    ipAddress: '10.0.0.50',
    pagesVisited: 6,
    actionsPerformed: 8
  },
  {
    id: '3',
    userId: '3',
    userName: 'Amit Singh',
    loginTime: '2024-04-07 10:00:00',
    duration: 180, // minutes (still active)
    device: 'Desktop - Firefox',
    ipAddress: '172.16.0.25',
    pagesVisited: 12,
    actionsPerformed: 15
  },
  {
    id: '4',
    userId: '4',
    userName: 'Sarah Johnson',
    loginTime: '2024-04-07 11:20:15',
    duration: 95, // minutes (still active)
    device: 'Tablet - Chrome',
    ipAddress: '203.0.113.45',
    pagesVisited: 5,
    actionsPerformed: 7
  },
  {
    id: '5',
    userId: '5',
    userName: 'Vikram Patel',
    loginTime: '2024-04-06 14:10:30',
    logoutTime: '2024-04-06 15:30:45',
    duration: 80, // minutes
    device: 'Desktop - Edge',
    ipAddress: '198.51.100.15',
    pagesVisited: 3,
    actionsPerformed: 4
  }
];

export const fundStatistics: FundStatistics[] = [
  {
    id: '1',
    fundName: 'Axis Bluechip Fund',
    status: 'Active',
    totalInvestors: 125000,
    previousMonthInvestors: 122500,
    aum: 15000,
    previousMonthAUM: 14500,
    navChange: 2.5,
    monthlyReturns: 3.2
  },
  {
    id: '2',
    fundName: 'SBI Small Cap Fund',
    status: 'Active',
    totalInvestors: 85000,
    previousMonthInvestors: 82000,
    aum: 8500,
    previousMonthAUM: 8200,
    navChange: 5.8,
    monthlyReturns: 6.5
  },
  {
    id: '3',
    fundName: 'ICICI Prudential Balanced Advantage Fund',
    status: 'Active',
    totalInvestors: 95000,
    previousMonthInvestors: 93000,
    aum: 12000,
    previousMonthAUM: 11800,
    navChange: 1.8,
    monthlyReturns: 2.1
  },
  {
    id: '4',
    fundName: 'Franklin India Flexi Cap Fund',
    status: 'Active',
    totalInvestors: 78000,
    previousMonthInvestors: 75500,
    aum: 10200,
    previousMonthAUM: 9950,
    navChange: 3.2,
    monthlyReturns: 4.1
  },
  {
    id: '5',
    fundName: 'HDFC Mid Cap Opportunities Fund',
    status: 'Active',
    totalInvestors: 72000,
    previousMonthInvestors: 70000,
    aum: 9800,
    previousMonthAUM: 9500,
    navChange: 4.5,
    monthlyReturns: 5.2
  },
  {
    id: '6',
    fundName: 'UTI Liquid Fund',
    status: 'Active',
    totalInvestors: 150000,
    previousMonthInvestors: 148000,
    aum: 18000,
    previousMonthAUM: 17500,
    navChange: 0.5,
    monthlyReturns: 0.4
  }
];

export const fundPerformanceMetrics: FundPerformanceMetric[] = [
  { fundId: '1', fundName: 'Axis Bluechip', month: 'Jan', navValue: 3200, returns: 2.1, benchmark: 1.9 },
  { fundId: '1', fundName: 'Axis Bluechip', month: 'Feb', navValue: 3280, returns: 2.5, benchmark: 2.2 },
  { fundId: '1', fundName: 'Axis Bluechip', month: 'Mar', navValue: 3350, returns: 2.1, benchmark: 1.8 },
  { fundId: '1', fundName: 'Axis Bluechip', month: 'Apr', navValue: 3425, returns: 2.2, benchmark: 2.0 },
  { fundId: '1', fundName: 'Axis Bluechip', month: 'May', navValue: 3456, returns: 3.2, benchmark: 3.0 },
  { fundId: '2', fundName: 'SBI Small Cap', month: 'Jan', navValue: 1950, returns: 4.5, benchmark: 3.8 },
  { fundId: '2', fundName: 'SBI Small Cap', month: 'Feb', navValue: 2050, returns: 5.1, benchmark: 4.2 },
  { fundId: '2', fundName: 'SBI Small Cap', month: 'Mar', navValue: 2150, returns: 5.3, benchmark: 4.5 },
  { fundId: '2', fundName: 'SBI Small Cap', month: 'Apr', navValue: 2250, returns: 6.2, benchmark: 5.5 },
  { fundId: '2', fundName: 'SBI Small Cap', month: 'May', navValue: 2345, returns: 6.5, benchmark: 5.8 }
];

export const fundDistribution: FundDistribution[] = [
  { fundName: 'Axis Bluechip Fund', equity: 95, debt: 3, gold: 0, other: 2 },
  { fundName: 'SBI Small Cap Fund', equity: 98, debt: 1, gold: 0, other: 1 },
  { fundName: 'ICICI Prudential Balanced Advantage Fund', equity: 60, debt: 35, gold: 0, other: 5 },
  { fundName: 'Franklin India Flexi Cap Fund', equity: 92, debt: 5, gold: 0, other: 3 },
  { fundName: 'HDFC Mid Cap Opportunities Fund', equity: 96, debt: 2, gold: 0, other: 2 }
];

export const fundRecommendations = [
  {
    id: '1',
    fundId: '1',
    fundName: 'Axis Bluechip Fund',
    reason: 'Strong performance and low volatility',
    suitableFor: 'Conservative investors',
    expectedReturn: '12-14%'
  },
  {
    id: '2',
    fundId: '2',
    fundName: 'SBI Small Cap Fund',
    reason: 'High growth potential for long-term investors',
    suitableFor: 'Aggressive investors',
    expectedReturn: '20-25%'
  },
  {
    id: '3',
    fundId: '3',
    fundName: 'ICICI Prudential Balanced Advantage Fund',
    reason: 'Dynamic allocation strategy',
    suitableFor: 'Moderate investors',
    expectedReturn: '12-16%'
  }
];

export const dashboardStats = {
  totalAUM: 92100,
  totalFunds: 8,
  totalInvestors: 150000,
  totalAdvisors: 250
};
