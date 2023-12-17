import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceAssuranceClick = () => {
    navigate('/assurance', { state: { fromLandingPage: true } });
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', background: '#f8f9fa', borderRadius: '8px' }}>
      <h1 style={{ marginBottom: '30px', color: '#007bff', textAlign: 'center', fontSize: '2.5em' }}>RESPONSIVE PROTOTYPE</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Link to="/user-management" className="landing-page-card" style={{ textDecoration: 'none' }}>
          <div className="card-content" style={{ backgroundColor: '#007bff', color: '#fff', padding: '30px', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3>User Management</h3>
            <p style={{ marginTop: '15px' }}>Effortlessly manage users and groups with our intuitive tools.</p>
          </div>
        </Link>
        <button className="landing-page-card hover-effect" onClick={handleServiceAssuranceClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <div className="card-content hover-effect" style={{ backgroundColor: '#28a745', color: '#fff', padding: '30px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3>Service Assurance</h3>
            <p style={{ marginTop: '15px' }}>Ensure the reliability and quality of your services with our advanced assurance features.</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
