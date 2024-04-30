import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>API Test</h1>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/api1">API 1</Link>
        <Link to="/api2">API 2</Link>
      </nav>
    </header>
  );
};

export default Header;
