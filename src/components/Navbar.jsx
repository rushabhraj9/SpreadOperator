import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand whtclr" href="www.google.com">
          tindog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
