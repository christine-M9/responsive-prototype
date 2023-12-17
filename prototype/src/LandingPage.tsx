// LandingPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceAssuranceClick = () => {
    navigate('/assurance', { state: { fromLandingPage: true } });
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <Link to="/user-management" className="landing-page-card">
          <div className="card-content">
            <h3>User Management</h3>
          </div>
        </Link>
        <button className="landing-page-card hover-effect" onClick={handleServiceAssuranceClick}>
          <div className="card-content hover-effect">
            <h3>Service Assurance</h3>
          </div>
        </button>
        {/* Add other links as needed */}
      </div>
    </div>
  );
};

export default LandingPage;
