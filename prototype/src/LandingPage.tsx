import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <Link to="/user-management">
          <div>User Management</div>
        </Link>
        <Link to="/assurance">
          <div>Service Assurance</div>
        </Link>
        {/* Add other cards as needed */}
      </div>
    </div>
  );
};

export default LandingPage;