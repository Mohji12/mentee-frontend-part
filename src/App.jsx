// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './components/ui1/Sidebarlayout';
import Dashboard from './pages/Dashboard';
import ActivityPage from './pages/ActivityPage';
import MenteeMeeting from './pages/Mentee_meeting'; // ✅ Import correctly with PascalCase
import Profile from './pages/Profile'; // ✅ Import correctly with PascalCase
import Swot_report from './pages/swot_report';
import Swot_form from './pages/swot_form'; // ✅ Import correctly with PascalCase
import Analysis_head from './components/ui7/Analysis_head';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="activities" element={<ActivityPage />} />
          <Route path="meetings" element={<MenteeMeeting />} /> {/* ✅ Added new route */}
          <Route path="profile" element={<Profile />} /> {/* ✅ Added new route */}
          <Route path="swot-report" element={<Swot_report />} />
          <Route path="swot-form" element={<Swot_form />} /> {/* ✅ Added new route */}
          <Route path="analysis" element={<Analysis_head />} /> {/* ✅ Added new route */}
          {/* Add more routes as needed */}
          {/* Example: <Route path="settings" element={<Settings />} /> */}
          {/* Add more routes as needed */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
