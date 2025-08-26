import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="nav-blur">
      <div className="container nav">
        <div className="brand">
          <Link to="/" className="logo" aria-label="Home">Moonflix</Link>
          <span className="badge">UI Demo</span>
        </div>
        <nav className="menu">
          <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <a href="#popular">Popular</a>
          <a href="#new">New</a>
        </nav>
        <div className="auth">
          <Link to="/login" className="ghost">Sign In</Link>
          <Link to="/signup" className="btn small">Create account</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
