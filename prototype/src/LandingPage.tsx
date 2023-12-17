// LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        {/* User Management Card */}
        <Link to="/user-management" className="landing-page-card">
          <div className="card-content">
            <h3>User Management</h3>
          </div>
        </Link>

        {/* Service Assurance Card with Hover Effect */}
        <Link to="/assurance" className="landing-page-card hover-effect">
          <div className="card-content hover-effect">
            <h3>Service Assurance</h3>
          </div>
        </Link>
        {/* Add other links as needed */}
      </div>
    </div>
  );
};

export default LandingPage;
