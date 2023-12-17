import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <Link to="/user-management" style={{ textDecoration: 'none', padding: '16px', margin: '8px', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '16px' }}>
            <h3>User Management</h3>
          </div>
        </Link>
        <Link to="/assurance" style={{ textDecoration: 'none', padding: '16px', margin: '8px', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '16px' }}>
            <h3>Service Assurance</h3>
          </div>
        </Link>
        {/* Add other links as needed */}
      </div>
    </div>
  );
};

export default LandingPage;
