import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const getActiveStyle = ({ isActive }) =>
    isActive ? { color: '#F15B2A', fontWeight: 'bold' } : {};

  return (
    <nav className="sidebar">
      <NavLink to="/" className=" nav-link" style={getActiveStyle} end>
        Home
      </NavLink>
      <NavLink to="/recipes" className="nav-link" style={getActiveStyle}>
        <strong>Articles</strong>
      </NavLink>
      <NavLink to="/about" className="nav-link" style={getActiveStyle}>
        About the project
      </NavLink>
    </nav>
  );
};

export default Header;
