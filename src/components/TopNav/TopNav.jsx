import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          alt="logo"
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <button
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item">Home</Link>

        <Link className="navbar-item">Documentation</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary">
              <strong>Sign up</strong>
            </Link>
            <Link className="button is-light">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav;
