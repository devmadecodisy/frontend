import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import '../../styles/Navbar.css';

interface NavbarProps {
  userRole: string | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userRole, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const commonLinks = [
    { path: '/', label: 'Home' }
  ];

  const roleBasedLinks = {
    admin: [
      { path: '/admin/dashboard', label: 'Dashboard' },
      { path: '/admin/users', label: 'Users' },
      { path: '/admin/funds', label: 'Funds Management' }
    ],
    investor: [
      { path: '/investor/funds', label: 'Funds' },
      { path: '/investor/portfolio', label: 'Portfolio' }
    ],
    advisor: [
      { path: '/advisor/dashboard', label: 'Dashboard' },
      { path: '/advisor/content', label: 'Content' },
      { path: '/advisor/recommendations', label: 'Recommendations' }
    ],
    analyst: [
      { path: '/analyst/dashboard', label: 'Dashboard' },
      { path: '/analyst/reports', label: 'Reports' }
    ]
  };

  const currentRoleLinks = userRole && roleBasedLinks[userRole as keyof typeof roleBasedLinks] 
    ? roleBasedLinks[userRole as keyof typeof roleBasedLinks] 
    : [];

  const allLinks = [...commonLinks, ...currentRoleLinks];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          💰 Mutual Funds Platform
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            {allLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {userRole && (
            <div className="navbar-user">
              <span className="user-role">{userRole.toUpperCase()}</span>
              <button className="btn-logout" onClick={onLogout}>
                <LogOut size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
