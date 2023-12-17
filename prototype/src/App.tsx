// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssuranceView from './AssuranceView';
import UserManagement from './UserManagement';
import LandingPage from './LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/assurance" element={<AssuranceView />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
