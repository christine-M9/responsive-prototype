import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceAssuranceClick = () => {
    navigate('/assurance', { state: { fromLandingPage: true } });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>Landing Page</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Link to="/user-management" className="landing-page-card" style={{ textDecoration: 'none' }}>
          <div className="card-content" style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
            <h3>User Management</h3>
          </div>
        </Link>
        <button className="landing-page-card hover-effect" onClick={handleServiceAssuranceClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <div className="card-content hover-effect" style={{ backgroundColor: '#28a745', color: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Service Assurance</h3>
          </div>
        </button>
        {/* Add other links as needed */}
      </div>
    </div>
  );
};

export default LandingPage;
