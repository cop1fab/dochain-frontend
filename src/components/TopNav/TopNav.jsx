import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';
import logo from '../../assets/logo.png';

const TopNav = () => (
  <header>
    <div className="logo">
      <img src={logo} width="50px" alt="logo" />
    </div>
    <nav>
      <Link to="/login" class="btn primary text-white">
        LOGIN
      </Link>
      <Link to="signup" class="btn is-outlined text-primary">
        REGISTER
      </Link>
    </nav>
  </header>
);

export default TopNav;
