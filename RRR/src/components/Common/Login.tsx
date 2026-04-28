import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import '../../styles/Login.css';

interface LoginProps {
  onLogin: (role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('investor');
  const navigate = useNavigate();

  const roles = [
    { id: 'admin', label: 'Admin', icon: '👨‍💼' },
    { id: 'investor', label: 'Investor', icon: '💼' },
    { id: 'advisor', label: 'Financial Advisor', icon: '📊' },
    { id: 'analyst', label: 'Data Analyst', icon: '📈' }
  ];

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    setLoading(true);
    try {
      // Local demo login fallback for the project demo credentials
      if (email === 'kluniversity.com' && password === 'klu') {
        onLogin(selectedRole);
        navigate('/');
        return;
      }

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role: selectedRole }),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data.user.role);
        navigate('/');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">💰</div>
          <h1>Mutual Funds Platform</h1>
          <p>Investment Perception & Selection Behavior Analysis</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Role Selection */}
          <div className="form-section">
            <label className="form-label">Select Your Role</label>
            <div className="role-grid">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  className={`role-button ${selectedRole === role.id ? 'active' : ''}`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <span className="role-emoji">{role.icon}</span>
                  <span className="role-name">{role.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input
                type="text"
                placeholder="kluniversity.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                type="password"
                placeholder="klu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-login" disabled={loading}>
            <LogIn size={20} /> {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>

          {error && <div className="login-error">{error}</div>}

          <p className="login-footer">
            For demonstration purposes only - Academic Project
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
