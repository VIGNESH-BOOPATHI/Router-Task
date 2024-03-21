import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Topbar() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container"> {/* Wrap the content in a container */}
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
                <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`} id="navbarNavAltMarkup">
                    <ul className="navbar-nav mx-auto"> {/* Use mx-auto class to horizontally center the content */}
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                All
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/FullStackDevelopment" className="nav-link">
                                Full Stack Development
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/DataScience" className="nav-link">
                                Data Science
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/CyberSecurity" className="nav-link">
                                Cyber Security
                            </NavLink>
                        </li>
                        <li className="nav-item">
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

export default Topbar;
