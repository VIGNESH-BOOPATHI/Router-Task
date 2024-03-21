// Import necessary libraries and hooks
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Topbar component for the navigation menu
function Topbar() {
    // State variable to manage the visibility of links
    const [showLinks, setShowLinks] = useState(false);

    // Function to toggle the visibility of links
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container"> {/* Wrap the content in a container */}
                {/* Button for toggling links on smaller screens */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleLinks}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar content */}
                <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`} id="navbarNavAltMarkup">
                    {/* List of navigation links */}
                    <ul className="navbar-nav mx-auto"> {/* Use mx-auto class to horizontally center the content */}
                        <li className="nav-item">
                            {/* NavLink for the "All" page */}
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                All
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* NavLink for the "FullStackDevelopment" page */}
                            <NavLink to="/FullStackDevelopment" className="nav-link">
                                Full Stack Development
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* NavLink for the "DataScience" page */}
                            <NavLink to="/DataScience" className="nav-link">
                                Data Science
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* NavLink for the "CyberSecurity" page */}
                            <NavLink to="/CyberSecurity" className="nav-link">
                                Cyber Security
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* NavLink for the "Career" page */}
                            <NavLink to="/Career" className="nav-link">
                                Career
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Topbar; // Export the Topbar component
