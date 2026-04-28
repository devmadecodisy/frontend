import React, { useState } from 'react';
import { fundRecommendations, educationalContent } from '../../data/dummyData';
import { Plus, MessageSquare, BookOpen } from 'lucide-react';
import '../../styles/AdvisorDashboard.css';

const AdvisorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recommendations' | 'content'>('recommendations');

  return (
    <div className="advisor-dashboard">
      <div className="dashboard-header">
        <h1>Financial Advisor Dashboard</h1>
        <p>Manage recommendations and educational content</p>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          <span className="stat-label">Active Recommendations</span>
          <span className="stat-value">{fundRecommendations.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Educational Content</span>
          <span className="stat-value">{educationalContent.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Client Meetings</span>
          <span className="stat-value">12</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'recommendations' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommendations')}
        >
          <MessageSquare size={20} /> Fund Recommendations
        </button>
        <button
          className={`tab ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          <BookOpen size={20} /> Educational Content
        </button>
      </div>

      {/* Recommendations Tab */}
      {activeTab === 'recommendations' && (
        <div className="tab-content">
          <div className="content-header">
            <h2>Fund Recommendations</h2>
            <button className="btn btn-primary">
              <Plus size={20} /> Create Recommendation
            </button>
          </div>

          <div className="recommendations-grid">
            {fundRecommendations.map((rec) => (
              <div key={rec.id} className="recommendation-card">
                <h3>{rec.fundName}</h3>
                <div className="recommendation-details">
                  <div className="detail-item">
                    <span className="detail-label">Reason:</span>
                    <span className="detail-value">{rec.reason}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Suitable For:</span>
                    <span className="detail-value">{rec.suitableFor}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Expected Return:</span>
                    <span className="detail-value highlight">{rec.expectedReturn}</span>
                  </div>
                </div>
                <div className="recommendation-actions">
                  <button className="btn btn-small btn-outline">Edit</button>
                  <button className="btn btn-small btn-outline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Educational Content Tab */}
      {activeTab === 'content' && (
        <div className="tab-content">
          <div className="content-header">
            <h2>Educational Content</h2>
            <button className="btn btn-primary">
              <Plus size={20} /> Create Content
            </button>
          </div>

          <div className="content-grid">
            {educationalContent.map((content) => (
              <div key={content.id} className="content-card">
                <div className="content-badge">{content.category}</div>
                <h3>{content.title}</h3>
                <p className="content-description">{content.description}</p>
                <p className="content-preview">{content.content.substring(0, 100)}...</p>
                <div className="content-actions">
                  <button className="btn btn-small btn-outline">Edit</button>
                  <button className="btn btn-small btn-outline">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvisorDashboard;
