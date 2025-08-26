import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container foot">
        <div>© {new Date().getFullYear()} Moonflix UI • Demo only</div>
        <div className="links">
          <a href="#" rel="noreferrer">Privacy</a>
          <a href="#" rel="noreferrer">Terms</a>
          <a href="#" rel="noreferrer">Contact</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
