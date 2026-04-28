import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Login from './components/Common/Login';
import Home from './components/Common/Home';

// Protected Route Component
const ProtectedRoute = ({ userRole, requiredRole, element }: any) => {
  return userRole === requiredRole ? element : <Navigate to="/login" replace />;
};

// Admin Components
import AdminDashboard from './components/Admin/AdminDashboard';
import UserActivity from './components/Admin/UserActivity';
import FundManagement from './components/Admin/FundManagement';

// Investor Components
import InvestorFunds from './components/Investor/InvestorFunds';
import FundDetails from './components/Investor/FundDetails';
import FundComparison from './components/Investor/FundComparison';
import Portfolio from './components/Investor/Portfolio';

// Advisor Components
import AdvisorDashboard from './components/Advisor/AdvisorDashboard';

// Analyst Components
import AnalystDashboard from './components/Analyst/AnalystDashboard';

import './styles/globals.css';
import './styles/App.css';

function App() {
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLogin = (role: string) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <Router>
      <div className="app-container">
        {userRole && <Navbar userRole={userRole} onLogout={handleLogout} />}
        
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/" element={<Home userRole={userRole} />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute userRole={userRole} requiredRole="admin" element={<AdminDashboard />} />} />
            <Route path="/admin/user-activity" element={<ProtectedRoute userRole={userRole} requiredRole="admin" element={<UserActivity />} />} />
            <Route path="/admin/funds" element={<ProtectedRoute userRole={userRole} requiredRole="admin" element={<FundManagement />} />} />

            {/* Investor Routes */}
            <Route path="/investor/funds" element={<ProtectedRoute userRole={userRole} requiredRole="investor" element={<InvestorFunds />} />} />
            <Route path="/investor/fund/:id" element={<ProtectedRoute userRole={userRole} requiredRole="investor" element={<FundDetails />} />} />
            <Route path="/investor/compare" element={<ProtectedRoute userRole={userRole} requiredRole="investor" element={<FundComparison />} />} />
            <Route path="/investor/portfolio" element={<ProtectedRoute userRole={userRole} requiredRole="investor" element={<Portfolio />} />} />

            {/* Advisor Routes */}
            <Route path="/advisor/dashboard" element={<ProtectedRoute userRole={userRole} requiredRole="advisor" element={<AdvisorDashboard />} />} />

            {/* Analyst Routes */}
            <Route path="/analyst/dashboard" element={<ProtectedRoute userRole={userRole} requiredRole="analyst" element={<AnalystDashboard />} />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
