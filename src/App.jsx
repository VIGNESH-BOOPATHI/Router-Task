// Import necessary components and libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './All'; // Import component for "All" page
import FullStackDevelopment from './FullStackDevelopment'; // Import component for "FullStackDevelopment" page
import DataScience from './DataScience'; // Import component for "DataScience" page
import CyberSecurity from './CyberSecurity'; // Import component for "CyberSecurity" page
import Career from './Career'; // Import component for "Career" page
import Topbar from './Topbar'; // Import the top navigation bar component
import './App.css'; // Import custom CSS styles
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

// App component containing the main structure of the application
function App() {
  return (
    <>
      {/* Router component for managing navigation */}
      <Router>
        {/* Container to wrap the entire content */}
        <div className="container">
          {/* Topbar component for the navigation menu */}
          <Topbar />
          {/* Routes component to define different page routes */}
          <Routes>
            {/* Route for the "All" page */}
            <Route path="/" element={<All />} />
            {/* Route for the "FullStackDevelopment" page */}
            <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
            {/* Route for the "DataScience" page */}
            <Route path="/DataScience" element={<DataScience />} />
            {/* Route for the "CyberSecurity" page */}
            <Route path="/CyberSecurity" element={<CyberSecurity />} />
            {/* Route for the "Career" page */}
            <Route path="/Career" element={<Career />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; // Export the App component
