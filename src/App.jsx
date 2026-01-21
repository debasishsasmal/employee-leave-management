import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LeaveProvider } from './context/LeaveContext'; // Import kiya

import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LeaveForm from './pages/LeaveForm';

function App() {
  return (
    <LeaveProvider>  {/* Yahan Wrap kiya */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/apply-leave" element={<LeaveForm />} />
        </Routes>
      </Router>
    </LeaveProvider> // Wrapper band
  );
}

export default App;