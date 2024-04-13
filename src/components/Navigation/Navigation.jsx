import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa'; // Import icons from react-icons
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">
            <FaHome className="navigation-icon" />
            Dashboard
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/job-listings" className="navigation-link">
            <FaPlus className="navigation-icon" />
            Job Listings
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/user-management" className="navigation-link">
            <FaUser className="navigation-icon" />
            User Management
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
